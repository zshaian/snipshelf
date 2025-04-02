'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Error name base on auth error query parameters
 * docs: https://authjs.dev/guides/pages/error
 */
type Error = 'Configuration' | 'AccessDenied' | 'Verification' | 'Default';

export default function AuthErrorPage() {
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
      <p className="capitalize">
        there was a problem when trying to authenticate. please contact us if
        this error persist. unique error code
        {/* if the value of the error is default change it to something more meaningful */}
        <code>{error === 'Default' ? 'Something went wrong' : error}</code>
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
