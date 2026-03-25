import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hzopwmoxtyslyagoitkt.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6b3B3bW94dHlzbHlhZ29pdGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NDU1MDEsImV4cCI6MjA5MDAyMTUwMX0.4n30SitrlwsmJbF_caazQMY_3Oi-rscHnk4uyDLFu2I"

export const supabase = createClient(supabaseUrl, supabaseKey)
