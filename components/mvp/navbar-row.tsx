import Link from 'next/link';
import ThemeCheck from '@/components/theme-check';
import { FiUser } from 'react-icons/fi';
import { Separator } from '@/components/ui/separator';

export default function NavbarRow() {
  return (
    <section className="flex space-x-2 h-5 max-lg:hidden">
      <ThemeCheck />
      <Separator orientation="vertical" />
      <Link href="#" className="flex items-center gap-2">
        <FiUser className="font-semibold" />
      </Link>
    </section>
  );
}
