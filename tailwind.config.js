/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'sm': '2rem',
        'lg': '3rem',
        '2xl': '6rem',
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      backgroundImage: {
        'back-1': "url('..//public/images/qr-code.png')",
        'back-2': "url('..//public/images/Hero-bg.webp')",
        'back-3': "url('..//public/images/youthGroup.jpg')",
        'back-4': "url('..//public/images/pink-background-2.jpg')",
      }
    },
  },
  plugins: [],
}
