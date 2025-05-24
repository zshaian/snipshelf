import type { IconType } from 'react-icons/lib';
import { Button } from '@/components/ui';
import { login } from '@/actions';

type OAuthLoginProviderProps = {
  /**
   * name of the provider that is available in next-auth. Since only google and github
   * are used as OAuth providers, they are defined as a union type. If more OAuth providers
   * are added, the type can be changed to `string`.
   */
  providerName: 'google' | 'github';
  ProviderIcon: IconType;
};

export async function OAuthLoginProvider({
  providerName,
  ProviderIcon,
}: OAuthLoginProviderProps) {
  const loginWithProvider = login.bind(null, providerName);

  return (
    <form action={loginWithProvider}>
      <Button
        type="submit"
        variant="ghost"
        className="py-2 h-auto w-auto cursor-pointer"
      >
        <ProviderIcon className="!size-8" />
        <span className="sr-only">{`log in using ${providerName}`}</span>
      </Button>
    </form>
  );
}
