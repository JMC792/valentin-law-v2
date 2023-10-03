import {Fragment} from "react";
//Components
import Hero from "app/(homepage)/Hero";
import About from "app/(homepage)/SBS-Left";
import Mission from "app/(homepage)/SBS-Right";
import Testimonials from "app/(homepage)/Testimonials";
import Services from "app/(homepage)/Services";
import Pricing from "./(homepage)/Pricing";
import Newsletter from "app/(homepage)/Newsletter";
//Locales
import language from "dictionaries/en.json";
//icons
import SBS_Right from "public/icons/Homepage/bjj1.svg";
import SBS_Left from "public/icons/Homepage/bjj2.svg";
//images
import image1 from "public/images/homepage/testimonial_1.svg";
import image2 from "/public/icons/Homepage/littleCircle.svg"
import image3 from "/public/images/homepage/jesus.svg"
import Stat from "app/(homepage)/Stat";

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
                [language.index.services.one.image,language.index.services.one.title,language.index.services.one.paragraph],
                [language.index.services.two.image,language.index.services.two.title,language.index.services.two.paragraph],
                [language.index.services.three.image,language.index.services.three.title,language.index.services.three.paragraph],
                [language.index.services.four.image,language.index.services.four.title,language.index.services.three.paragraph]
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
              stat1number={language.index.stat.stat1.number}
              stat1title={language.index.stat.stat1.title}
              stat2number={language.index.stat.stat2.number}
              stat2title={language.index.stat.stat2.title}
              stat3number={language.index.stat.stat3.number}
              stat3title={language.index.stat.stat3.title}
              stat4number={language.index.stat.stat4.number}
              stat4title={language.index.stat.stat4.title}
            /> */}
            <Testimonials 
              language = {language}
              heading={language.index.testimonial.heading}
              title={language.index.testimonial.title}
              person = {language.index.testimonial.person}
              images = {[image1,image2,image3]}
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
