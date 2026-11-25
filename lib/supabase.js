// Cliente Supabase para uso no protótipo (browser ESM) e referência da Aula 03.
// Configure as variáveis em .env (não versionar) ou em window.__SUPABASE_CONFIG__.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const url = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_URL)
  || (globalThis.__SUPABASE_CONFIG__ && globalThis.__SUPABASE_CONFIG__.url)
  || ''
const anonKey = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_ANON_KEY)
  || (globalThis.__SUPABASE_CONFIG__ && globalThis.__SUPABASE_CONFIG__.anonKey)
  || ''

export const supabase = (url && anonKey) ? createClient(url, anonKey) : null
export const supabaseConfigOk = Boolean(url && anonKey)
