/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "def": "7px 7px 0px rgb(0, 0, 0)",
      },
      screens: {
        "3xs": "320px",
        "2xs": "375px",
        xs: "425px",
        "2sm": "550px",
        "1.5xl": "1440px",
        "2lg": "2560px",
      },
    },
  },
  plugins: [],
};
