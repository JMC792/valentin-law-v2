import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2";
import Donate from "app/donate/Donate";
import Newsletter from "app/(homepage)/Newsletter";
//Locales
import language from "public/locales/english/contact"
import { facebook } from "public/data/links"
//images

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
