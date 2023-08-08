import Hero2 from "app/about/Hero2.js";
import { Fragment } from "react";
import en from "dictionaries/en.json"
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
                heroTitle={en.blog.hero.title}
                heroSubtitle={en.blog.hero.subtitle}
                background={"bg-back-5"}
            />
            <List
                image={about4}
                blogData={blogData}
            />
        </Fragment>
    )
}