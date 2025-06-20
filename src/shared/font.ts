import { Noto_Sans_KR, Poppins } from 'next/font/google';

const sumClass = (...classnames: string[]) => {
  return classnames.join(' ');
};

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--noto_sans_kr',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--poppins',
  display: 'swap',
});

export const FontClassNames = sumClass(
  noto_sans_kr.className,
  poppins.variable,
);
