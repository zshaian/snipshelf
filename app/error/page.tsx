'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

/**
 * Error name base on auth error query parameters
 * docs: https://authjs.dev/guides/pages/error
 */
type Error = 'Configuration' | 'AccessDenied' | 'Verification' | 'Default';

function AuthErrorContent() {
  const search = useSearchParams();
  const error = search.get('error') as Error;

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="/images/logo_md.svg"
        alt="logo"
        height={120}
        width={120}
        className="rounded-full"
      />
      <h1 className="uppercase text-4xl font-black">authentication error</h1>
      <p className="capitalize space-x-2">
        <span>
          there was a problem when trying to authenticate. please contact us if
          this error persist. unique error code
        </span>
        {/* if the value of the error is default change it to something more meaningful */}
        {error && (
          <code className="py-1 px-2 bg-zinc-600 text-white rounded-xs">
            {error === 'Default' ? 'Something went wrong' : error}
          </code>
        )}
      </p>

      <Link
        className={cn(
          buttonVariants({ variant: 'default' }),
          'uppercase font-bold'
        )}
        href="/login"
      >
        back to login
      </Link>
    </main>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthErrorContent />
    </Suspense>
  );
}
