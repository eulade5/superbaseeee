import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ||
  "https://vzjodnuhzoibfzupftyj.supabase.co";

const SUPABASE_ANON_KEY =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6am9kbnVoem9pYmZ6dXBmdHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzU2NzAsImV4cCI6MjA5NDAxMTY3MH0.rLlQXqdLEaVCGr0QwHsVcffTfMCqewL0EygfI0-7QHc";

export const ADMIN_EMAIL =
  (import.meta.env.VITE_ADMIN_EMAIL as string | undefined) || "";

export const PRODUCT_BUCKET = "product-images";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: typeof window !== "undefined",
    autoRefreshToken: typeof window !== "undefined",
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  },
});