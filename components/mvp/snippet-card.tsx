import { IoShareSocialOutline } from 'react-icons/io5';
import { CiBookmark } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function SnippetCard() {
  return (
    <div className="border border-input rounded-lg">
      <div className="p-4 flex flex-col gap-2">
        <Link
          href="#"
          className="text-lg font-bold capitalize hover:underline text-blue-400"
        >
          shuffle array
        </Link>
        <p>This is how you shuffle an array in javascript.</p>
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
        <div className="flex justify-between">
          <p className="flex gap-2 items-center justify-center">
            <span className="h-2 w-2 inline-block bg-yellow-400 rounded-full"></span>
            <span className="capitalize">javascript</span>
          </p>
          <div className="flex">
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
              <IoShareSocialOutline />
              <span>share</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-between border-t border-input">
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
    </div>
  );
}
