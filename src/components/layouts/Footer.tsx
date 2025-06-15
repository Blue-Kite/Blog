'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className='height-[100px] mt-3 flex flex-col items-center justify-center bg-gray-700 text-center print:hidden'>
      <div className='flex flex-col items-center justify-center gap-4 pt-4'>
        <div className='flex justify-center gap-4'>
          <Link href='https://github.com/Blue-Kite' target='_blank'>
            <FaGithub size={35} color='white' />
          </Link>
          <IoIosMail size={35} color='white' />
        </div>
        <div className='mb-8 text-white'>
          © {`${new Date().getFullYear()} `}
          <span className='font-semibold'>Kite</span> all rights reserved.
        </div>
      </div>
    </footer>
  );
};
