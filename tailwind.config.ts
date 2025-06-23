import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--noto_sans_kr)'],
      pretendard: ['var(--font-pretendard)'],
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: {
          '50': '#ecfaff',
          '100': '#d5f2ff',
          '200': '#b5ebff',
          '300': '#82e0ff',
          '400': '#47cbff',
          '500': '#1daeff',
          '600': '#058fff',
          '700': '#0077f6',
          '800': '#0763cf',
          '900': '#0d529b',
          '950': '#0d325e',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
