import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['var(--noto_sans_kr)'],
      pretendard: ['var(--font-pretendard)'],
    },
    extend: {
      colors: {
        input: 'var(--input)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        blue: {
          '50': '#ecf9ff',
          '100': '#d4f0ff',
          '200': '#b2e7ff',
          '300': '#7ddaff',
          '400': '#40c2ff',
          '500': '#14a0ff',
          '600': '#007fff',
          '700': '#0067ff',
          '800': '#0067ff',
          '900': '#0848a0',
          '950': '#0a2d61',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'h2, h3, h4': {
              scrollMarginTop: '0rem',
            },
            code: {
              counterReset: 'line',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            ':not(pre) > code': {
              fontWeight: 'inherit',
              position: 'relative',
              bottom: 1,
              margin: '0 3px',
              color: '#0848a0',
              backgroundColor: 'rgba(135,131,120,0.15)',
              borderRadius: 3,
              padding: '0.2em 0.4em',
              overflowWrap: 'break-word',
            },
            a: {
              textUnderlineOffset: '4px', // 밑줄과 텍스트 사이 간격
              textDecorationThickness: 1, // 밑줄 두께
              fontWeight: 600, // 링크 텍스트 굵기 (semi-bold)
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
