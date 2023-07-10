import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2";
import Donate from "app/donate/Donate";
import Newsletter from "app/(homepage)/Newsletter";
//Locales
import language from "public/locales/english/contact"
import { facebook } from "public/data/links"
import en from "dictionaries/en.json"
//images

export const metadata = {
  description: ""
};

export default function Page() {
  return (
        <Fragment>
            <Hero2 
              heroTitle={en.donate.hero.title} 
              heroSubtitle={en.donate.hero.subtitle}
            />
            <Donate 
              language={language} 
              heroButton={facebook}
            />
            <Newsletter 
              heading={en.index.newsletter.heading} 
              title={en.index.newsletter.title} 
              sentence={en.index.newsletter.sentence}
              button={en.index.newsletter.button.title}
              buttonLink={en.index.newsletter.button.link}
            />
        </Fragment>
  );
}
