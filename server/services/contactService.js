import { supabase } from './supabaseClient.js';
import { isSupabaseConfigured } from '../config/env.js';

// In-memory fallback for local dev when credentials aren't set yet
const localMessagesStore = [];

export const saveContactMessage = async ({ name, email, subject, message, ipAddress, userAgent }) => {
  const payload = {
    name,
    email,
    subject,
    message,
    ip_address: ipAddress || null,
    user_agent: userAgent || null,
    created_at: new Date().toISOString()
  };

  if (isSupabaseConfigured() && supabase) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([payload])
      .select('id, name, email, subject, created_at')
      .single();

    if (error) {
      console.error('Supabase DB Insert Error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    return {
      success: true,
      data,
      storage: 'supabase_postgres'
    };
  }

  // Fallback storage mode (in-memory for local testing)
  const mockId = `mock-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  const mockRecord = { id: mockId, ...payload };
  localMessagesStore.push(mockRecord);

  console.log(`📥 [Mock Message Received] ID: ${mockId} | From: ${name} <${email}> | Subject: "${subject}"`);

  return {
    success: true,
    data: mockRecord,
    storage: 'local_mock'
  };
};

export const getLocalMessages = () => [...localMessagesStore];
