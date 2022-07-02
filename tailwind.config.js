/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "rubik": ['"Rubik Moonrocks"', 'cursive'],
      "inter": ['Inter', 'sans-serif']
    },

    extend: {
      colors: {
        'orange': "#FFC222",
        'green': " #00A850"
      },
    },
  },
  plugins: [],
}
