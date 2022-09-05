import Navbar from "@components/Navbar/Navbar";
import {Fragment} from "react";
import Hero from "@components/Hero/Hero";
import youthGroup from "public/images/youthGroup.jpg"
import About from "@components/Homepage/About";
import Quote from "@components/Homepage/Quote";
import Giving from "@components/Homepage/Giving";
import Services from "@components/Homepage/Services";
import Team from "@components/Homepage/Team";
import Testimonials from "@components/Homepage/Testimonials";
import Events from "@components/Homepage/Events";

export default function Home() {
  return (
    <Fragment>
<<<<<<< HEAD
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>

      <main>
          <Hero/>

      </main>

=======
        <Navbar/>
        <Hero/>
        <Quote/>
        <About/>
        <Services/>
        <Events/>
        <Giving/>
        <Team/>
>>>>>>> navbar
    </Fragment>
  )
}
