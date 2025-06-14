import { FaGithub } from 'react-icons/fa';

export const RESUME_KO = {
  about: '안녕하세요 개발자입니다.',
  skills: {
    language: ['Javascript', 'Typescript', 'Python'],
    frontend: ['React.js', 'Next.js'],
  },
  contact: {
    email: 'knyeon26@gmail.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/Blue-Kite',
        icon: FaGithub,
      },
    ],
  },
} as const;
