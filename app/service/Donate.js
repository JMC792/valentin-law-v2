import {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Donate(props){
    return(
        <Fragment>
            {/* Background*/}
            <section className='' id="sermon">
                {/* Container */}
                <div className='container py-20'>
                    {/* Layout */}
                    <div className="grid lg:grid-cols-2">
                        
                        {/* Image */}
                        <div className=""><Image src={props.svg} alt="Watching laptop" className="rounded-xl"/></div>
                        
                        {/* Text */}
                        <div className="py-8 lg:p-12">
                            {/* Layout */}
                            <div className="grid gap-y-4">
                            
                            {/* Heading */}
                            <div className="text-lg text-purple-700 font-medium uppercase">
                                {props.language.service.section1.heading}
                            </div>

                            {/* Title */}
                            <div className="text-[2.5rem] font-bold leading-tight capitalize">
                                {props.language.service.section1.title}
                            </div>

                            {/* Text */}
                            <div className="text-md">
                                {props.language.service.section1.paragraph}
                            </div>

                            {/* Button */}
                            <div className="text-white pt-4">
                                <a href= {props.language.service.section1.button.link}>
                                    <button type="button" className="border rounded-md bg-blue-400 p-4 w-60">{props.language.service.section1.button.title}</button>
                                </a>
                            </div>
                            
                            </div>
                        </div>

                        

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
