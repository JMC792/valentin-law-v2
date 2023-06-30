import '@styles/globals.css'
import Layout from "@components/Layout/Layout";
import { Inter } from "next/font/google"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
})

function Application({ Component, pageProps }) {
  return(

      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>

      )

}

export default Application
