/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '1440px',
        },
      },
      colors: {
        primary: '#161616',
        secondary: '#C6FB3E',
        darkGray: '#252525',
        lightGray: '#2B2B2B',
        gray: '#E9E9E9',
      },
    },
  },
  plugins: ['@tailwindcss/typography'],
}

module.exports = config
