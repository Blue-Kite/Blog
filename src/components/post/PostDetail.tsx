import dayjs from 'dayjs';
import { Mdx } from '../mdx';
import { PostContainer } from './PostContainer';
import { PostMatter } from '@/config/types';

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
      <div className='mb-6'>
        <h1 className='mb-1 text-3xl font-semibold'>{post.metadata.title}</h1>
        <h4 className='text-gray-700 dark:text-gray-400'>{post.metadata.description}</h4>
        <small className='text-gray-500'>
          {dayjs(post.metadata.date).format('YYYY년 MM월 DD일')}
        </small>
      </div>

      <Mdx source={post.content} />
    </PostContainer>
  );
};
