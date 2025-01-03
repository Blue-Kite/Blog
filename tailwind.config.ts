import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--noto_sans_kr)'],
      poppins: ['var(--poppins)'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
