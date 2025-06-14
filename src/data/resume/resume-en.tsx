import { FaGithub } from 'react-icons/fa';

export const RESUME_EN = {
  about: 'hello i am sw engineer',
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

export type RESUME = typeof RESUME_EN;
