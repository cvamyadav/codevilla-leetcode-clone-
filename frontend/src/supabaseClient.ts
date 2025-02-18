import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://https://alcyjxspgmevvyeyjejj.supabase.co.supabase.co' // Replace with your actual Supabase URL
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsY3lqeHNwZ21ldnZ5ZXlqZWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NjM3NTIsImV4cCI6MjA0NTUzOTc1Mn0.E64Ija2ZIHw9Nje-CWjr2r512aUmwjM2iICI1plCfss'                    // Replace with your actual public API key

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)
