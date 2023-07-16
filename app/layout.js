// These styles apply to every route in the application
import Footer from 'app/(Footer)/Footer';
import Navbar from 'app/(Navbar)/Navbar';
import '@styles/globals.css'
import { Inter } from "next/font/google"

export const metadata = {
  title: {
    template: "%s | Womens AdvaNCe",
    default: "Women AdvaNCe",
  },
  description: {default: "Women AdvaNCe is a community of storytellers. We follow the needs of underserved populations and uplift the discussions that matter to the women in our state. Women in our state, especially disabled women, LGBTQ+ women, and BIPOC women, are too often silenced or discouraged from raising concerns about justice and equity."},
  appliationName: "Womens Advance",
  keywords: ["Women","Empowerment","Advance","NC"],
  creator: 'Jesus Chavez',
  publisher: 'Bold & Bright Media',
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
