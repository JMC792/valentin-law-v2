import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2";
import Donate from "app/donate/Donate";
import Newsletter from "app/(homepage)/Newsletter";
//Locales
import language from "public/locales/english/contact"
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
            <Hero2 language={language} heroButton={facebook}/>
            <Donate language={language} heroButton={facebook}/>
            <Newsletter language={language} heroButton={facebook}/>
        </Fragment>
  );
}
