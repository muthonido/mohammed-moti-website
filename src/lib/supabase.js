import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fkovljvpslqelwnfjgxb.supabase.co";

const supabaseAnonKey =
  "sb_publishable_ktx98HkUnRG9DU7oyitqyQ_hNZ5PwMK";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);