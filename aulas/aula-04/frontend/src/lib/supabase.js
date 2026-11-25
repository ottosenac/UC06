import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);
export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null;

export function configurationError() {
  return 'Supabase não configurado. Copie .env.example para .env.local e informe a URL e a chave publicável da Aula 03.';
}
