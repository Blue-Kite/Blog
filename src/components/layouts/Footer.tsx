'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className='flex h-[120px] flex-col items-center justify-center gap-1 bg-blue-950 text-center print:hidden'>
      <div className='mb-4 flex justify-center gap-4'>
        <Link href='https://github.com/Blue-Kite' target='_blank'>
          <FaGithub size={24} color='white' />
        </Link>
        <IoIosMail size={24} color='white' />
      </div>
      <div className='text-white'>
        © {`${new Date().getFullYear()} `}
        <span className='font-semibold'>Kite</span> all rights reserved.
      </div>
    </footer>
  );
};
