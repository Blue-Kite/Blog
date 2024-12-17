'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-4 text-center print:hidden'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/Blue-Kite' target='_blank'>
          <FaGithub />
        </Link>
        <IoIosMail />
      </div>
      <div>
        © 2024. <span className='font-semibold'>Kite</span> all rights
        reserved.
      </div>
    </footer>
  );
};
