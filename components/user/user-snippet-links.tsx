'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export default function UserSnippetLinks({ userId }: { userId: string }) {
  const currentSnippetListLinks = usePathname();
  const isBookmarksPage = currentSnippetListLinks.includes('bookmarks');

  return (
    <div className="flex gap-x-2">
      <Link
        href={`/user/${userId}`}
        className={cn(
          buttonVariants({ variant: isBookmarksPage ? 'ghost' : 'outline' }),
          `capitalize rounded-full cursor-pointer`
        )}
      >
        show all
      </Link>
      <Link
        href={`/user/${userId}/bookmarks`}
        className={cn(
          buttonVariants({ variant: isBookmarksPage ? 'outline' : 'ghost' }),
          `capitalize rounded-full cursor-pointer`
        )}
      >
        bookmarks
      </Link>
    </div>
  );
}
