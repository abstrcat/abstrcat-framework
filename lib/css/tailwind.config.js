/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './main.ts', './index.html'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-children')
  ]
};
