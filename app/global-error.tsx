'use client';

import Navbar from '@/components/navbar/navbar';
import { Button } from '@/components/ui';
import Image from 'next/image';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body className="h-screen flex flex-col">
        <Navbar />
        <main className="p-8 flex-1 flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-max flex gap-2 justify-start items-center">
              <Image
                src="/images/logo_md.svg"
                alt="logo"
                height={60}
                width={60}
                className="rounded-full"
              />
              <p className="uppercase font-bold">snipshelf</p>
            </div>
            <h2 className="text-3xl">
              Oops - something went wrong please try again
            </h2>
          </div>
          <Button onClick={() => reset()} className="capitalize">
            try again
          </Button>
        </main>
      </body>
    </html>
  );
}
