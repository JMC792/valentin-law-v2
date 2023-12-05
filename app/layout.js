// These styles apply to every route in the application
import Footer from 'app/(Footer)/Footer';
import Navbar from 'app/(Navbar)/Navbar';
import language from '/dictionaries/en.json';
import navbar from '/public/locales/english/navbar.json';
import footer from '/public/locales/english/footer.json';
import '@styles/globals.css'
import { Inter } from "next/font/google"
import logo from "public/icons/logo.svg"
import call from "public/icons/call2.svg"
import email from "public/icons/email.svg"

export const metadata = {
  title: {
    template: "%s | " + [language.layout.title],
    default: [language.layout.title],
  },
  description: {default: [language.layout.description]},
  appliationName: [language.layout.applicationName],
  creator: [language.layout.creator],
  publisher: [language.layout.publisher],
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
        <Navbar
          link1 = {navbar.link1} //Home
          link2 = {navbar.link2} //About
          link3 = {navbar.link3} //Portfolio
          link4 = {navbar.link4} //Contact
          link5 = {navbar.link5} //Service
          language = {navbar.locale.spanish}
          external1 = {[navbar.external.title,navbar.external.link]}
          phoneNumber = {navbar.call.number}
          logo = {logo}
        />
          {children}
        <Footer
          overview = {[
            language.layout.title, 
            language.layout.description,
            logo
          ]}
          internal={[
            navbar.link1, //Home
            navbar.link2, //About
            navbar.link3, //Portfolio
            navbar.link4, //Contact
            navbar.link5, //Service
          ]}
          outgoing={[
            [footer.socialMedia.media1.title, footer.socialMedia.media1.link], //Facebook
            [footer.socialMedia.media2.title, footer.socialMedia.media2.link], //Instagram
            [footer.socialMedia.media3.title, footer.socialMedia.media3.link], //Twitter
          ]}
          contact= {[
            [footer.legal.link1.title, footer.legal.link1.link, call, "call"],
            [footer.legal.link2.title, footer.legal.link2.link, email, "email"],
          ]}
          trademark={[
            footer.trademark.year,
            footer.trademark.company,
            footer.trademark.rights
          ]}
        />
      </body>
    </html>
  );
}
