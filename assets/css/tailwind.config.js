/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './main.ts',
    './index.html',
    './layouts/**/*.{html,js,jsx,ts,tsx,cat}',
    './pages/**/*.{html,js,jsx,ts,tsx,cat}',
    './components/**/*.{html,js,jsx,ts,tsx,cat}',
    './utils/**/*.{html,js,jsx,ts,tsx,cat}',
    './modules/**/*.{html,js,jsx,ts,tsx,cat}'
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
