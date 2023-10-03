import Hero from "app/about/Hero2.js";
import { Fragment } from "react";
import List from "app/portfolio/List.js";
import language from "dictionaries/en.json"
import image2 from "public/images/portfolio/womenAdvance.png"
import data from "public/data/portfolio.json"
import image1 from "public/images/portfolio/valentin.png"
import image3 from "public/images/portfolio/encuentro-church.png"

export default function Page(){
    return(
        <Fragment>
            <Hero
                heroTitle={language.portfolio.hero.title}
                heroSubtitle={language.portfolio.hero.subtitle}
                background={"bg-back-about"}
            />
            <List
                images={[image1,image2,image3,image1]}
                blogData={data}
            />
        </Fragment>
    )
}