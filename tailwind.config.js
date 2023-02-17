/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/..."
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "rubik",
      },
    },
  },
  plugins: [],
};