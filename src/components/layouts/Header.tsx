'use client';

import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';

const navList = [
  { name: 'KiteDev', href: '/blog' },
  { name: 'About', href: '/about' },
];

export const Header = () => {
  return (
    <header className='flex h-[64px] w-full flex-col items-center justify-center'>
      <div className='flex h-full w-full items-center justify-between px-4'>
        <div className='font-poppins flex flex-row items-center gap-[20px]'>
          {navList.map((navItem) => (
            <Link href={navItem.href} key={navItem.name}>
              {navItem.name}
            </Link>
          ))}
        </div>
        <div className='flex gap-3'>
          <MdOutlineLightMode />
          <Link href='https://github.com/Blue-Kite' target='_blank'>
            <FiGithub />
          </Link>
        </div>
      </div>
    </header>
  );
};
