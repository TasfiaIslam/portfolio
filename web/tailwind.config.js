const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'border-purple-300',
    'border-blue-300',
    'border-orange-300',
    'border-green-300',
    'shadow-purple-300',
    'shadow-blue-300',
    'shadow-orange-300',
    'shadow-green-300',
    'hover:bg-purple-300',
    'hover:bg-blue-300',
    'hover:bg-orange-300',
    'hover:bg-green-300',
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
