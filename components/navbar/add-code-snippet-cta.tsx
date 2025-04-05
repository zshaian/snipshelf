import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function AddCodeSnippetCta() {
  const pathName = usePathname();

  // Check if the current path is either '/snippets/create' or '/snippets/edit', if its hide the CTA.
  const isOnCreateOrEditSnippetPage =
    pathName.includes('/snippets/create') ||
    pathName.includes('/snippets/edit');

  return (
    <Link
      href="#"
      className={cn(
        buttonVariants({ variant: 'outline' }),
        `!py-1 !px-1 rounded-sm lg:!py-1 lg:!px-2 h-auto ${isOnCreateOrEditSnippetPage ? 'flex' : 'hidden'} items-center capitalize lg:rounded-sm`
      )}
    >
      <FiPlus />
      <span className="hidden lg:inline">create code snippet</span>
    </Link>
  );
}
