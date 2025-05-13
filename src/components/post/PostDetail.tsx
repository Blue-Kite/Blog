import dayjs from 'dayjs';
import { Mdx } from '../mdx';
import { PostContainer } from './PostContainer';
import { PostMatter } from '@/config/types';
import Giscus from './Giscus';

interface Props {
  post: {
    metadata: PostMatter;
    content: string;
    slug: string;
  };
}

export const PostDetail = ({ post }: Props) => {
  return (
    <PostContainer>
      <div className='py-5'>
        <h1 className='mb-1 text-3xl font-semibold'>{post.metadata.title}</h1>
        <h4>{post.metadata.description}</h4>
        <small>{dayjs(post.metadata.date).format('YYYY년 MM월 DD일')}</small>
      </div>

      <div className='mb-5 flex flex-col gap-10'>
        <Mdx source={post.content} />
        <Giscus />
      </div>
    </PostContainer>
  );
};
