import { IoChevronBack } from 'react-icons/io5';
import Link from 'next/link';

export default function BackPage() {
  return (
    <div className="p-2 border-b border-input">
      <Link
        href="/mvp/snippets"
        className="p-2 inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50  cursor-pointer capitalize"
      >
        <IoChevronBack />
        <span>back</span>
      </Link>
    </div>
  );
}
