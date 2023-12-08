import {Fragment} from "react";
//Components
import Hero from "app/(homepage)/Hero";
import About from "app/(homepage)/SBS-Left";
import Mission from "app/(homepage)/SBS-Right";
import Testimonials from "app/(homepage)/Testimonials";
import Services from "app/(homepage)/Services";
import List from "./portfolio/List";

//Locales/Data
import language from "/public/locales/english/homepage.json";
import about from "/public/locales/english/about.json";
import services from "/public/locales/english/services.json";
import data from "public/data/portfolio.json"

//icons
import SBS_Right from "public/images/homepage/about1.2.png";
import SBS_Left from "public/images/homepage/sbs2.1.png";
//images
import image1 from "public/images/homepage/testimonial_1.svg";
import image3 from "/public/images/homepage/jesus.svg"
import image2 from "/public/images/homepage/person3.svg"

import portfolio1 from "/public/images/portfolio/portfolio1.jpg";
import portfolio2 from "/public/images/portfolio/portfolio2.jpg";
import portfolio3 from "/public/images/portfolio/portfolio3.jpg";
import portfolio4 from "/public/images/portfolio/portfolio4.jpg";
import portfolio5 from "/public/images/portfolio/portfolio5.jpg";
import portfolio6 from "/public/images/portfolio/portfolio6.1.jpg";

export default function Page() {
  return (
        <Fragment>
            <Hero 
              subtitle={language.index.hero.subtitle} 
              title={language.index.hero.title} 
              button={language.index.hero.button.title} 
              buttonLink={language.index.hero.button.link} 
            />
            {/* <Pricing/> */}
            <About 
              heading={about.about1.heading} 
              title={about.about1.title} 
              paragraph={about.about1.paragraph} 
              button={about.about1.button.title}
              buttonLink={about.about1.button.link}
              image={SBS_Right}
            />
            <Services
              heading={services.services.heading}
              title={services.services.title}
              paragraph={services.services.paragraph}
              service={[
                //Fundamentals 
                [
                    services.services.one.image,
                    services.services.one.title,
                    services.services.one.paragraph,
                ],
                //Advanced 
                [
                    services.services.two.image,
                    services.services.two.title,
                    services.services.two.paragraph
                ],
                //Private 
                [
                    services.services.three.image,
                    services.services.three.title,
                    services.services.three.paragraph
                ],
                //Muay Thai 
                [
                    services.services.four.image,
                    services.services.four.title,
                    language.index.services.four.paragraph
                ]
                ]}
              button={language.index.services.button.title}
            />
            <Mission 
              heading={language.index.mission.heading} 
              title={language.index.mission.title} 
              paragraph={language.index.mission.paragraph} 
              button={language.index.mission.button.title}
              buttonLink={language.index.mission.button.link}
              image={SBS_Left}
            />
            <Testimonials 
              language = {language}
              heading={language.index.testimonial.heading}
              title={language.index.testimonial.title}
              person = {language.index.testimonial.person}
              images = {[image1,image3,image2]}
            />
            <List
              images={[portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6]}
              blogData={data}
            />
        </Fragment>
  );
}
