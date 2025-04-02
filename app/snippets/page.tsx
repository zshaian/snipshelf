import { auth } from '@/auth';
import Image from 'next/image';

export default async function Snippets() {
  const session = await auth();
  const user = session?.user;

  if (user) {
    return (
      <main className="h-screen flex flex-col gap-4 items-center justify-center">
        <Image src={user?.image || ''} height={60} width={60} alt="" />
        <p className="text-lg font-semibold uppercase">
          You are now logged in as {user?.name}
        </p>
      </main>
    );
  }

  return (
    <main className="h-screen flex flex-col gap-4 items-center justify-center">
      <p className="text-lg font-semibold uppercase">
        you are currently not logged in
      </p>
    </main>
  );
}
