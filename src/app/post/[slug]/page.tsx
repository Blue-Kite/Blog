import { PostDetail } from '@/components/post/PostDetail';
import { getAllPosts, getPostDetail } from '@/libs/post';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = getPostDetail(slug);

  if (!post) notFound();

  return <PostDetail post={post} />;
}
