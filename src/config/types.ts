export interface PostMatter {
  title: string;
  description: string;
  date: Date;
}

export interface Post extends PostMatter {
  content: string;
  //readingMinutes: number;
  //readingCounts: number;
}
