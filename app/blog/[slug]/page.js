import { Fragment } from "react";
import Hero3 from "./Hero3";
import en from "dictionaries/en.json"
import Article from "./Article";
import blogData from "public/data/articles.json"
import about4 from "public/images/arianeMacias.jpg"

export default function Page({slug}){

    return(
        <Fragment>
            <Hero3
                heroTitle={en.blog.post.hero.title} 
                heroSubtitle={en.blog.post.hero.subtitle} 
            />
            <Article 
                slug={slug} 
                blogData={blogData} 
                image={about4}
            />
        </Fragment>
    )
}