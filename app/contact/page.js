import { Fragment } from "react";

//Components
import Contact3 from "app/contact/Form1.js";
import Hero2 from "app/about/Hero2.js";
import Stat from "app/about/Stat2.js";

//Locales
import about from "public/locales/english/about.json";
import contact from "public/locales/english/contact.json";

//SVG
import phone from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"
import contact1 from "public/icons/contact/contact1.svg";

export const metadata = {
  title: "Contact Us",
  description: [contact.metadata.description],
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
        heading = {contact.form.heading}
        title = {contact.form.title}
        paragraph = {contact.form.paragraph}
        image={contact1}
      />
        <Stat
            service = {[
                // Phone Number
                [
                  contact.stat.one.title,
                  contact.stat.one.phone1,
                  contact.stat.one.phone2,
                  phone,
                  contact.stat.one.alt
                ],
                // Address
                [
                  contact.stat.two.title,
                  contact.stat.two.address1,
                  contact.stat.two.address2,
                  customer,
                  contact.stat.two.alt
                ],
                //Open Hours
                [
                  contact.stat.three.title,
                  contact.stat.three.date,
                  contact.stat.three.time,
                  tick,
                  contact.stat.three.alt
                ],
            ]}
        />
    </Fragment>
  );
}
