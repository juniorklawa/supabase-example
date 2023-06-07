import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://hzrzthugysogcbrrxlai.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cnp0aHVneXNvZ2NicnJ4bGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5OTQ5ODMsImV4cCI6MjAwMTU3MDk4M30.Mg3Xn_QcIpWkw3fKpCqzo-NqRCGMaCih6EpHYguAtSU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
