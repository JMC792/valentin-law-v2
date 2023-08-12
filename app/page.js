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
import SBS_Right from "public/icons/Homepage/web-design.svg";
import SBS_Left from "public/icons/Homepage/full-stack.svg";
//images
import image1 from "public/images/homepage/julio.svg";
import image2 from "/public/icons/Homepage/littleCircle.svg"
import image3 from "/public/images/homepage/jesus.svg"

export default function Page() {
  return (
        <Fragment>
            <Hero 
              subtitle={language.index.hero.subtitle} 
              title={language.index.hero.title} 
              button={language.index.hero.button.title} 
              buttonLink={language.index.hero.button.link} 
            />
            <About 
              heading={language.index.about.heading} 
              title={language.index.about.title} 
              paragraph={language.index.about.paragraph} 
              button={language.index.about.button.title}
              buttonLink={language.index.about.button.link}
              image={SBS_Right}
            />
            <Services/>
            <Mission 
              heading={language.index.mission.heading} 
              title={language.index.mission.title} 
              paragraph={language.index.mission.paragraph} 
              button={language.index.mission.button.title}
              buttonLink={language.index.mission.button.link}
              image={SBS_Left}
            />
            <Pricing/>
            <Testimonials 
              language = {language}
              images = {[image1,image2,image3]}
            />
            <Newsletter 
              heading={language.index.newsletter.heading} 
              title={language.index.newsletter.title} 
              sentence={language.index.newsletter.sentence}
              button={language.index.newsletter.button.title}
              buttonLink={language.index.newsletter.button.link}
              background = {"bg-back-7"}
            />
        </Fragment>
  );
}
