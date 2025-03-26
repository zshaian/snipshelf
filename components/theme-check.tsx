'use client';

import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
export default function ThemeCheck() {
  const { systemTheme, theme, setTheme } = useTheme();

  const handleToggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Checkbox
        id="theme-check"
        onCheckedChange={handleToggleDarkMode}
        className="hidden"
      />
      <Label htmlFor="theme-check">
        <span className="text-base font-bold">
          {theme === ' system' ? (
            systemTheme === 'dark' ? (
              <IoSunnyOutline />
            ) : (
              <IoMoonOutline />
            )
          ) : theme === 'dark' ? (
            <IoSunnyOutline />
          ) : (
            <IoMoonOutline />
          )}
        </span>
        <span className="sr-only">toggle dark mode</span>
      </Label>
    </>
  );
}
