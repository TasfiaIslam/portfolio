const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bgColor: "#5c6b63",
        primary: "#30C5FF",
      },
      fontFamily: {
        firaSans: ["'Fira Sans', sans-serif"],
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
