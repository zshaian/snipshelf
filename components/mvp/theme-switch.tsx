'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function ThemeSwitch() {
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
      <Switch
        id="dark-mode-toggle"
        checked={isDarkMode}
        onCheckedChange={handleToggleDarkMode}
      />
      <Label htmlFor="dark-mode-toggle" className="capitalize">
        dark mode
      </Label>
    </>
  );
}
