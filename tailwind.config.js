/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'back-1': "url('..//public/images/aboutHero.png')",
        'back-2': "url('..//public/images/hero3.webp')",
        'back-3': "url('..//public/images/hero2.webp')",
        'back-4': "url('..//public/images/postHeader.png')",
        'back-5': "url('..//public/images/contactHero.webp')",
        'back-6': "url('..//public/images/donateHero.webp')",
        'back-7': "url('..//public/images/statsBG1.webp')",
        'back-8': "url('..//public/images/newsletter-BG.webp')",
      }
    },
  },
  plugins: [],
}
