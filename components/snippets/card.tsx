import Image from 'next/image';
import Link from 'next/link';
import LanguageBadge from '@/components/language-badge';
import type { SnippetCardProps } from '@/types';
import ShareButton from '@/components/share-button';
import BookmarkButton from '@/components/bookmark-button';
import { formatCreationDate } from '@/lib';

export default function SnippetCard({
  id,
  title,
  description,
  tags,
  language,
  profiles: { user_id, name, avatar },
  created_at,
  isBookmarked = false,
}: SnippetCardProps) {
  return (
    <div className="h-full flex flex-col justify-between border border-input rounded-md shadow-md bg-zinc-100 dark:bg-zinc-900">
      <div className="p-4 flex flex-col flex-1 gap-y-4">
        <Link
          href={`/${id}`}
          className="text-xl font-bold capitalize hover:underline text-blue-400 truncate"
        >
          {title}
        </Link>
        <p className="line-clamp-2 break-words">{description}</p>

        {/* snippet tags */}
        <ul className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="py-1 px-3 capitalize border border-input rounded-3xl bg-input/30"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-auto">
          <p className="flex items-center gap-x-2">
            <LanguageBadge language={language} />
          </p>
          <div className="flex">
            <BookmarkButton snippetId={id} isBookmarked={isBookmarked} />
            <ShareButton id={id} />
          </div>
        </div>
      </div>

      {/* author info */}
      <div className="p-4 flex items-center justify-between border-t border-input">
        <Link
          className="flex items-center gap-x-2 group"
          href={`/snippets/${user_id}`}
        >
          <Image
            src={avatar}
            height={30}
            width={30}
            alt="author profile image"
            className="rounded-full"
          />
          <p className="capitalize group-hover:to-blue-400">{name}</p>
        </Link>
        <p className="capitalize">{formatCreationDate(created_at)}</p>
      </div>
    </div>
  );
}
