import Image from 'next/image';

import { CiBookmark } from 'react-icons/ci';
import { IoShareOutline } from 'react-icons/io5';
import { Button } from '@/components/ui';
import SnippetEditorReadOnly from '@/components/snippets/snippet-editor-readonly';
import SnippetLanguageBarCopy from '@/components/snippets/snippet-language-bar-copy';

type SnippetViewProps = {
  title: string;
  description: string;
  tags: string[];
  code: string;
  programmingLanguageName: string;
  authorImage: string;
  authorName: string;
  date: string;
};

export default function SnippetView({
  title,
  description,
  tags,
  code,
  programmingLanguageName,
  authorImage,
  authorName,
  date,
}: SnippetViewProps) {
  return (
    <main className="h-screen flex items-center justify-center gap-4">
      <section className="min-w-auto w-[800px] p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={authorImage}
              alt=""
              height={30}
              width={30}
              className="rounded-full"
            />
            <p className="capitalize">{authorName}</p>
          </div>
          <p className="capitalize">{date}</p>
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

        <div className="flex flex-col overflow-hidden">
          <SnippetLanguageBarCopy
            codeToCopy={code}
            programmingLanguageName={programmingLanguageName}
          />
          <SnippetEditorReadOnly
            code={code}
            programmingLanguageName={programmingLanguageName}
          />
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
            <Button
              className="flex gap-2 rounded-none capitalize cursor-pointer"
              variant="ghost"
            >
              <IoShareOutline />
              <span>share</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
