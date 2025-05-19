'use client';

import { signOut } from '@/actions';
import { Button } from '@/components/ui';
import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';

export default function SignOutButton() {
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    setPending(true);
    try {
      await signOut();
    } catch (error) {
      console.error('something went wrong', error);
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSignOut}>
      <Button
        type="submit"
        variant="outline"
        className="w-full"
        disabled={pending}
      >
        {pending && <FiLoader className="animate-spin" />}
        <span>Sign Out</span>
      </Button>
    </form>
  );
}
