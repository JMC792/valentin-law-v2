import {Fragment} from "react";
//Components
import Hero from "app/(homepage)/Hero";
import About from "app/(homepage)/SBS-Left";
import Stat from "app/(homepage)/Stat";
import Contact from "app/(homepage)/Contact";
import Mission from "app/(homepage)/SBS-Right";
import Testimonials from "app/(homepage)/Testimonials";
import Blog from "app/(homepage)/Blog";
import Newsletter from "app/(homepage)/Newsletter";
//Locales
import language from "dictionaries/en.json";
//images
import SBS_Right from "public/images/SBS_Right.webp";
import SBS_Left from "public/images/SBS_Left.webp";
import qrCode from "public/images/photo1.webp";
import blogPic3 from "public/images/arianeMacias.jpg";
import statBG from "public/images/statsBG1.webp";

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
            <Mission 
              heading={language.index.mission.heading} 
              title={language.index.mission.title} 
              paragraph={language.index.mission.paragraph} 
              button={language.index.mission.button.title}
              buttonLink={language.index.mission.button.link}
              image={SBS_Left}
            />
            <Stat 
              stat1number={language.index.stat.stat1.number} 
              stat1title={language.index.stat.stat1.title}
              stat2number={language.index.stat.stat2.number} 
              stat2title={language.index.stat.stat2.title}
              stat3number={language.index.stat.stat3.number} 
              stat3title={language.index.stat.stat3.title}
              stat4number={language.index.stat.stat4.number} 
              stat4title={language.index.stat.stat4.title}
              image={statBG}
            />
            <Testimonials language = {language}/>
            <Contact 
            heading={language.index.contact.heading} 
            title={language.index.contact.title} 
            paragraph={language.index.contact.paragraph}
            button={language.index.contact.button.title}
            buttonLink={language.index.contact.button.link}
            image={qrCode}
            />
            <Blog 
              heading={language.index.blog.heading} 
              title={language.index.blog.title} 
              button={language.index.blog.button.title}
              buttonLink={language.index.blog.button.link}
              image={blogPic3}
            />
            <Newsletter 
              heading={language.index.newsletter.heading} 
              title={language.index.newsletter.title} 
              sentence={language.index.newsletter.sentence}
              button={language.index.newsletter.button.title}
              buttonLink={language.index.newsletter.button.link}
              background = {"bg-back-8"}
            />
        </Fragment>
  );
}
