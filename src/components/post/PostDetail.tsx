import dayjs from 'dayjs';
import { Mdx } from '../mdx';
import { PostContainer } from './PostContainer';
import { PostMatter } from '@/shared/types';
import Giscus from './Giscus';
import { FaCalendarDays } from 'react-icons/fa6';
import { parseToc } from '@/libs/post';
import TocTop from './TocTop';
import TocSidebar from './TocSidebar';

interface Props {
  post: {
    metadata: PostMatter;
    content: string;
    slug: string;
  };
}

export const PostDetail = ({ post }: Props) => {
  const toc = parseToc(post.content);

  return (
    <PostContainer className='mb-14'>
      <div className='mt-14 text-center'>
        <h1 className='mb-5 text-3xl font-bold md:text-4xl'>{post.metadata.title}</h1>
        <h4 className='mb-3 text-base'>{post.metadata.description}</h4>
        <div className='mb-5 flex flex-row items-center justify-center gap-1'>
          <FaCalendarDays size={16} />
          <span>{dayjs(post.metadata.date).format('YYYY년 MM월 DD일')}</span>
        </div>
      </div>
      <TocTop toc={toc} />
      <hr />
      <article className='relative py-14'>
        <TocSidebar toc={toc} />
        <Mdx source={post.content} />
      </article>
      <hr className='mb-14' />
      <Giscus />
    </PostContainer>
  );
};
