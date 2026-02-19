import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FBF8F3',
        sand: '#E8E2D9',
        terracotta: '#C47B5B',
        sage: '#8B9F82',
        ink: '#2C2A26',
        stone: '#6B6560',
      },
    },
  },
  plugins: [],
};
export default config;
