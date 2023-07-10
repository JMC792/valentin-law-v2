import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Article({
    blogData,
    image    
}){

    return(
        <Fragment>
            {/* About */}
            <div className="container py-20">
                <div className="grid lg:grid-cols-2">

                    {/*  Image */}
                    <div className="xl:pl-[10rem]">
                        <Image src={image} alt="2 people" className="rounded-xl" decoding="async"/>
                    </div>

                    {/* Padding */}
                    <div className="lg:p-10 xl:p-20 tracking-tight">
                        
                        {/* Subheading */}
                        <div className="text-purple-700">
                            <div className="text-lg font-medium">
                                {blogData.blog1.type}
                            </div>
                        </div>
                        
                        {/* wrapper */}
                        <div className="pt-2">
                            <div className="grid gap-y-8">
                                
                                {/* Title */}
                                <div className="text-[3rem]">
                                    <div className="font-bold leading-tight">
                                        {blogData.blog1.name}
                                    </div>
                                </div>
                                
                                {/* Paragraph */}
                                <div className="text-md text-neutral-800">
                                    {blogData.blog1.content.p1}
                                </div>
                                
                                {/* Button */}
                                <div className="">
                                    <Link href= "/about">
                                        <button className="border rounded-lg p-4 bg-sky-400 text-white">
                                            button
                                        </button>
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