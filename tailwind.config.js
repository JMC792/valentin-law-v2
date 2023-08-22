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
        'back-1': "url('..//public/images/about/aboutHero1.webp')",
        'back-2': "url('..//public/images/hero3.webp')",
        'back-4': "url('..//public/images/blog/hero.webp')",
        'back-5': "url('..//public/images/contact/contactHero.webp')",
        'back-6': "url('..//public/images/services/servicesHero.webp')",
        'back-7': "url('..//public/images/newsletterBG.webp')",
      }
    },
  },
  plugins: [],
}
