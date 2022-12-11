/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: '375px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px',
          '2xl': '1140px',
        },
      },
      colors: {
        primary: '#3B44F6',
        secondary: '#181818',
        btn: '#D8DAFD',
        footer: '#A0A0A0',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/public/images/banner.png')",
      },
    },
  },
  plugins: [],
};
