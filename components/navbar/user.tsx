import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { buttonVariants } from '@/components/ui/button';

export default function User() {
  return (
    <Link
      href="#"
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'rounded-none'
      )}
    >
      <FiUser />
    </Link>
  );
}
