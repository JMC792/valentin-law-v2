import React, {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import audience2 from "public/images/audience-2.jpg"
import indexEnglish from "public/locales/english/index.js"
import indexSpanish from "public/locales/spanish/index.js"
import {useRouter} from "next/router";
import sermonCardData from "lib/sermonsCardData.js"

function Sermons(){

    const router = useRouter();
    const {locale} = router;
    const t =locale === 'en-US'
        ? indexEnglish
        : indexSpanish

    return(
        <Fragment>
            <div className="py-20 bg-sky-100" id="services">
                <div className="container grid gap-y-12">
                    <h1 className="text-center text-2xl text-yellow-600 font-bold">{t.sermonHeading}</h1>
                    <h2 className="text-center text-5xl font-bold">{t.sermonTitle}</h2>
                    <div className="grid gap-y-24 lg:flex justify-evenly">

                        {sermonCardData.map((item,index) => {
                            return (

                                // Sermon Card Wrapper
                                <div key={index} className="grid gap-y-4 md:p-4">

                                    {/* Sermon Card Image */}
                                    <Link href={"https://youtube.com"}>
                                        <Image src={audience2} height={430} className={"cursor-pointer"}/>
                                    </Link>

                                    {/* Sermon Card Title */}
                                    <h2 className="text-3xl transition hover:text-yellow-600">
                                        <Link href={"https://youtube.com"}>
                                            {item.sermonCardTitle}
                                        </Link>

                                    </h2>

                                    {/* Sermon Card Paragraph*/}
                                    <p >
                                        {item.sermonCardParagraph}
                                    </p>

                                    {/* Sermon Card Date */}
                                    <div className="flex">
                                        <span className="material-symbols-outlined">event</span>
                                        <div>{item.sermonCardDate}</div>
                                    </div>

                                </div >
                            )
                        })}


                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default Sermons
