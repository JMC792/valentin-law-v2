import {Fragment} from "react";
import Image from "next/image";
import image1 from "public/icons/homeOffice.svg"
import santaCena from "public/images/santa-cena.jpg"
import {useRouter} from "next/router";
import indexEnglish from "../../public/locales/english";
import indexSpanish from "../../public/locales/spanish";
import eventsData from "lib/eventsCardData.js"
import Link from "next/link";

export default function Events(){

    const router = useRouter();
    const {locale} = router;
    const t =locale === 'en-US'
        ? indexEnglish
        : indexSpanish


    return(
        <Fragment>
            <div className={"bg-neutral-100"} id={"events"}>
                <div className="container py-20">

                    {/* Event title */}
                    <div className="grid gap-y-4 text-center">
                        <h1 className="text-xl text-yellow-600 font-bold">{t.eventsSubtitle}</h1>
                        <h3 className="text-5xl font-bold">{t.eventsTitle}</h3>
                    </div>

                    <div className="grid lg:grid-cols-2">

                        <div className="py-20 lg:py-40">
                        <Image src={image1} alt="people cooking"/>
                        </div>

                        {/* Event Card(s) */}
                        <div className="pt-12 lg:pl-32">
                            <div className="grid gap-y-10 ">

                                {/* Event Card Data */}
                                {eventsData.map( (item,index) => {
                                    return(
                                    // Event Card Wrapper
                                    <div key={index} className="grid lg:grid-cols-2">

                                        

                                        {/* Event Card Information */}
                                        <div className="grid gap-y-2 lg:pt-40">

                                            {/*Event Card Title*/}
                                            <h1 className="text-4xl text-yellow-900 font-bold">{item.eventCardTitle}</h1>

                                            {/* Event Location and Date Wrapper*/}
                                            <div className="grid grid-cols-2">

                                                {/*Event Card Location*/}
                                                <Link href={item.eventCardLocationLink}>
                                                    <div className="flex cursor-pointer">
                                                        <span className="material-symbols-outlined">home</span>
                                                        <h1>{item.eventCardLocationName}</h1>
                                                    </div>
                                                </Link>


                                                {/*Event Card Date*/}
                                                <div className="flex">
                                                    <span className="material-symbols-outlined">event</span>
                                                    <div>{item.eventCardDate}</div>
                                                </div>

                                            </div>

                                            

                                            {/*Event Card Paragraph*/}
                                            <div className="flex">
                                                <div className="px-1">-</div>
                                                <div>{item.eventCardParagraphEnglish}</div>
                                            </div>
                                            

                                            {/*Event Card Paragraph*/}
                                            <div className="flex">
                                                <div className="px-1">-</div>
                                                <div>{item.eventCardParagraphSpanish}</div>
                                            </div>
                                        </div>
                                    </div>
                                    )})}

                            </div>

                        </div>
                    </div>

                    

                </div>
            </div>
        </Fragment>
    )
}
