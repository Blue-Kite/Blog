'use client';

import useTocHighlight from '@/hooks/useTocHighlight';
import { cn } from '@/libs/utils';
import { Heading } from '@/shared/types';
import Link from 'next/link';
import { ScrollToComment, ScrollTop } from './TocButtons/ScrollButtons';
import { CopyLinkButton } from './TocButtons/CopyLinkButton';

interface Props {
  toc: Heading[];
}

const TocSidebar = ({ toc }: Props) => {
  const activeIdList = useTocHighlight('h2, h3');

  return (
    <aside className='not-prose absolute -top-[200px] left-full hidden h-[calc(100%+150px)] border border-red-500 xl:block'>
      <div className='sticky bottom-0 top-[200px] z-10 ml-10 mt-[200px] w-[240px]'>
        <div className='mb-4 border-l px-4 py-2'>
          <div className='mb-1 text-lg font-semibold'>On this page</div>
          <ul className='text-xs'>
            {toc.map((item) => {
              const isH3 = item.indent === 1;
              const isIntersecting = activeIdList.includes(item.link);
              return (
                <li
                  key={item.link}
                  className={cn(
                    isH3 && 'ml-4',
                    isIntersecting && 'font-medium hover:text-blue-500',
                    'py-1 transition',
                  )}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='flex gap-2'>
          <ScrollTop />
          <ScrollToComment />
          <CopyLinkButton />
        </div>
      </div>
    </aside>
  );
};

export default TocSidebar;
