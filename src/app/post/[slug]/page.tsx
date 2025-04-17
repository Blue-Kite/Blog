import { PostDetail } from '@/components/post/PostDetail';
import { getPostDetail } from '@/lib/post';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = getPostDetail(slug);

  if (!post) {
    return false;
  }

  return <PostDetail post={post} />;
}
