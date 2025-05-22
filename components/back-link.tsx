import { cn } from '@/lib';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
import { buttonVariants } from '@/components/ui/button';

export default function BackLink() {
  return (
    <div className="my-4 w-full">
      <Link
        href={'/snippets'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          '!px-1 capitalize rounded-none cursor-pointer'
        )}
      >
        <FaChevronLeft />
        <span>back</span>
      </Link>
    </div>
  );
}
