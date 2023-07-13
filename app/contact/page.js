import { Fragment } from "react";
import Contact3 from "app/contact/Contact3.js";
import language from "public/locales/english/contact.js"
import about2 from "public/images/about2.png"
import Hero2 from "app/about/Hero2";
import { facebook } from "public/data/links"
import Stat3 from "app/about/Stat2.js";
import links from "public/data/links.js"
import Newsletter from "app/(Homepage)/Newsletter";
import en from "dictionaries/en.json"


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
        heroTitle={en.contact.hero.title} 
        heroSubtitle={en.contact.hero.subtitle}
      />
      <Contact3 language={en} image={about2}/>
      <Stat3 language={language} links={links}/>
      <Newsletter 
        heading={en.index.newsletter.heading} 
        title={en.index.newsletter.title} 
        sentence={en.index.newsletter.sentence}
        button={en.index.newsletter.button.title}
        buttonLink={en.index.newsletter.button.link}
      />
    </Fragment>
  );
}
