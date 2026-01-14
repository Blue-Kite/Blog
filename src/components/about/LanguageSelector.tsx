'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import * as S from '@/components/ui/select';
import { cn } from '@/libs/utils';
import { RiGlobalLine } from 'react-icons/ri';

export default function LanguageSelector({
  className,
}: {
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isKo = /\/ko\/?$/.test(pathname);
  const isEn = /\/en\/?$/.test(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onSelectChange = (value: string) => {
    if (value === 'ko') {
      router.push(pathname.replace(/\/en\/?$/, '/ko'));
    } else {
      router.push(pathname.replace(/\/ko\/?$/, '/en'));
    }
  };

  return (
    <S.Select onValueChange={onSelectChange} defaultValue={isEn ? 'en' : 'ko'}>
      <S.SelectTrigger className={cn('w-fit gap-2', className)}>
        <RiGlobalLine />
        <S.SelectValue />
      </S.SelectTrigger>
      <S.SelectContent align='center'>
        <S.SelectItem
          className='flex justify-between'
          disabled={isKo}
          value='ko'
        >
          한국어
        </S.SelectItem>
        <S.SelectItem
          className='flex justify-between'
          disabled={isEn}
          value='en'
        >
          English
        </S.SelectItem>
      </S.SelectContent>
    </S.Select>
  );
}
