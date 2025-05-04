import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-4 items-center">
      <h1 className="uppercase text-3xl font-black">project demo route</h1>
      <ul className="text-blue-400 flex flex-col gap-2 items-start text-xl">
        <li>
          <Link href="/mvp/login" className="hover:underline">
            Login Page
          </Link>
        </li>
        <li>
          <Link href="/mvp/snippets" className="hover:underline">
            Snippets Page
          </Link>
        </li>
        <li>
          <Link href="/mvp/snippets/create" className="hover:underline">
            Snippets Create Page
          </Link>
        </li>
        <li>
          <Link href="/mvp/snippets/view" className="hover:underline">
            Snippets View page
          </Link>
        </li>
        <li>
          <Link href="/mvp/snippets/profile" className="hover:underline">
            Snippets Profile Page
          </Link>
        </li>
      </ul>
    </main>
  );
}
