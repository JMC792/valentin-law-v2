import { Fragment } from "react";
import Hero3 from "./Hero3";
import en from "dictionaries/en.json"

export default function Page({slug}){

    return(
        <Fragment>
            <Hero3
                heroTitle={en.blog.post.hero.title} 
                heroSubtitle={en.blog.post.hero.subtitle} 
            />
            <div>blog post 1</div>
        </Fragment>
    )
}