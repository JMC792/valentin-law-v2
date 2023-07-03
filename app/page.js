import {Fragment} from "react";
//Components
import Hero from "app/(homepage)/Hero";
import About from "@components/Homepage/SBS-Left";
import Stat from "@components/Homepage/Stat";
import Contact from "@components/Homepage/Contact";
import Mission from "@components/Homepage/SBS-Right";
import Testimonials from "@components/Homepage/Testimonials";
import Blog from "@components/Homepage/Blog";
import Newsletter from "@components/Homepage/Newsletter";
//Locales
import language from "public/locales/english/index.js"
import { facebook,tithely } from "public/data/links"
//images
import aboutSvg from "public/images/SBS_Right.webp"
import SBS_Left from "public/images/SBS_Left.webp"
import qrCode from "public/images/photo1.webp"
import jesusChavez from "public/images/jesusChavez.jpg"
import image2 from "public/images/mauricio.jpeg"
import arianeMacias from "public/images/arianeMacias.jpg"

export const metadata = {
  description: ""
};

export default function Page() {
  return (
        <Fragment>
            <Hero language={language} heroButton={facebook}/>
            <About language={language} aboutButton={facebook} svg={aboutSvg}/>
            <Mission language={language} sermonButton={facebook} svg={SBS_Left}/>
            <Stat language={language}/>
            <Testimonials/>
            <Contact language={language} donationButton={tithely} svg={qrCode}/>
            <Blog language={language} svg1={jesusChavez} svg2={image2} svg3={arianeMacias}/>
            <Newsletter language={language} heroButton={facebook}/>
        </Fragment>
  );
}
