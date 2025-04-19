import { getAllPosts } from '@/lib/post';
import { PostCard } from './PostCard';
import { PostContainer } from './PostContainer';

export const PostList = () => {
  const posts = getAllPosts();

  return (
    <PostContainer>
      {posts.map(({ metadata, slug }) => (
        <PostCard key={slug} metadata={metadata} slug={slug} />
      ))}
    </PostContainer>
  );
};
