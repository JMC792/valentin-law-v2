import { Fragment } from "react";
import Link from "next/link";

export default function Newsletter(props){

    return(
        <Fragment>
            {/* Hero Background */}
            <div className={"md:h-[30rem] lg:h-[35rem] bg-cover " + props.background} id="header">
                {/* Hero Container */}
                <div className="container flex justify-center">
                    {/* Vertical Padding */}
                    <div className="py-[6rem]">
                        {/* Horizontal Padding */}
                        <div className="container text-center text-neutral-100 ">
                            {/* Text Wrapper */}
                            <div className="space-y-5">

                                {/* Hero Heading */}
                                <div>
                                    <div className="text-md">
                                        <div className="font-bold leading-tight">
                                            {props.heading}
                                        </div>
                                    </div>
                                </div>

                                {/* Hero Title */}
                                <div className="lg:px-12">
                                    <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                        <div className="font-bold leading-tight">
                                            {props.title}
                                        </div>
                                    </div>
                                </div>
                                
                                
                                {/* Hero Subtitle */}
                                <div className="lg:px-24">
                                    <div className="text-lg">
                                        {props.sentence}
                                    </div>
                                </div>
                                
                                {/* Link to Contact Page */}
                                <div className="px-24 ">
                                    <button className="text-lg p-4 bg-teal-900 ">
                                        <Link href={props.buttonLink}>
                                            <div className="text-neutral-100 hover:text-neutral-300 hover:duration-300 delay-100">
                                                {props.button}
                                            </div>
                                        </Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                            

                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
  }