'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function login(providerName: 'google' | 'github') {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: providerName,
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  });

  if (data && data.url) {
    redirect(data.url);
  }
}
