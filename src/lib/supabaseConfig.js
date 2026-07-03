// Supabase connection — these are PUBLIC values and safe to commit.
//
// The anon (public) key is DESIGNED to be exposed in the browser. Your data is
// protected by Row Level Security (RLS) policies in the database, NOT by hiding
// this key. NEVER put the "service_role" / secret key here — that one bypasses
// all security and must stay private.
//
// To fill these in: Supabase dashboard → your project → Settings → API →
// copy "Project URL" and the "anon public" key into the two strings below.

const CONFIG = {
  url: 'https://kkqaeezobpcievjfavjx.supabase.co',
  anonKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcWFlZXpvYnBjaWV2amZhdmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNDQyNjksImV4cCI6MjA5ODYyMDI2OX0.T-kugaEeUu2ywJLW6DHFQFOIBkjI7S8Mm2-Uqio0XAs',
};

// Env vars (if set at build time) take precedence over the committed values.
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || CONFIG.url;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || CONFIG.anonKey;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
