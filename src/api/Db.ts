import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvamdteWV0bGtiZXV6dG96dXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNDM2MzQsImV4cCI6MjAyNTcxOTYzNH0.a6RTvdEJXrmyQf71THFIwZxQL60x_4l5ps5Fq5gS_gI";

const SuperBaseSecret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvamdteWV0bGtiZXV6dG96dXR3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDE0MzYzNCwiZXhwIjoyMDI1NzE5NjM0fQ.2DTO5gTNwKN_7GWO3IQ4QNiwe3XXG_2U4ulmhKuwDm0";

const dbUrl = "https://xojgmyetlkbeuztozutw.supabase.co";
const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  removeItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
};

export const SuperBase = createClient(dbUrl, supabaseKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
