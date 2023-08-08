import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2.js";
import Service1 from "app/service/SBSNoButton.js";
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
            <Service1 
              heading={language.service.section1.heading} 
              title={language.service.section1.title} 
              paragraph={language.service.section1.paragraph}
              order={"order-first"} 
              svg ={image1}
            />
            <Pricing/>
            <Service1 
              heading={language.service.section2.heading} 
              title={language.service.section2.title} 
              paragraph={language.service.section2.paragraph}
              order={"lg:order-last"} 
              svg ={image1}
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
