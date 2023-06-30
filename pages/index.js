import Navbar from "@components/Layout/Navbar";
import {Fragment} from "react";
import Hero from "@components/Hero/Hero";
import About from "@components/Homepage/About";
import Stat from "@components/Homepage/Stat";
import Contact from "@components/Homepage/Contact";
import Mission from "@components/Homepage/Mission";
import Team from "@components/Homepage/Team";
import Events from "@components/Homepage/Events";
import {useRouter} from "next/router";
import indexEnglish from "public/locales/english/index.js"
import indexSpanish from "public/locales/spanish/index.js"
import { facebook,tithely } from "public/data/links"
import aboutSvg from "public/images/SBS_Right.png"
import SBS_Left from "public/images/SBS_Left.png"
import homeOffice from "public/icons/homeOffice.svg"
import qrCode from "public/images/photo1.jpg"
import jesusChavez from "public/images/jesusChavez.jpg"
import image2 from "public/images/mauricio.jpeg"
import arianeMacias from "public/images/arianeMacias.jpg"
import Testimonials from "@components/Homepage/Testimonials";
import Blog from "@components/Homepage/Blog";

export default function Home() {

  const router = useRouter();
    const {locale} = router;
    const language = locale === 'en-US'
        ? indexEnglish
        : indexSpanish

  return (
    <Fragment>
        <Navbar/>
        <Hero language={language} heroButton={facebook}/>
        <About language={language} aboutButton={facebook} svg={aboutSvg}/>
        <Mission language={language} sermonButton={facebook} svg={SBS_Left}/>
        <Stat language={language}/>
        <Testimonials/>
        {/* <Events language={language} svg={homeOffice}/> */}
        <Contact language={language} donationButton={tithely} svg={qrCode}/>
        <Blog language={language} svg1={jesusChavez} svg2={image2} svg3={arianeMacias}/>
        <Team language={language} svg1={jesusChavez} svg2={image2} svg3={arianeMacias}/>
    </Fragment>
  )
}
