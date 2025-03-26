import LoginForm from '@/components/mvp/login-form';
import Image from 'next/image';

export default function Login() {
  return (
    <main className="h-screen p-8 flex items-center justify-center">
      <section className="lg:h-96 p-4 lg:p-0 flex flex-col gap-4 lg:gap-0 lg:flex-row border border-input rounded-lg overflow-hidden">
        <div className="lg:px-2 flex flex-col lg:justify-center items-center gap-2 flex-1 lg:h-full lg:bg-black">
          <Image
            src="/images/logo_md.svg"
            alt="snipshelf logo"
            height={60}
            width={60}
            className="rounded-full"
          />
          <h1 className="text-4xl font-bold uppercase">log in</h1>
          <p className="text-base text-center font-light">
            Log in today and start creating, showcasing, and sharing your
            amazing code snippets with the world!
          </p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
