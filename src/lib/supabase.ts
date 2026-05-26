import { createClient } from '@supabase/supabase-js'

const supabase=createClient(
'https://bszzusmwwpnxzfjxqkxb.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzenp1c213d3BueHpmanhxa3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTAxNTIsImV4cCI6MjA5NTMyNjE1Mn0.wx29qt4yyzxvYMUHt3YzUcUF4ueMNtxX-mU17QX4j2Y'
)

export default supabase
