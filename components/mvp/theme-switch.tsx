'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const handleToggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Switch
        id="dark-mode-toggle"
        checked={
          theme === 'system'
            ? systemTheme === 'dark'
              ? true
              : false
            : theme === 'dark'
              ? true
              : false
        }
        onCheckedChange={handleToggleDarkMode}
      />
      <Label htmlFor="dark-mode-toggle" className="capitalize">
        dark mode
      </Label>
    </>
  );
}
