'use client';

import { useTransition } from 'react';
import { toggleBookmark } from '@/actions/toggle-bookmark';
import { Button } from '@/components/ui';
import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa6';

export default function BookmarkButton({
  snippetId,
  isBookmarked,
}: {
  snippetId: string;
  isBookmarked: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      toggleBookmark(snippetId);
    });
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isPending}
      variant="ghost"
      className="flex gap-2 rounded-none border-r border-input capitalize cursor-pointer"
    >
      {isBookmarked ? <FaBookmark /> : <CiBookmark />}
      <span>Bookmark</span>
    </Button>
  );
}
