'use client';

import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './theme/ThemeSwitch';

const navList = [
  { name: 'KiteDev', href: '/' },
  { name: 'About', href: '/about' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className='flex h-[64px] w-full flex-col items-center justify-center border-b px-[50px]'>
      <div className='flex h-full w-full items-center justify-between'>
        <div className='flex flex-row items-center gap-[20px] font-poppins'>
          {navList.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.name}
              className={cn(
                'hover:text-primary text-center text-sm transition-colors',
                pathname?.startsWith(navItem.href)
                  ? 'bg-muted text-primary font-medium'
                  : 'text-muted-foreground',
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <div className='flex gap-3'>
          <Button variant='ghost' size='icon'>
            <IoIosSearch size={30} />
          </Button>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};
