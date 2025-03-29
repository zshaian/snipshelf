import Link from 'next/link';
import ThemeCheck from '@/components/mvp/theme-check';
import { FiUser } from 'react-icons/fi';
import { Separator } from '@/components/ui/separator';

export default function NavbarRow() {
  return (
    <section className="space-x-2 h-5 hidden lg:flex">
      <ThemeCheck />
      <Separator orientation="vertical" />
      <Link href="#" className="flex items-center gap-2">
        <FiUser className="font-semibold" />
      </Link>
    </section>
  );
}
