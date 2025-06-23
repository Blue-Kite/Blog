import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

const sumClass = (...classnames: string[]) => {
  return classnames.join(' ');
};

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--noto_sans_kr',
  display: 'swap',
});

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretandard',
  weight: '45 920',
});

export const FontClassNames = sumClass(pretendard.className, noto_sans_kr.variable);
