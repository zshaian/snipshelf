import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { IoShareSocialOutline } from 'react-icons/io5';
import { CiBookmark } from 'react-icons/ci';

export type SnippetCardProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  languageName: string;
  authorName: string;
  authorImage: string;
  dateCreated: string;
};

export default function SnippetCard({
  id,
  title,
  description,
  tags,
  languageName,
  authorName,
  authorImage,
  dateCreated,
}: SnippetCardProps) {
  return (
    <li className="flex flex-col border border-input rounded-md">
      <div className="p-4 flex flex-col gap-y-4">
        <Link
          href={`/${id}`}
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
            <span className="h-2 w-2 inline-block rounded-full bg-yellow-300"></span>
            <span className="capitalize">{languageName}</span>
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

      {/* author info */}
      <div className="p-4 flex items-center justify-between border-t border-input">
        <div className="flex items-center gap-x-2">
          <Image
            src={authorImage}
            height={30}
            width={30}
            alt="author profile image"
            className="rounded-full"
          />
          <p className="capitalize">{authorName}</p>
        </div>
        <p className="capitalize">{dateCreated}</p>
      </div>
    </li>
  );
}
