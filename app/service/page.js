import {Fragment} from "react";
//Components
import Hero2 from "app/about/Hero2.js";
import Service1 from "app/service/SBSNoButton.js";
import Services from "app/(homepage)/Services";
//Locales
import service from "public/locales/english/services.json";
//images
import image1 from "public/icons/Homepage/svg1.svg";
import image2 from "public/icons/Homepage/svg2.svg";


export const metadata = {
  title: 'Service',
  description: '...',
}


export default function Page() {
  return (
        <Fragment>
            <Hero2 
              heroTitle={service.hero.title} 
              heroSubtitle={service.hero.subtitle}
              background={"bg-back-about"}
            />
            <Service1 
              heading={service.section1.heading} 
              title={service.section1.title} 
              paragraph={service.section1.paragraph}
              order={"order-first"} 
              svg ={image1}
            />
            <Services
              heading={service.services.heading}
              title={service.services.title}
              paragraph={service.services.paragraph}
              service={[
                //Fundamentals classes
                [service.services.one.image,service.services.one.title,service.services.one.paragraph],
                //Advanced classes
                [service.services.two.image,service.services.two.title,service.services.two.paragraph],
                //Private Lessons
                [service.services.three.image,service.services.three.title,service.services.three.paragraph],
                //Muay Thai 
                [service.services.four.image,service.services.four.title,service.services.four.paragraph]
                ]}
            />
            <Service1 
              heading={service.section2.heading} 
              title={service.section2.title} 
              paragraph={service.section2.paragraph}
              order={"lg:order-last"} 
              svg ={image2}
            />
        </Fragment>
  );
}
