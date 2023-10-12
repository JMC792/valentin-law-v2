import { Fragment } from "react";
//Components
import Contact3 from "app/contact/Form1.js";
import Hero2 from "app/about/Hero2.js";
import Stat from "app/about/Stat2.js";
//Locales
import language from "dictionaries/en.json";
//SVG
import phone from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"
import contact1 from "public/icons/contact/contact1.svg";

export const metadata = {
  title: 'Contact Us',
  description: '...',
}


export default async function Page() {

  return (
    <Fragment>
      <Hero2 
        heroTitle={language.contact.hero.title} 
        heroSubtitle={language.contact.hero.subtitle}
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
                    language.about.stat.one.title,
                    language.about.stat.one.phone1,
                    language.about.stat.one.phone2,
                    phone,
                    language.about.stat.one.alt
                ],
                // Address
                [
                    language.about.stat.two.title,
                    language.about.stat.two.address1,
                    language.about.stat.two.address2,
                    customer,
                    language.about.stat.two.alt
                ],
                //Open Hours
                [
                    language.about.stat.three.title,
                    language.about.stat.three.date,
                    language.about.stat.three.time,
                    tick,
                    language.about.stat.three.alt
                ],
            ]}
        />
    </Fragment>
  );
}
