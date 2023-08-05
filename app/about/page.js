import { Fragment } from "react";
import Hero2 from "./Hero2.js";
import language from "public/locales/english/about.js"
import { facebook } from "public/data/links"
import about1 from "public/icons/about/launch.svg"
import Stat2 from "app/about/Stat2.js"
import links from "public/data/links.js"
import SBSLeft from "app/about/SBS-Left-2.js";
import SBSRight from "app/about/SBS-Right-2.js";
import about2 from "public/icons/about/ab-test.svg"
import SBSLeft3 from "app/about/SBS-Left-3.js";
import about3 from "public/icons/about/programmer.svg"
import Team2 from "app/about/Team2.js";
import about4 from "public/images/arianeMacias.jpg"
import en from "dictionaries/en.json"

export const metadata = {
  title: 'About',
  description: '...',
}

export default function Page() {
  return (
    <Fragment>
      <Hero2 
        heroTitle={en.about.hero.title} 
        heroSubtitle={en.about.hero.subtitle}  
        heroButton={facebook}
        background={"bg-back-1"}
        />
      <SBSLeft language={language} heroButton={facebook} svg ={about1}/>
      <SBSRight language={language} heroButton={facebook} image ={about2}/>
      <Stat2 language={language} links={links} />
      <SBSLeft3 language={language} heroButton={facebook} svg ={about3}/>
      <Team2 language={language} heroButton={facebook} svg1 ={about4} svg2 ={about3} svg3 ={about3}/>
    </Fragment>
  );
}
