import { getAllPosts } from '@/libs/post';
import { PostCard } from './PostCard';
import { Section } from '../ui/section';
import { Post } from '@/shared/types';

export const PostList = () => {
  const posts = getAllPosts();

  return (
    <Section>
      {posts.map((post: Post) => (
        <PostCard
          key={post.url}
          metadata={post.metadata}
          slug={post.slug}
          category={post.categoryPath}
        />
      ))}
    </Section>
  );
};
