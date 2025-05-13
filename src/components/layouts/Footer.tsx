'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className='mt-3 flex flex-col items-center justify-center gap-4 text-center print:hidden'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/Blue-Kite' target='_blank'>
          <FaGithub size={35} />
        </Link>
        <IoIosMail size={35} />
      </div>
      <div className='mb-8'>
        © {`${new Date().getFullYear()} `}
        <span className='font-semibold'>Kite</span> all rights reserved.
      </div>
    </footer>
  );
};
