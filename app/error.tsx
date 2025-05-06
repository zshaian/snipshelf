'use client';

import ErrorPage from '@/components/error/error-page';
import { Button } from '@/components/ui';
import { ErrorPageProps } from '@/types';
import { useEffect } from 'react';

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error in the client
    console.error(`Something Went Wrong ${error.message}`, error);
  }, []);

  return (
    <ErrorPage message={error.message}>
      <Button onClick={() => reset()} className="capitalize cursor-pointer">
        try again
      </Button>
    </ErrorPage>
  );
}
