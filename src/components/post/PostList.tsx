import { getAllPosts } from '@/libs/post';
import { PostCard } from './PostCard';
import { Section } from '../ui/section';
import { Post } from '@/shared/types';

export const PostList = () => {
  const posts = getAllPosts();

  return (
    <Section>
      {posts.map((post: Post, idx) => (
        <PostCard
          key={idx}
          metadata={post.metadata}
          slug={post.slug}
          category={post.categoryPath}
        />
      ))}
    </Section>
  );
};
