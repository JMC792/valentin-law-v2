import Hero2 from "app/about/Hero2.js";
import { Fragment } from "react";
import language from "dictionaries/en.json"
import List from "./List";
import about4 from "public/images/arianeMacias.jpg"
import blogData from "public/data/articles.json"

export const metadata = {
    title: 'Blog',
    description: '...', 
}

export default function Page(){
    
    return(
        <Fragment>
            <Hero2
                heroTitle={language.blog.hero.title}
                heroSubtitle={language.blog.hero.subtitle}
                background={"bg-back-5"}
            />
            <List
                image={about4}
                blogData={blogData}
            />
        </Fragment>
    )
}