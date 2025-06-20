import { PostMatter } from '@/shared/types';
import Link from 'next/link';
import dayjs from 'dayjs';

interface Props {
  metadata: PostMatter;
  slug: string;
}

export const PostCard = ({ metadata, slug }: Props) => {
  return (
    <article
      key={slug}
      className='w-full rounded-md border-transparent px-3 py-5 transition hover:border hover:border-blue-900 hover:shadow-xl dark:border-transparent dark:hover:border-white'
    >
      <Link href={`/post/${slug}`}>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-bold sm:text-xl md:text-lg'>{metadata.title}</h2>
          <time dateTime={dayjs(metadata.date).format('YYYY년 MM월 DD일')} className='text-sm'>
            {dayjs(metadata.date).format('YYYY년 MM월 DD일')}
          </time>
        </div>
        <p className='text-xs md:text-sm'>{metadata.description}</p>
      </Link>
    </article>
  );
};
