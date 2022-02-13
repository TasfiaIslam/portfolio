const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgColor: '#3D3D3D',
        primary: '#30C5FF',
        secondary: '#727272',
      },
      fontFamily: {
        firaSans: ["'Fira Sans', sans-serif"],
      },
    },
  },
  plugins: ['gatsby-plugin-postcss'],
};
