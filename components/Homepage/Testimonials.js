import {Fragment} from "react";

export default function Testimonials(){

    return(
        <Fragment>
            <div className="container py-20 ">
                <div className="">
                    
                    {/* Title and Heading */}
                    <div className=" ">
                        <div className="text-purple-800">
                            <div className="text-2xl text-center font-medium">Testimonials</div>
                        </div>
                    
                        <div className="pt-2">
                            <div className="text-5xl font-bold text-center">Happy Customer Feedback <br/> About Our Service</div>
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
                                        <div>picture</div>
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
                                        <div>picture</div>
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
                                        <div>picture</div>
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
