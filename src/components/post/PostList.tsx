import { getAllPosts } from '@/libs/post';
import { PostCard } from './PostCard';
import { Section } from '../ui/section';

export const PostList = () => {
  const posts = getAllPosts();

  return (
    <Section>
      {posts.map(({ metadata, slug }) => (
        <PostCard key={slug} metadata={metadata} slug={slug} />
      ))}
    </Section>
  );
};
