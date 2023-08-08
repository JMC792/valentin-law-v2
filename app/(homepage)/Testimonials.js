import Image from "next/image";
import {Fragment} from "react";
import littleCircle from "/public/icons/Homepage/littleCircle.svg"

export default function Testimonials(props){

    return(
        <Fragment>
            <div className="container py-20 ">
                <div className="">
                    
                    {/* Title and Heading */}
                    <div className="container">
                        <div className="text-purple-800">
                            <div className="text-2xl text-center font-medium">{props.language.index.testimonial.heading}</div>
                        </div>
                    
                        <div className="pt-2">
                            <div className="text-5xl font-bold text-center">{props.language.index.testimonial.title}</div>
                        </div>
                    </div>
                    
                    
                    {/* Cards Wrapper*/}
                    <div className="pt-16">
                        <div className="grid lg:grid-cols-3 lg:divide-x">
                            
                        {Object.values(props.language.index.testimonial.person).map((person, index) => (
                            <div className="p-12" key={index}>
                                <div className="pb-8">
                                    <div className="md:flex gap-x-4">
                                        <Image src={littleCircle} alt="person" />
                                        <div>
                                            <div className="text-xl font-bold">{person.name}</div>
                                            <div className="font-medium">{person.position}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[.9rem] tracking-tight indent-4">{person.paragraph}</div>
                            </div>
                        ))}
                            
                        </div>
                        
                    </div>
                    

                    
                </div>
            </div>
        </Fragment>
    )
}
