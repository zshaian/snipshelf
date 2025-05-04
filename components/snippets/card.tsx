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
  profiles: { name, avatar },
  created_at,
  isBookmarked = false,
}: SnippetCardProps) {
  return (
    <div className="flex flex-col border border-input rounded-md">
      <div className="p-4 flex flex-col gap-y-4">
        <Link
          href={`/snippets/${id}`}
          className="text-xl font-bold capitalize hover:underline text-blue-400"
        >
          {title}
        </Link>
        <p>{description}</p>

        {/* snippet tags */}
        <ul className="flex flex-wrap items-center gap-x-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="py-1 px-3 capitalize border border-input rounded-3xl bg-input/30"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
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
        <div className="flex items-center gap-x-2">
          <Image
            src={avatar}
            height={30}
            width={30}
            alt="author profile image"
            className="rounded-full"
          />
          <p className="capitalize">{name}</p>
        </div>
        <p className="capitalize">{formatCreationDate(created_at)}</p>
      </div>
    </div>
  );
}
