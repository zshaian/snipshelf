'use server';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { buttonVariants } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';

export default async function User() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return (
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'rounded-none'
        )}
      >
        <FiUser />
      </Link>
    );
  }

  return (
    <Link
      href={`/user/${user.id}`}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'pl-2 pr-0 rounded-none'
      )}
    >
      <Image
        src={user.user_metadata.avatar_url}
        alt="user profile"
        height={30}
        width={30}
        className="inline-block rounded-full"
      />
    </Link>
  );
}
