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
    <Button variant='ghost' size='icon' onClick={handleTheme} className=''>
      {theme === 'light' ? (
        <MdOutlineLightMode className='h-[1.5rem] w-[1.5rem]' />
      ) : (
        <MdOutlineDarkMode className='h-[1.5rem] w-[1.5rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitch;
