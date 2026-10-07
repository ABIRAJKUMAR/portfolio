-- ==========================================================
-- Personal Portfolio Database Schema (Supabase PostgreSQL)
-- Target Table: contact_messages
-- Candidate: Abiraj K
-- ==========================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    ip_address TEXT,
    user_agent TEXT
);

-- Optional: Create index for fast querying by created_at or email
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- Enable Row Level Security (RLS) for security best practices
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow service_role key full access (Backend Server)
CREATE POLICY "Enable service role full access" 
ON contact_messages 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Optional: If using authenticated anon client inserts directly (disabled by default since Express backend handles it securely)
-- CREATE POLICY "Enable insert for authenticated users or public" ON contact_messages FOR INSERT WITH CHECK (true);

-- Comment on table for documentation
COMMENT ON TABLE contact_messages IS 'Stores inbound contact form inquiries submitted from the portfolio website';
