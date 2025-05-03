'use client';

import Image from 'next/image';

import { CiBookmark } from 'react-icons/ci';
import { Button } from '@/components/ui';
import SnippetEditorReadOnly from '@/components/snippets/snippet-editor-readonly';
import SnippetLanguageBarCopy from '@/components/snippets/snippet-language-bar-copy';
import type { SnippetProps } from '@/types';
import { use } from 'react';
import ShareButton from '@/components/share-button';

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
    profiles: { name, avatar },
    dateCreated,
  } = use(snippetInfoRequest);

  return (
    <main className="flex-1 flex items-center justify-center gap-4">
      <section className="min-w-auto w-[800px] p-8 flex flex-col gap-4">
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
          <p className="capitalize">{dateCreated}</p>
        </div>

        <p className="text-xl font-bold capitalize">{title}</p>
        <p>{description} </p>

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
          <div className="ml-auto flex">
            <Button
              className="flex gap-2 rounded-none border-r border-input capitalize cursor-pointer"
              variant="ghost"
            >
              <CiBookmark />
              <span>bookmark</span>
            </Button>
            <ShareButton id={id} />
          </div>
        </div>
      </section>
    </main>
  );
}
