import { FaGithub } from 'react-icons/fa';

export const RESUME_EN = {
  name: 'Kite',
  initials: 'Yeon',
  avatarUrl: 'https://avatars.githubusercontent.com/u/55524773?v=4',
  locationLink: 'https://maps.app.goo.gl/gfRhcHZjqCEREqWZ8',
  location: '대한민국 서울특별시 (한국 표준시)',
  about: '프론트엔드 개발자',
  summary:
    '꾸준한 성장과 도전적인 문제를 해결하는 일에 관심이 있습니다.\n코드는 의사소통의 한 방식이라고 생각하여, 명확한 코드를 작성하기 위해 노력합니다.\n',
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
