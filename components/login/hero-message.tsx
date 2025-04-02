import Image from 'next/image';

export default function HeroMessage() {
  return (
    <section className="p-4 flex flex-col gap-4 items-center justify-center lg:flex-[0.9] lg:bg-zinc-200 lg:dark:bg-black">
      <Image
        src="/images/logo_md.svg"
        alt="logo"
        height={120}
        width={120}
        className="rounded-[50%]"
      />
      <h1 className="text-4xl font-bold uppercase">log in</h1>
      <p className="text-center">
        Log in today and start creating, showcasing, and sharing your amazing
        code snippets with the world!
      </p>
    </section>
  );
}
