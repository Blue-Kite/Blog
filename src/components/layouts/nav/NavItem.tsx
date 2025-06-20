'use client';

import Link from 'next/link';
import { cn } from '@/libs/utils';
import { usePathname } from 'next/navigation';

interface Props {
  name: string;
  href: string;
}

export const NavItem = ({ name, href }: Props) => {
  const pathname = usePathname();
  const normalizedPathname =
    pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  const isActive = normalizedPathname === href || normalizedPathname.startsWith(href + '/');

  return (
    <Link
      href={href}
      className={cn(
        'hover:text-primary text-center text-sm transition-colors',
        isActive ? 'font-bold text-blue-900' : '',
      )}
    >
      {name}
    </Link>
  );
};
