/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // things I want to add
      fontFamily:{
        sans:['Roboto', 'sans-serif']
      },
      //a certain grid class for details page 70/30
      gridTemplateColumns:{
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}