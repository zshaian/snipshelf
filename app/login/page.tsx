import LoginForm from '@/components/login/form';
import HeroMessage from '@/components/login/hero-message';

export default function LoginPage() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <main className="p-8 flex flex-col justify-center gap-8 border border-input rounded-lg overflow-hidden lg:flex-row lg:p-0 lg:min-h-[400px] lg:gap-0">
        <HeroMessage />
        <LoginForm />
      </main>
    </div>
  );
}
