import {Fragment} from "react";
//Components
import Hero from "app/(homepage)/Hero";
import About from "app/(homepage)/SBS-Left";
import Stat from "app/(homepage)/Stat";
import Contact from "app/(homepage)/Contact";
import Mission from "app/(homepage)/SBS-Right";
import Testimonials from "app/(homepage)/Testimonials";
import Blog from "app/(homepage)/Blog";
import Newsletter from "app/(homepage)/Newsletter";
//Locales
import language from "public/locales/english/index.js"
import { facebook } from "public/data/links"
//images
import aboutSvg from "public/images/SBS_Right.webp"
import SBS_Left from "public/images/SBS_Left.webp"
import qrCode from "public/images/photo1.webp"
import blogPic3 from "public/images/arianeMacias.jpg"

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
            <Contact language={language} svg={qrCode}/>
            <Blog language={language} svg3={blogPic3}/>
            <Newsletter language={language} heroButton={facebook}/>
        </Fragment>
  );
}
