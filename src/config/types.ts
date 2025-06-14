import { RESUME_EN } from '@/data/resume/resume-en';
import { RESUME_KO } from '@/data/resume/resume-ko';

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

export const RESUME = {
  en: {
    data: RESUME_EN,
    aboutClassName: '',
  },
  ko: {
    data: RESUME_KO,
    aboutClassName: 'sm:whitespace-pre-wrap whitespace-normal',
  },
};

export type Locale = keyof typeof RESUME;
