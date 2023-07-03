import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";


export default function sbsLeft({
    language,
    svg
}){


    return (
        <Fragment>
            {/* About */}
            <div className="container py-20" id="about">
                <div className="grid lg:grid-cols-2">

                    {/* ----------- Image ----------- */}
                    <div className="xl:pl-[10rem]">
                        <Image src={svg} alt="2 people" className="rounded-xl" decoding="async"/>
                    </div>

                    {/* Text */}
                    <div className="lg:p-10 xl:p-20 tracking-tight"> {/* Padding */}
                        
                        {/* Subheading */}
                        <div className="text-purple-700">
                            <div className="text-lg font-medium">{language.aboutHeading}</div>
                        </div>
                        
                        {/* Text and button */}
                        <div className="pt-2">
                            <div className="grid gap-y-8">
                                
                                {/* Title */}
                                <div className="text-[3rem]">
                                    <div className="font-bold leading-tight">{language.aboutTitle}</div>
                                </div>
                                
                                {/* Paragraph */}
                                <div className="text-md text-neutral-800">{language.aboutParagraph}</div>
                                {/* Button */}
                                <div className="">
                                    <Link href= "/about">
                                        <button className="border rounded-lg p-4 bg-sky-400 text-white">{language.aboutButton}</button>
                                    </Link>
                                </div>
                                    
                            </div>
                        </div>
                            
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}
