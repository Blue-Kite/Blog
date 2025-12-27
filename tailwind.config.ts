import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
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
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
