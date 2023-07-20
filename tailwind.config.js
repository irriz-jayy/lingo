/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        paragraph: ["Outfit"],
        heading: ['"DM Serif Display"'],
        logo: ["Pacifico"],
      },
      colors: {
        main: "#4E211F",
        button: "#914F3B",
        text1: "#D58D57",
        text2: "#000000",
      },
    },
  },
  plugins: [],
};
