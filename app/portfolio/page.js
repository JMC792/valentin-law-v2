import Hero from "app/about/Hero2.js";
import { Fragment } from "react";
import List from "app/blog/List";
import language from "dictionaries/en.json"
import about4 from "public/images/arianeMacias.jpg"
import blogData from "public/data/portfolio.json"

export default function Page(){
    return(
        <Fragment>
            <Hero
                heroTitle={language.portfolio.hero.title}
                heroSubtitle={language.portfolio.hero.subtitle}
                background={"bg-back-5"}
            />
            <List
                image={about4}
                blogData={blogData}
            />
        </Fragment>
    )
}