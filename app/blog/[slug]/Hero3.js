import {Fragment} from "react";

export default function Hero3({heroTitle, heroSubtitle}) {

    return(
        <Fragment>

            {/* Hero Background */}
            <div className="h-1/5 bg-back-4 bg-cover" id="header">
                {/* Hero Container */}
                <div className="container flex justify-center lg:justify-start">
                    {/* Horizontal Margin and Padding */}
                    <div className="py-[8rem] md:pt-[15rem] lg:pt-[10rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="lg:px-16">
                            <div className="text-center text-neutral-100 ">
                                {/* Text Wrapper */}
                                <div className="space-y-5">
                                    
                                    {/* Hero Title */}
                                    <div className="lg:px-12">
                                        <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                            <div className="font-bold leading-tight">
                                                {heroTitle}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Hero Subtitle */}
                                    <div className="lg:px-24">
                                        <div className="text-lg">
                                            {heroSubtitle}
                                        </div>
                                    </div>
                                

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}