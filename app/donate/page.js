import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2";
import Donate from "app/donate/Donate";
import Newsletter from "app/(homepage)/Newsletter";
//Locales
import en from "dictionaries/en.json"
//images
import aboutImage from "public/images/sbsAbout.webp"


export default function Page() {
  return (
        <Fragment>
            <Hero2 
              heroTitle={en.donate.hero.title} 
              heroSubtitle={en.donate.hero.subtitle}
            />
            <Donate 
              language={en} 
              svg ={aboutImage}
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
