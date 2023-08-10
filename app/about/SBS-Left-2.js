import React, {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";

export default function SBSLeft3({
    language,
    svg
}){
    return(
        <Fragment>
            {/* Background*/}
            <section className='' id="sermon">
                {/* Container */}
                <div className='container py-20'>
                    {/* Layout */}
                    <div className="grid lg:grid-cols-2">
                        
                        {/* Image */}
                        <div className=""><Image src={svg} alt="Watching laptop" className="rounded-xl"/></div>
                        
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

                            {/* Contact */}
                            <div className="bg-neutral-100 rounded-xl">
                                <div className="py-8">
                                    <div className="px-12">
                                        <div>
                                            In consequat tincidunt turpis sit amet imperdiet. Praesent Classei consequat tincidunt turpis sit amet imperdiet for mind.
                                        </div>
                                        <div className="pt-6">
                                            <div className="font-bold">
                                                Nicki Faircloth
                                            </div>
                                            <div className="text-sm">
                                                CEO-Founder
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            

                            {/* Button */}
                            <div className="text-white pt-4">
                                <Link href= "/contact">
                                    <button type="button" className="border rounded-md bg-blue-400 p-4 w-60">{language.sermonButton}</button>
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
