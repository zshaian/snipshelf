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
        href={`/snippets/${userId}`}
        className={cn(
          buttonVariants({ variant: isBookmarksPage ? 'ghost' : 'outline' }),
          `capitalize rounded-full cursor-pointer`
        )}
        replace={true}
      >
        show all
      </Link>
      <Link
        href={`/snippets/${userId}/bookmarks`}
        className={cn(
          buttonVariants({ variant: isBookmarksPage ? 'outline' : 'ghost' }),
          `capitalize rounded-full cursor-pointer`
        )}
        replace={true}
      >
        bookmarks
      </Link>
    </div>
  );
}
