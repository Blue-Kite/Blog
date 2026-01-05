import { PostDetail } from '@/components/post/PostDetail';
import { getAllPosts, getPostDetail } from '@/libs/post';
import { SITE_CONFIG } from '@/shared/constant';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamicParams = false; //미리 생성된 경로만 허용

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    category: post.categoryPath,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostDetail(category, slug);

  if (!post) {
    return { title: 'Not Found' };
  }

  const title = `${post.metadata.title} | Kite.Post`;
  const description = post.metadata.description;

  return {
    title,
    description,
    keywords: post.categoryName,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.metadata.date,
      url: `${new URL(SITE_CONFIG.domain)}${post.url}`,
    },
    twitter: {
      title,
      description,
    },
  };
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
