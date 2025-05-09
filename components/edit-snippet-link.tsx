'use client';

import { createClient } from '@/utils/supabase/client';
import { MdOutlineEdit } from 'react-icons/md';
import Link from 'next/link';
import { cn } from '@/lib';
import { buttonVariants } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function EditSnippetLink({
  snippetId,
  userId,
}: {
  snippetId: string;
  userId: string;
}) {
  const [isOwner, setIsOwner] = useState<boolean>(false);

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsOwner(user?.id === userId);
    };

    checkUser();
  }, [userId]);

  return (
    <Link
      href={`/edit/${snippetId}`}
      hidden={!isOwner}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'rounded-none cursor-pointer'
      )}
    >
      <MdOutlineEdit />
      <span>Edit</span>
    </Link>
  );
}
