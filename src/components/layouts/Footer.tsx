'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='flex h-[80px] flex-col items-center justify-between bg-blue-950 py-3 text-center sm:h-[100px] sm:py-5 print:hidden'>
      <Link href='https://github.com/Blue-Kite' target='_blank'>
        <FaGithub className='h-[1.2rem] w-[1.2rem]' color='white' />
      </Link>
      <div className='text-white'>
        © {`${new Date().getFullYear()} `}
        <span className='font-semibold'>Kite</span> all rights reserved.
      </div>
    </footer>
  );
};
