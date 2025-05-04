'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function login(providerName: 'google' | 'github') {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: providerName,
    options: {
      redirectTo:
        'https://snipshelf-git-setup-backend-web-dev-projects-vercel.vercel.app/auth/callback',
    },
  });

  if (data && data.url) {
    redirect(data.url);
  }
}
