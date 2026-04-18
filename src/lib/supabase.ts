import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jbvfgxezggybjvhcyhrz.supabase.co';
const supabaseAnonKey = 'sb_publishable_RdFI7QDWKw5bW9N4AFnF8A_nDzr4yhL';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);