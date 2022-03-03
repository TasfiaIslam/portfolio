const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  safelist: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#4895EF',
        'primary-light': 'rgb(187 247 208)',
        'primary-blue': '#4895EF',
        'secondary-blue': '#F0F8FF',
        'primary-text': '#CDD2D8',
        'secondary-text': '#4D515C',
        'text-light-version': '#56697D',
        'text-dark-version': '#CDD2D8',
        'primary-dark': '#041F3C',
        'secondary-dark': '#0E2946',
        'light-button': '#E9EDF4',
        'border-primary': '#182F49',
      },
      fontFamily: {
        firaSans: ["'Fira Sans', sans-serif"],
      },
    },
  },
  plugins: ['gatsby-plugin-postcss'],
};
