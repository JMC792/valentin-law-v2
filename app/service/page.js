import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2.js";
import Donate from "app/service/Donate.js";
import Newsletter from "app/(homepage)/Newsletter.js";
import Email from "app/(homepage)/SBS-Right.js";
import Pricing from "app/(homepage)/Pricing.js";
//Locales
import language from "dictionaries/en.json";
//images
import image1 from "public/icons/services/responsive.svg";
import image2 from "public/icons/services/firewall.svg";

export const metadata = {
  title: 'Service',
  description: '...',
}


export default function Page() {
  return (
        <Fragment>
            <Hero2 
              heroTitle={language.service.hero.title} 
              heroSubtitle={language.service.hero.subtitle}
              background={"bg-back-6"}
            />
            <Donate 
              language={language} 
              svg ={image1}
            />
            <Pricing/>
            <Email 
              heading={language.service.email.heading} 
              title={language.service.email.title} 
              paragraph={language.service.email.paragraph} 
              button={language.service.email.button.title}
              buttonLink={language.service.email.button.link}
              image={image2}
            />
            <Newsletter 
              heading={language.index.newsletter.heading} 
              title={language.index.newsletter.title} 
              sentence={language.index.newsletter.sentence}
              button={language.index.newsletter.button.title}
              buttonLink={language.index.newsletter.button.link}
              background={"bg-back-5"}
            />
        </Fragment>
  );
}
