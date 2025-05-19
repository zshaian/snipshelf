'use server';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { buttonVariants } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import SignOutButton from '@/components/sign-out-button';

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
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="pl-2 pr-0 rounded-none cursor-pointer"
        >
          <Image
            src={user.user_metadata.avatar_url}
            alt="user profile"
            height={30}
            width={30}
            className="inline-block rounded-full"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-y-2">
          <Link
            href={`/snippets/${user.id}`}
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            Your Profile
          </Link>
          <SignOutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}
