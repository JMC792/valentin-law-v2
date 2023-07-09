import React, {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";

export default function sbsRight({
    heading,
    title,
    paragraph,
    button,
    buttonLink,
    image
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
                        <div className="lg:order-2"><Image src={image} alt="Watching laptop" className="rounded-xl"/></div>
                        
                        {/* Text */}
                        <div className="py-8 lg:p-12">
                            {/* Layout */}
                            <div className="grid gap-y-4">
                            
                            {/* Heading */}
                            <div className="text-lg text-purple-700 font-medium">
                                {heading}
                            </div>

                            {/* Title */}
                            <div className="text-[2.5rem] font-bold leading-tight">
                                {title}
                            </div>

                            {/* Text */}
                            <div className="text-md">
                                {paragraph}
                            </div>

                            {/* Button */}
                            <div className="text-white">
                                <Link href= "/contact">
                                    <button type="button" className="border rounded-lg bg-sky-400 p-4">{button}</button>
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
