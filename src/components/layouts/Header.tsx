'use client';

import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineLightMode } from 'react-icons/md';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

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
                'text-center text-sm transition-colors hover:text-primary',
                pathname?.startsWith(navItem.href)
                  ? 'bg-muted font-medium text-primary'
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
          <Button variant='ghost' size='icon'>
            <MdOutlineLightMode size={30} />
          </Button>
        </div>
      </div>
    </header>
  );
};
