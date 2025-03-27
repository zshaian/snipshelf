import Image from 'next/image';
import SnippetVersion from '@/components/mvp/snippet-version';
import CodeEditorReadOnly from '@/components/mvp/code-editor-read-only';
import { Button } from '../ui/button';
import { CiBookmark } from 'react-icons/ci';
import { IoShareOutline, IoCopyOutline } from 'react-icons/io5';

export default function SnippetInfoView() {
  return (
    <main className="mx-auto p-8 max-w-[800px] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/mvp/demo_author_image.png"
            alt=""
            height={30}
            width={30}
            className="rounded-full"
          />
          <p className="capitalize">john smith</p>
        </div>
        <p className="capitalize">feb 27, 2025</p>
      </div>
      <p className="text-xl font-bold capitalize">
        logging hello world in javascript
      </p>
      <p>This is how you log hello world in javascript using a function call</p>
      <ul className="flex gap-1 text-sm capitalize">
        <li className="py-1 px-3 border border-input bg-input/30 rounded-full">
          arrays
        </li>
        <li className="py-1 px-3 border border-input bg-input/30 rounded-full">
          shuffle
        </li>
        <li className="py-1 px-3 border border-input bg-input/30 rounded-full">
          list
        </li>
      </ul>
      <SnippetVersion />
      <div>
        <p className="py-2 px-4 flex bg-input">
          <span className="ml-auto flex items-center gap-2">
            <span className="h-2 w-2 inline-block bg-yellow-400 rounded-full"></span>
            <span className="capitalize">javascript</span>
          </span>
          <Button
            variant="outline"
            className="py-0 px-4 h-auto ml-auto rounded-full cursor-pointer capitalize"
          >
            <IoCopyOutline />
            <span>copy</span>
          </Button>
        </p>
        <CodeEditorReadOnly />
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
    </main>
  );
}
