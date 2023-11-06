/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0a192f",
        lightPrimaryColor: "#112240",
        lightestPrimaryColor: "#233554",
        secondaryColor: "#64ffda",
        tertiaryColor: "#8892b0",
        lightTertiaryColor: "#a8b2d1",
        lightestTertiaryColor: "#ccd6f6",
      },
    },
  },
  plugins: [],
};