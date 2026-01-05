import { PostDetail } from '@/components/post/PostDetail';
import { getAllPosts, getPostDetail } from '@/libs/post';
import { SITE_CONFIG } from '@/shared/constant';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export const dynamicParams = false; //미리 생성된 경로만 허용

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    category: post.categoryPath,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostDetail(params.category, params.slug);

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
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const post = getPostDetail(category, slug);

  if (!post) notFound();

  return <PostDetail post={post} />;
}
