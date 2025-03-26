import Image from 'next/image';
import NavbarDropdown from '@/components/mvp/navbar-dropdown';
import NavbarRow from './navbar-row';

export default function Navbar() {
  return (
    <nav className="w-full py-1 px-4 flex items-center bg-white/50 dark:bg-black/50 justify-between overflow-hidden border-b border-dashed border-zinc-400/20 backdrop-blur-md">
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
      <NavbarDropdown />
      <NavbarRow />
    </nav>
  );
}
