// These styles apply to every route in the application
import Footer from 'app/(Footer)/Footer';
import Navbar from 'app/(Navbar)/Navbar';
import '@styles/globals.css'
import { Inter } from "next/font/google"

export const metadata = {
  title: {
    template: "%s | Queen City Web Solutions",
    default: "Queen City Web Solutions",
  },
  description: {default: "WQueen City Web Solutions is a dynamic web services provider based in Charlotte, North Carolina. Our dedicated team specializes in delivering top-tier web design and development solutions, seamlessly merging creativity and technology to craft engaging online experiences. With a strong focus on cybersecurity, we ensure that your digital journey is not only visually captivating but also fortified against potential threats."},
  appliationName: "Queen City Web Solutions",
  keywords: ["Queen","City","Web Solutions","Charlotte","North Carolina"],
  creator: 'Mauricio Chavez',
  publisher: 'Queen City Web Solutions',
};

const inter =Inter({subsets:['latin']})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
