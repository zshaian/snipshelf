'use client';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';

export default function ErrorPage({
  message,
  children,
}: {
  message?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
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
          <h2 className="text-3xl flex flex-col gap-y-4">
            <span>Oops - something went wrong please try again</span>
            {message && (
              <span className="py-1 px-3 text-lg text-light text-center text-red-500 bg-zinc-800 rounded-xs shadow-md self-center">
                {message}
              </span>
            )}
          </h2>
        </div>
        {children}
      </main>
    </>
  );
}
