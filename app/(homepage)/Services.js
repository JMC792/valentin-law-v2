import {Fragment} from "react";
import Image from "next/image";

export default function Services(props){   
    
    console.log(props.service)
    return(
        <Fragment>
            <div id="Services">
                <div className="container py-20">

                    {/* Services Heading Wrapper */}
                    <div className="grid gap-y-10 pb-8 text-center">
                        {/* Header */}
                        <div className="text-xl font-medium text-purple-900 capitalize">
                            {props.heading}
                        </div>
                        {/* Title */}
                        <div className="text-5xl text-teal-800 capitalize lg:px-44 xl:px-64">
                            {props.title}
                        </div>
                        {/* Subtitle */}
                        <div className="text-md lg:px-44 xl:px-64">
                            {props.paragraph}
                        </div>
                    </div>

                    {/* Services Cards List */}
                    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center">
                        
                        {props.service.map((service, index) => (
                            <div key={index} className="flex flex-col p-6 items-center">
                            
                                {/* Service Image */}
                                <Image 
                                    src={service[0]} 
                                    alt={service[1]} 
                                    height={200} 
                                    width={200}
                                />
                                
                                {/* Services Text Wrapper */}
                                <div className="flex flex-col gap-y-2 text-center">
                                    
                                    {/*Services Card Title*/}
                                    <div className="text-xl text-yellow-900 font-bold">
                                        {service[1]}
                                    </div>
                                    
                                    {/*Services Card Paragraph*/}
                                    <div>
                                        {service[2]}
                                    </div>

                                    <div className="pt-10">
                                        {service[3]}
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
