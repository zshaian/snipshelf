import type { IconType } from 'react-icons/lib';
import { Button } from '../ui';
import { signIn } from '@/auth';

type OAuthLoginProviderProps = {
  /**
   * name of the provider that is available in next-auth. Since only google and github
   * are used as OAuth providers, they are defined as a union type. If more OAuth providers
   * are added, the type can be changed to `string`.
   */
  providerName: 'google' | 'github';
  ProviderIcon: IconType;
};

export function OAuthLoginProvider({
  providerName,
  ProviderIcon,
}: OAuthLoginProviderProps) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn(providerName);
      }}
    >
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
