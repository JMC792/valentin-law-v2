import { Fragment } from "react";
//Components
import Contact3 from "app/contact/Form1.js";
import Hero2 from "app/about/Hero2.js";
import Stat from "app/about/Stat2.js";
//Locales
import language from "dictionaries/en.json";
import about from "public/locales/english/about.json";
import contact from "public/locales/english/contact.json";
//SVG
import phone from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"
import contact1 from "public/icons/homepage/svg1.svg";

export const metadata = {
  title: 'Contact Us',
  description: '...',
}


export default async function Page() {

  return (
    <Fragment>
      <Hero2 
        heroTitle={contact.hero.title} 
        heroSubtitle={contact.hero.subtitle}
        background={"bg-back-about"}
      />
      <Contact3 
        language={language} 
        image={contact1}
      />
        <Stat
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
