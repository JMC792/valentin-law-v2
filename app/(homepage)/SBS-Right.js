import React, {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";

export default function sbsRight({
    language,
    sermonButton,
    svg
}){
    return(
        <Fragment>
            {/* Background*/}
            <section className='bg-gray-50' id="sermon">
                {/* Container */}
                <div className='container py-20'>
                    {/* Layout */}
                    <div className="grid lg:grid-cols-2">
                        
                        {/* Image */}
                        <div className="lg:order-2"><Image src={svg} alt="Watching laptop" className="rounded-xl"/></div>
                        
                        {/* Text */}
                        <div className="py-8 lg:p-12">
                            {/* Layout */}
                            <div className="grid gap-y-4">
                            
                            {/* Heading */}
                            <div className="text-lg text-purple-700 font-medium">
                                {language.sermonHeading}
                            </div>

                            {/* Title */}
                            <div className="text-[2.5rem] font-bold leading-tight">
                                {language.sermonTitle}
                            </div>

                            {/* Text */}
                            <div className="text-md">
                                {language.sermonParagraph}
                            </div>

                            {/* Button */}
                            <div className="text-white">
                                <Link href= {sermonButton}>
                                    <button type="button" className="border rounded-lg bg-sky-400 p-4">{language.sermonButton}</button>
                                </Link>
                            </div>
                            
                            </div>
                        </div>

                        

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
