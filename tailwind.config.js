const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#061229",
        secondary: "#3D64AF",
      },
      fontFamily: {
        iranSans: ["var(--font-iranSans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
