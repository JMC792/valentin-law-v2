import { Fragment } from "react";
import language from "dictionaries/en.json";
// Components
import Hero2 from "./Hero2.js";
import About2 from "app/(homepage)/SBS-Right.js";
import Stat2 from "app/about/Stat2.js";
import About1 from "app/(homepage)/SBS-Left.js";
//Images
import about1 from "public/images/about/about1.webp"

//SVG
import svg1 from "public/icons/about/about1.svg"
import phone from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"

export const metadata = {
  title: 'About',
  description: '...',
}

export default function Page() {

  return (
    <Fragment>
      <Hero2 
        heroTitle={language.about.hero.title} 
        heroSubtitle={language.about.hero.subtitle}  
        background={"bg-back-about"}
      />
      <About2 
        heading={language.about.about2.heading} 
        title={language.about.about2.title} 
        paragraph={language.about.about2.paragraph} 
        button={language.about.about2.button.title}
        buttonLink={language.about.about2.button.link}
        image={about1}
      />
      <About1 
        heading={language.about.about1.heading} 
        title={language.about.about1.title} 
        paragraph={language.about.about1.paragraph} 
        button={language.about.about1.button.title}
        buttonLink={language.navbar.link4}
        image={svg1}
      />
      <Stat2
        one={[language.about.stat.one.title,
          language.about.stat.one.phone1,
          language.about.stat.one.phone2,
          phone
        ]}
        two={[language.about.stat.two.title,
          language.about.stat.two.address1,
          language.about.stat.two.address2,
          customer]}
        three={[language.about.stat.three.title,
          language.about.stat.three.date,
          language.about.stat.three.time,
          tick]}
      />
      {/* <About1 
        heading={language.about.about3.heading} 
        title={language.about.about3.title} 
        paragraph={language.about.about3.paragraph} 
        button={language.about.about3.button.title}
        buttonLink={language.navbar.link4}
        image={uiux}
      /> */}
      {/* <Team2 
        heading={[language.about.team.heading,
          language.about.team.title,
          language.about.team.sentence]}
        members={[
            [language.about.team.member.member1.name,
            language.about.team.member.member1.title,
            person1],
            [language.about.team.member.member2.name,
              language.about.team.member.member2.title,
              person2],
            [language.about.team.member.member3.name,
              language.about.team.member.member3.title,
              person3],
            [language.about.team.member.member4.name,
              language.about.team.member.member4.title,
              person1],
            [language.about.team.member.member5.name,
              language.about.team.member.member5.title,
              person2],
            [language.about.team.member.member6.name,
              language.about.team.member.member6.title,
              person3],
          ]}
      /> */}
    </Fragment>
  );
}
