'use client';

import { MdOutlineWbSunny } from 'react-icons/md';
import { LuMoon } from 'react-icons/lu';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';

export default function ThemeCheck() {
  const { systemTheme, theme, setTheme } = useTheme();
  const isDarkMode =
    theme === 'system'
      ? systemTheme === 'dark'
        ? true
        : false
      : theme === 'dark'
        ? true
        : false;

  const handleToggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      <Checkbox
        id="theme-check"
        onCheckedChange={handleToggleDarkMode}
        className="hidden"
      />
      <Label htmlFor="theme-check" className="cursor-pointer">
        <span className="text-base font-bold">
          {isDarkMode ? <MdOutlineWbSunny /> : <LuMoon />}
        </span>
        <span className="sr-only">toggle dark mode</span>
      </Label>
    </>
  );
}
