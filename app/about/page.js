import { Fragment } from "react";
import Hero2 from "./Hero2";
import language from "public/locales/english/about.js"
import { facebook } from "public/data/links"
import SBSRight from "app/(homepage)/SBS-Right";
import aboutImage from "public/images/sbsAbout.webp"
import Stat2 from "app/about/stat2"

export const metadata = {
  
};

export default function Page() {
  return (
    <Fragment>
      <Hero2 language={language} heroButton={facebook}/>
      <SBSRight language={language} heroButton={facebook} svg ={aboutImage}/>
      <Stat2 language={language}/>
    </Fragment>
  );
}
