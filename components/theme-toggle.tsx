'use client';

import { useTheme } from 'next-themes';
import { Checkbox, Label, Skeleton } from '@/components/ui';
import { CiDark, CiLight } from 'react-icons/ci';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className="px-2 border-r border-input size-9 flex items-center justify-center">
        <Skeleton className=" rounded-full size-4" />
      </div>
    );
  }

  return (
    <div>
      <Checkbox
        id="theme-toggle"
        className="hidden"
        onCheckedChange={handleChangeTheme}
      />
      <Label
        htmlFor="theme-toggle"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'px-2 cursor-pointer font-black rounded-none border-r border-input'
        )}
      >
        <span>
          {resolvedTheme === 'dark' ? (
            <CiLight strokeWidth="0.5" />
          ) : (
            <CiDark strokeWidth="0.5" />
          )}
        </span>
        <span className="sr-only">toggle dark mode theme</span>
      </Label>
    </div>
  );
}
