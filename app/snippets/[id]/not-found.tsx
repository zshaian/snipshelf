import Navbar from '@/components/navbar/navbar';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex items-center justify-center">
        <div className="px-4">
          <Image
            src="/images/logo_md.svg"
            alt="logo"
            height={60}
            width={60}
            className="rounded-full"
          />
        </div>
        <div className="px-4 flex flex-col gap-2 border-l border-input">
          <h2 className="text-3xl capitalize">
            <span className="font-bold">404</span> not found
          </h2>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'default' }), 'capitalize')}
          >
            go to code snippets list
          </Link>
        </div>
      </main>
    </>
  );
}
