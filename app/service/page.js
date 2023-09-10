import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2.js";
import Service1 from "app/service/SBSNoButton.js";
import Newsletter from "app/(homepage)/Newsletter.js";
import Services from "app/(homepage)/Services";
//Locales
import language from "dictionaries/en.json";
//images
import image1 from "public/icons/services/services1.svg";
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
              background={"bg-back-about"}
            />
            <Service1 
              heading={language.service.section1.heading} 
              title={language.service.section1.title} 
              paragraph={language.service.section1.paragraph}
              order={"order-first"} 
              svg ={image1}
            />
            <Services
              heading={language.index.services.heading}
              title={language.index.services.title}
              paragraph={language.index.services.paragraph}
              service={[
                [language.index.services.one.image,language.index.services.one.title,language.index.services.one.paragraph],
                [language.index.services.two.image,language.index.services.two.title,language.index.services.two.paragraph],
                [language.index.services.three.image,language.index.services.three.title,language.index.services.three.paragraph],
                [language.index.services.four.image,language.index.services.four.title,language.index.services.three.paragraph]
                ]}
              button={language.index.services.button.title}
            />
            <Service1 
              heading={language.service.section2.heading} 
              title={language.service.section2.title} 
              paragraph={language.service.section2.paragraph}
              order={"lg:order-last"} 
              svg ={image1}
            />
        </Fragment>
  );
}
