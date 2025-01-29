'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={handleTheme}
      className='border border-black transition-all duration-300 dark:border dark:border-white/20 hover:dark:border-white/40'
    >
      {theme === 'light' ? <MdOutlineLightMode size={30} /> : <MdOutlineDarkMode size={30} />}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitch;
