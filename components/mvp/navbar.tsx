'use client';

import Image from 'next/image';
import NavbarDropdown from '@/components/mvp/navbar-dropdown';
import NavbarRow from '@/components/mvp/navbar-row';
import { FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="w-full py-2 px-4 flex items-center bg-white/50 dark:bg-black/50 justify-between overflow-hidden border-b border-dashed border-zinc-400/20 backdrop-blur-md">
      <section className="flex items-center gap-3">
        <Image
          src="/images/logo_md.svg"
          alt=""
          height={30}
          width={30}
          className="rounded-full"
        />
        <p className="uppercase font-bold">snipshelf</p>
      </section>
      <div className="flex gap-2 lg:gap-4 items-center">
        <Link
          href="#"
          className={`${path === '/mvp/snippets/create' ? 'hidden' : 'inline-flex'} py-1 px-2 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50`}
        >
          <FiPlus />
          <span className="capitalize hidden lg:inline">add code snippet</span>
        </Link>
        <NavbarDropdown />
        <NavbarRow />
      </div>
    </nav>
  );
}
