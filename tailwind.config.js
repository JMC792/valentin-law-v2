/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      backgroundImage: {
        'back-1': "url('..//public/images/bible.jpg')",
        'back-2': "url('..//public/images/raised-hands.jpg')",
      }
    },
  },
  plugins: [],
}
