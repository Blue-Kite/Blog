import { cn } from '@/libs/utils';
import { Heading } from '@/shared/types';
import Link from 'next/link';

interface Props {
  toc: Heading[];
}

const TocTop = ({ toc }: Props) => {
  if (toc.length === 0) return null;

  return (
    <nav className='mb-14 xl:hidden'>
      <h2 id='table-of-contents-top'>On this page</h2>
      <ul>
        {toc.map((item) => (
          <li key={item.link} className={cn(item.indent === 1 && 'ml-4', 'my-0 py-1')}>
            <Link href={item.link} className='hover:text-blue-500'>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TocTop;
