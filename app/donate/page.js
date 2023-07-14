import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2.js";
import Donate from "app/donate/Donate.js";
import Newsletter from "app/(Homepage)/Newsletter.js";
import Email from "app/(Homepage)/SBS-Right.js";
//Locales
import language from "dictionaries/en.json";
//images
import aboutImage from "public/images/sbsAbout.webp";
import SBS_Left from "public/images/SBS_Left.webp";

export const metadata = {
  title: 'Donate',
  description: '...',
}


export default function Page() {
  return (
        <Fragment>
            <Hero2 
              heroTitle={language.donate.hero.title} 
              heroSubtitle={language.donate.hero.subtitle}
            />
            <Donate 
              language={language} 
              svg ={aboutImage}
            />
            <Email 
              heading={language.donate.email.heading} 
              title={language.donate.email.title} 
              paragraph={language.donate.email.paragraph} 
              button={language.donate.email.button.title}
              buttonLink={language.donate.email.button.link}
              image={SBS_Left}
            />
            <Newsletter 
              heading={language.index.newsletter.heading} 
              title={language.index.newsletter.title} 
              sentence={language.index.newsletter.sentence}
              button={language.index.newsletter.button.title}
              buttonLink={language.index.newsletter.button.link}
            />
        </Fragment>
  );
}
