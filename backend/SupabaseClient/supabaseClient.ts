import { createClient } from '@supabase/supabase-js';

const supabaseUrl =  'https://aicpqlndrcirldapryjz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpY3BxbG5kcmNpcmxkYXByeWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNDMwMDYsImV4cCI6MjA2NzgxOTAwNn0.dx3gHHzE4hD2fZ-Nf2rhq2iaR47lYPe6_HIzOSBVZ1U';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;