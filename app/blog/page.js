import Hero2 from "app/about/Hero2";
import { Fragment } from "react";
import language from "public/locales/english/about.js"
import { facebook } from "public/data/links"

export default function Page(){
    
    return(
        <Fragment>
            <Hero2 language={language} heroButton={facebook}/>
        </Fragment>
    )
}