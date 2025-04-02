import LoginForm from '@/components/login/form';
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
          <LoginForm />
          <div
            className="flex items-center justify-center relative
        before:h-[0.5px] before:w-full before:bg-input before:absolute before:-z-10 before:rounded-md"
          >
            <span className="uppercase bg-background">or</span>
          </div>
          <div className="flex items-center justify-center">
            <OAuthLoginProvider providerName="github" ProviderIcon={FiGithub} />
            <OAuthLoginProvider providerName="google" ProviderIcon={FaGoogle} />
          </div>
        </section>
      </main>
    </div>
  );
}
