/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        sm: '375px'
      },
      colors: {
        violet: 'hsl(263, 55%, 52%)',
        gray: {
          100: 'hsl(210, 46%, 95%)',
          200: 'hsl(0, 0%, 81%)',
          300: 'hsl(217, 19%, 35%)',
          400: 'hsl(219, 29%, 14%)'
        }
      }
    }
  },
  plugins: []
};
