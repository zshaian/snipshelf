import HeroMessage from '@/components/login/hero-message';
import { OAuthLoginProvider } from '@/components/login/oauth-login-provider';
import { FaGoogle } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export default function LoginPage() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <main className="p-8 flex flex-col justify-center gap-8 border border-input rounded-lg overflow-hidden lg:flex-row lg:p-0 lg:min-h-[400px] lg:gap-0">
        <HeroMessage />
        <section className="flex flex-col gap-4 lg:justify-center lg:flex-1 lg:p-8">
          <div className="p-2 flex items-center justify-center gap-2 self-center bg-zinc-300 dark:bg-zinc-700 rounded-full border border-input shadow-md">
            <OAuthLoginProvider providerName="github" ProviderIcon={FiGithub} />
            <OAuthLoginProvider providerName="google" ProviderIcon={FaGoogle} />
          </div>
        </section>
      </main>
    </div>
  );
}
