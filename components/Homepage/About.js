import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";
import svg from "public/icons/ola1.svg"


function About({
    language,
    aboutButton
}){


    return (
        <Fragment>
            {/* About */}
            <div className="container py-20" id="about">
                <div className="grid lg:grid-cols-2 lg:gap-y-20">

                    {/* ----------- Image ----------- */}
                    <div className="lg:pt-28">
                        <Image src={svg} alt="2 people" className="rounded-xl"/>
                    </div>

                    {/* ----------- Text ----------- */}
                    <div className="grid gap-y-10 md:p-32">
                        <div className="text-2xl font-bold text-yellow-600">{language.aboutHeading}</div>
                        <div className="text-5xl font-bold">{language.aboutTitle}</div>
                        <div className="text-xl text-neutral-800">{language.aboutParagraph}</div>
                        <Link href= {aboutButton}>
                            <button type="button" className="border rounded-lg bg-amber-900 py-4 mx-24 md:mx- text-white">{language.aboutButton}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
