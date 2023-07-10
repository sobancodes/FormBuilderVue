/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif']
      },
      screens: {
        'xs-mobile': '250px',
        'mobile': '320px',
      }
    },
  },
  plugins: [],
}

