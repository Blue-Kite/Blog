import { PostDetail } from '@/components/post/PostDetail';
import { getAllPosts, getPostDetail } from '@/libs/post';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    category: post.categoryPath,
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = getPostDetail(category, slug);

  if (!post) notFound();

  return <PostDetail post={post} />;
}
