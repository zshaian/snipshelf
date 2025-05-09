'use client';

import Image from 'next/image';

import SnippetEditorReadOnly from '@/components/snippets/snippet-editor-readonly';
import SnippetLanguageBarCopy from '@/components/snippets/snippet-language-bar-copy';
import type { SnippetProps } from '@/types';
import { use } from 'react';
import ShareButton from '@/components/share-button';
import BackLink from '@/components/back-link';
import { formatCreationDate } from '@/lib';
import BookmarkButton from '@/components/bookmark-button';
import DeleteSnippetButton from '@/components/delete-snippet-button';

export default function SnippetView({
  snippetInfoRequest,
}: {
  snippetInfoRequest: Promise<SnippetProps>;
}) {
  const {
    id,
    title,
    description,
    tags,
    language,
    code,
    profiles: { user_id, name, avatar },
    created_at,
    isBookmarked = false,
  } = use(snippetInfoRequest);

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="w-full px-4">
        <BackLink />
      </div>
      <section className="flex-1 w-full max-w-[800px] pt-4 pb-4 p-8 flex flex-col justify-center gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={avatar}
              alt=""
              height={30}
              width={30}
              className="rounded-full"
            />
            <p className="capitalize">{name}</p>
          </div>
          <p className="capitalize">{formatCreationDate(created_at)}</p>
        </div>

        <p className="text-xl font-bold capitalize">{title}</p>
        <p className="mb-1">{description} </p>

        <ul className="flex gap-1 text-sm capitalize">
          {tags.map((item) => (
            <li
              key={item}
              className="py-1 px-3 border border-input bg-input/30 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col overflow-hidden shadow-md">
          <SnippetLanguageBarCopy codeToCopy={code} language={language} />
          <SnippetEditorReadOnly code={code} language={language} />
        </div>

        <div className="flex">
          <div>
            <DeleteSnippetButton snippetId={id} userId={user_id} />
          </div>

          <div className="ml-auto flex">
            <BookmarkButton snippetId={id} isBookmarked={isBookmarked} />
            <ShareButton id={id} />
          </div>
        </div>
      </section>
    </main>
  );
}
