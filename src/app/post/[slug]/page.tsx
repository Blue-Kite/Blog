import { PostDetail } from '@/components/post/PostDetail';
import { getAllPosts, getPostDetail } from '@/lib/post';

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = getPostDetail(slug);

  if (!post) {
    return false;
  }

  return <PostDetail post={post} />;
}
