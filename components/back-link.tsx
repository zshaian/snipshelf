import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { FaChevronLeft } from 'react-icons/fa6';

export default function BackLink() {
  return (
    <div className="py-1 px-2 w-full border-b border-input">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'capitalize rounded-none'
        )}
      >
        <FaChevronLeft />
        <span>back</span>
      </Link>
    </div>
  );
}
