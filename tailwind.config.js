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
        button: "#020079", //deep blue
        button2: "#0006b1", //hover blue
        text1: "#D58D57",
        text2: "#000000",
      },
    },
  },
  plugins: [],
};
