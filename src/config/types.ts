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

export interface Heading {
  text: string; // 제목 (예: '소개')
  link: string; // 해당 제목으로 이동할 수 있는 앵커 링크 (예: '#소개')
  indent: number; // 제목의 깊이. ## → 0, ### → 1
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
