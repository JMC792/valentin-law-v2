import {Fragment} from "react";

export default function Hero2(props) {

    return(
        <Fragment>

            {/* Hero Background */}
            <div className={"h-1/5 bg-cover " + props.background} id="header">
                {/* Hero Container */}
                <div className="container flex justify-center">
                    {/* Horizontal Margin and Padding */}
                    <div className="py-[8rem] md:pt-[15rem] lg:pt-[10rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="lg:px-[10rem] 2xl:px-[12rem]">


                            <div className="text-center text-neutral-100">
                                {/* Text Wrapper */}
                                <div className="space-y-5">
                                    
                                    {/* Hero Title */}
                                    <div className="lg:px-12">
                                        <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                            <div className="font-bold leading-tight">
                                                {props.heroTitle}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Hero Subtitle */}
                                    <div className="lg:px-24">
                                        <div className="text-lg">
                                            {props.heroSubtitle}
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