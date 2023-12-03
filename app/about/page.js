import { Fragment } from "react";
//locales
import about from "public/locales/english/about.json";
// Components
import Hero2 from "./Hero2.js";
import About2 from "app/(homepage)/SBS-Right.js";
import Stat2 from "app/about/Stat2.js";
import About1 from "app/(homepage)/SBS-Left.js";
//Images
import about1 from "public/images/about/about1.jpg"
import about2 from "public/images/homepage/about1.2.png";

//SVG
import svg1 from "public/icons/about/about1.svg"
import phone from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"

export const metadata = {
  title:"About Us"
}

export default function Page() {

  return (
    <Fragment>
      <Hero2 
        heroTitle={about.hero.title} 
        heroSubtitle={about.hero.subtitle}  
        background={"bg-back-about"}
      />
      <About2 
        heading={about.about2.heading} 
        title={about.about2.title} 
        paragraph={about.about2.paragraph} 
        button={about.about2.button.title}
        buttonLink={about.about2.button.link}
        image={about1}
      />
      <About1 
        heading={about.about1.heading} 
        title={about.about1.title} 
        paragraph={about.about1.paragraph} 
        button={about.about1.button.title}
        buttonLink={about.about1.button.link}
        image={about2}
            />
      <Stat2
        service = {[
            // Phone Number
            [
                about.stat.one.title,
                about.stat.one.phone1,
                about.stat.one.phone2,
                phone,
                about.stat.one.alt
            ],
            // Address
            [
                about.stat.two.title,
                about.stat.two.address1,
                about.stat.two.address2,
                customer,
                about.stat.two.alt
            ],
            //Open Hours
            [
                about.stat.three.title,
                about.stat.three.date,
                about.stat.three.time,
                tick,
                about.stat.three.alt
            ],
        ]}
      />
    </Fragment>
  );
}
