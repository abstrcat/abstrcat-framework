/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './main.ts',
    './index.html',
    './layouts/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './utils/**/*.{html,js,jsx,ts,tsx}',
    './modules/**/*.{html,js,jsx,ts,tsx}'
  ],
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
