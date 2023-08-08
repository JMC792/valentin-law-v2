import { Fragment } from "react";
import Contact3 from "app/contact/Contact3.js";
import contact1 from "public/icons/contact/research.svg";
import Hero2 from "app/about/Hero2.js";
import Stat from "app/about/Stat2.js";
import language from "dictionaries/en.json";
import phone from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"


export const metadata = {
  title: 'Contact Us',
  description: '...',
}

async function getData(){

  try{
    const response = await fetch('/dictionaries/en.json')

    console.log("response data")
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
    } catch (error) {
      console.error('Error fetching data', error);
      throw error
    }
  
}

export default async function Page() {

  // const data = await getData()

  return (
    <Fragment>
      <Hero2 
        heroTitle={language.contact.hero.title} 
        heroSubtitle={language.contact.hero.subtitle}
        background={"bg-back-5"}
      />
      <Contact3 language={language} image={contact1}/>
      <Stat
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
    </Fragment>
  );
}
