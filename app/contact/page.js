import { Fragment } from "react";
import Contact3 from "app/contact/Contact3.js";
import language from "public/locales/english/contact.js"
import about2 from "public/images/about2.png"
import Hero2 from "app/about/Hero2";
import { facebook } from "public/data/links"
import Stat3 from "app/about/Stat2.js";
import links from "public/data/links.js"
import Newsletter from "app/(homepage)/Newsletter";

export const metadata = {
  
};

export default function Page() {
  return (
    <Fragment>
      <Hero2 language={language} heroButton={facebook}/>
      <Contact3 language={language} image={about2}/>
      <Stat3 language={language} links={links}/>
      <Newsletter language={language} heroButton={facebook}/>
    </Fragment>
  );
}
