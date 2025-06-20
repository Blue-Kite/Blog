'use client';

import Link from 'next/link';
import { cn } from '@/libs/utils';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './theme/ThemeSwitch';
import { Search } from './search/Search';

const navList = [
  { name: 'KiteDev', href: '/' },
  { name: 'About', href: '/about' },
];

export const Header = () => {
  const pathname = usePathname();

  const normalizedPathname =
    pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  return (
    <header className='flex h-[64px] w-full flex-col items-center justify-center border-b px-[50px]'>
      <div className='flex h-full w-full items-center justify-between'>
        <div className='flex flex-row items-center gap-[20px] font-poppins'>
          {navList.map((navItem) => {
            const isActive =
              normalizedPathname === navItem.href ||
              normalizedPathname.startsWith(navItem.href + '/');

            return (
              <Link
                href={navItem.href}
                key={navItem.name}
                className={cn(
                  'hover:text-primary text-center text-sm transition-colors',
                  isActive ? 'font-bold text-blue-900' : '',
                )}
              >
                {navItem.name}
              </Link>
            );
          })}
        </div>
        <div className='flex gap-3'>
          <Search />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};
