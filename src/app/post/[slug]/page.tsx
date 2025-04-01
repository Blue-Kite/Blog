import { PostDetail } from '@/components/post/PostDetail';
import { getPostDetail } from '@/lib/post';
import { use } from 'react';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  console.log(slug);
  const post = getPostDetail(slug);

  if (!post) {
    return false;
  }

  return <PostDetail post={post} />;
}
