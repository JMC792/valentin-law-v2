import Image from "next/image";
import {Fragment} from "react";
import littleCircle from "/public/icons/Homepage/littleCircle.svg"

export default function Testimonials({heading, title}){

    return(
        <Fragment>
            <div className="container py-20 ">
                <div className="">
                    
                    {/* Title and Heading */}
                    <div className=" ">
                        <div className="text-purple-800">
                            <div className="text-2xl text-center font-medium">{heading}</div>
                        </div>
                    
                        <div className="pt-2">
                            <div className="text-5xl font-bold text-center">{title}</div>
                        </div>
                    </div>
                    
                    
                    {/* Cards Wrapper*/}
                    <div className="pt-16">
                        <div className="grid lg:grid-cols-3 lg:divide-x">
                            
                            {/* Card 1 */}
                            <div className="p-12">
                                {/* Title */}
                                <div className="pb-8">
                                    <div className="md:flex">
                                        <Image src={littleCircle} alt="person"/>
                                        <div>
                                            <div className=" text-xl font-bold">John Mccarthy</div>
                                            <div className="font-medium">Founder of Yoko</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="text-[.9rem]">
                                Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo.
                                </div>
                            </div>

                            {/* Card 1 */}
                            <div className="p-12">
                                {/* Title */}
                                <div className="pb-8">
                                    <div className="md:flex">
                                        <Image src={littleCircle} alt="person"/>
                                        <div>
                                            <div className=" text-xl font-bold">John Mccarthy</div>
                                            <div className="font-medium">Founder of Yoko</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="text-[.9rem]">
                                Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo.
                                </div>
                            </div>

                            {/* Card 1 */}
                            <div className="p-12">
                                {/* Title */}
                                <div className="pb-8">
                                    <div className="md:flex">
                                        <Image src={littleCircle} alt="person"/>
                                            <div>
                                                <div className=" text-xl font-bold">John Mccarthy</div>
                                                    <div className="font-medium">Founder of Yoko</div>
                                            </div>
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="text-[.9rem]">
                                Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo.
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    

                    
                </div>
            </div>
        </Fragment>
    )
}
