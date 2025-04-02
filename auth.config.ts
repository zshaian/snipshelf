import type { NextAuthConfig } from 'next-auth';

import Github from 'next-auth/providers/github';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [Github],
} satisfies NextAuthConfig;
