/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './blocks/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './css/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Lora', 'Roboto', ...defaultTheme.fontFamily.sans],
        nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.teal,
        gray: colors.neutral,
      },
      deliciousHamburgers: {
        size: '30px', // must be in px.
        color: '#586061',
        colorLight: '#fff8f4',
        padding: '0px', // must be in px.
        animationSpeed: 1,
      },
    },
  },
  plugins: [require('tailwindcss-delicious-hamburgers')]
}
