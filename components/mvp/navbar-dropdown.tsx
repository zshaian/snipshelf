import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { EllipsisVertical } from 'lucide-react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import ThemeSwitch from '@/components/theme-switch';

export default function NavbarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="capitalize">options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2">
            <FiUser className="font-semibold" />
            <span className="capitalize font-semibold">log in</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ThemeSwitch />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
