import { Post } from '@/config/types';
import Link from 'next/link';

interface Props {
  post: Post;
}
export const PostCard = ({ post }: Props) => {
  return (
    <Link href={post.slug}>
      <li className='flex h-full w-full flex-col rounded-md border shadow-md transition hover:shadow-xl'></li>
    </Link>
  );
};
