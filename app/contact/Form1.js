import React, {Fragment} from "react";
import Image from 'next/image'

export default function Contact2({language,contactButton,image}){

    return(
        <Fragment>
            {/* Giving */}
            <section className='' id="contact">
                <div className='container py-20'>
                    <div className='grid lg:grid-cols-2 gap-y-10'>

                        {/* Image */}
                        <div className="lg:order-2 relative">
                            <Image 
                                src={image}
                                alt="Brazilian Jiu-Jitsu Dogfight" 
                                className="rounded-xl"
                            />
                        </div>

                        {/* Text */}
                        <div className="lg:order-1">
                            <div className=" lg:px-28">
                            <div className="grid gap-y-4">
                                
                                {/* Title and Heading */}
                                <div className="text-neutral-900 flex flex-col items-center lg:items-start">
                                    <div className="text-2xl">{language.contact.contact.heading}</div>
                                    <div className="text-[2.5rem] font-bold">{language.contact.contact.title}</div>
                                </div>

                                {/* Map */}
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.8320242928935!2d-80.69339298832605!3d35.18573897263761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885423b7884afa4d%3A0x31b1b313e1935503!2sCheckmat%20NC!5e0!3m2!1sen!2sus!4v1694385856537!5m2!1sen!2sus" 
                                    width="400" 
                                    height="450" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                >
                                </iframe>

                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
