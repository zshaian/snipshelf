import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AddCodeSnippetCta() {
  return (
    <Link
      href="#"
      className={cn(
        buttonVariants({ variant: 'outline' }),
        '!py-1 !px-1 rounded-sm lg:!py-1 lg:!px-2 h-auto flex items-center capitalize lg:rounded-sm'
      )}
    >
      <FiPlus />
      <span className="hidden lg:inline">create code snippet</span>
    </Link>
  );
}
