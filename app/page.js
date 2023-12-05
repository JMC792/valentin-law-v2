import {Fragment} from "react";
//Components
import Hero from "app/(homepage)/Hero";
import About from "app/(homepage)/SBS-Left";
import Mission from "app/(homepage)/SBS-Right";
import Testimonials from "app/(homepage)/Testimonials";
import Services from "app/(homepage)/Services";
import Pricing from "./(homepage)/Pricing";
import Newsletter from "app/(homepage)/Newsletter";
import List from "./portfolio/List";
import Stat from "app/(homepage)/Stat";

import data from "public/data/portfolio.json"
//Locales
import language from "/public/locales/english/homepage.json";
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
              heading={language.index.about.heading} 
              title={language.index.about.title} 
              paragraph={language.index.about.paragraph} 
              button={language.index.about.button.title}
              buttonLink={language.index.about.button.link}
              image={SBS_Right}
            />
            <Services
              heading={language.index.services.heading}
              title={language.index.services.title}
              paragraph={language.index.services.paragraph}
              service={[
                //Fundamentals 
                [
                    language.index.services.one.image,
                    language.index.services.one.title,
                    language.index.services.one.paragraph,
                ],
                //Advanced 
                [
                    language.index.services.two.image,
                    language.index.services.two.title,
                    language.index.services.two.paragraph
                ],
                //Private 
                [
                    language.index.services.three.image,
                    language.index.services.three.title,
                    language.index.services.three.paragraph
                ],
                //Muay Thai 
                [
                    language.index.services.four.image,
                    language.index.services.four.title,
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
            {/* <Stat
                stat = {[
                    //Monday
                    [
                        language.index.stat.days.monday,
                        [language.index.stat.class.gi,language.index.stat.times.time1],
                        [language.index.stat.class.nogi,language.index.stat.times.time3],
                        [language.index.stat.class.fundamentals,language.index.stat.times.time4],
                    ],
                    //Tuesday
                    [
                        language.index.stat.days.tuesday,
                        [language.index.stat.class.kidsgi,language.index.stat.times.time2],
                        [language.index.stat.class.fundamentals,language.index.stat.times.time3],
                        [language.index.stat.class.advanced,language.index.stat.times.time4],
                    ],
                    //Wednesday
                    [
                        language.index.stat.days.wednesday,
                        [language.index.stat.class.gi,language.index.stat.times.time1],
                        [language.index.stat.class.kidsgi,language.index.stat.times.time2],
                        [language.index.stat.class.muaythai,language.index.stat.times.time7],
                        [language.index.stat.class.nogi,language.index.stat.times.time5],
                    ],
                    //Thursday
                    [language.index.stat.days.thursday],
                    //Friday
                    [
                        language.index.stat.days.friday,
                        [language.index.stat.class.openmat,language.index.stat.times.time7]
                    ],
                    //Saturday
                    [
                        language.index.stat.days.saturday,
                        [language.index.stat.class.openmat,language.index.stat.times.time6]
                    ],
                    //Sunday
                    [
                        language.index.stat.days.sunday,
                        language.index.stat.class.closed
                    ],
                ]}
            /> */}
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
            {/* <Newsletter 
              heading={language.index.newsletter.heading} 
              title={language.index.newsletter.title} 
              sentence={language.index.newsletter.sentence}
              button={language.index.newsletter.button.title}
              buttonLink={language.index.newsletter.button.link}
              background = {"bg-back-7"}
            /> */}
        </Fragment>
  );
}
