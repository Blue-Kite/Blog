import { PostMatter } from '@/shared/types';
import Link from 'next/link';
import dayjs from 'dayjs';
import { cn } from '@/libs/utils';

interface Props {
  metadata: PostMatter;
  slug: string;
  category: string;
}

export const PostCard = ({ metadata, slug, category }: Props) => {
  return (
    <Link href={`/posts/${category}/${slug}`}>
      <li
        key={slug}
        className={cn(
          'flex w-full flex-col gap-1 px-3 py-5 sm:gap-3',
          'rounded-md transition hover:shadow-xl',
          'border-transparent hover:border hover:border-blue-900',
        )}
      >
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-bold sm:text-xl md:text-lg'>
            {metadata.title}
          </h2>
          <time
            dateTime={dayjs(metadata.date).format('YYYY년 MM월 DD일')}
            className='text-sm'
          >
            {dayjs(metadata.date).format('YYYY년 MM월 DD일')}
          </time>
        </div>
        <p className='text-xs md:text-sm'>{metadata.description}</p>
      </li>
    </Link>
  );
};
