export type Post = PostMatter & {
  id: string;
  category: string[];
  title: string;
  description: string;
  date: string;
  content: string;
  image?: string;
};

export type PostMatter = {
  slug: string;
  readingMinutes: number;
  readingCounts: number;
};
