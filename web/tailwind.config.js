const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'border-purple-400',
    'border-blue-400',
    'border-orange-400',
    'border-yellow-400',
    'shadow-purple-400',
    'shadow-blue-400',
    'shadow-orange-400',
    'shadow-yellow-400',
    'hover:bg-purple-400',
    'hover:bg-blue-400',
    'hover:bg-orange-400',
    'hover:bg-yellow-400',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgColor: '#3D3D3D',
        primary: '#60C689',
        'primary-light': 'rgb(187 247 208)',
      },
      fontFamily: {
        firaSans: ["'Fira Sans', sans-serif"],
      },
    },
  },
  plugins: ['gatsby-plugin-postcss'],
};
