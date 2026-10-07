import { createClient } from '@supabase/supabase-js';
import { config, isSupabaseConfigured } from '../config/env.js';

let supabase = null;

if (isSupabaseConfigured()) {
  try {
    supabase = createClient(config.supabase.url, config.supabase.serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
    console.log('✅ Supabase client initialized with PostgreSQL connection.');
  } catch (err) {
    console.error('⚠️ Failed to initialize Supabase client:', err.message);
  }
} else {
  console.warn(
    '⚠️ [NOTICE] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not configured in .env.\n' +
    '   Running in Local Mock Mode for contact messages until credentials are provided.'
  );
}

export { supabase };
