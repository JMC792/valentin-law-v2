import Hero from "app/about/Hero2.js";
import { Fragment } from "react";
import List from "app/portfolio/List.js";

import portfolio from "/public/locales/english/portfolio.json"
import image2 from "public/images/portfolio/portfolio1.jpg"
import data from "public/data/portfolio.json"
import image1 from "public/images/portfolio/portfolio2.jpg"
import image3 from "public/images/portfolio/portfolio3.jpg"
import image4 from "public/images/portfolio/portfolio4.jpg"
import image5 from "public/images/portfolio/portfolio5.jpg"
import image6 from "public/images/portfolio/portfolio6.1.jpg"

export const metadata = {
    title: [portfolio.metadata.title],
    description: [portfolio.metadata.description],
}

export default function Page(){
    return(
        <Fragment>
            <Hero
                heroTitle={portfolio.hero.title}
                heroSubtitle={portfolio.hero.subtitle}
                background={"bg-back-about"}
            />
            <List
                images={[image1,image2,image3,image4,image5,image6]}
                blogData={data}
            />
        </Fragment>
    )
}