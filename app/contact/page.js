import { Fragment } from "react";
import Contact3 from "app/contact/Contact3.js";
import language from "public/locales/english/contact.js"
import contact1 from "public/icons/contact/research.svg";
import Hero2 from "app/about/Hero2.js";
import Stat3 from "app/about/Stat2.js";
import links from "public/data/links.js";
import en from "dictionaries/en.json";


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
        background={"bg-back-5"}
      />
      <Contact3 language={en} image={contact1}/>
      <Stat3 language={language} links={links}/>
    </Fragment>
  );
}
