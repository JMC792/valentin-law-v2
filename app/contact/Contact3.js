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
                        <div className="lg:order-2">
                            <Image src={image}  alt="Qr Code" className="rounded-xl"/>
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

                                {/* Form */}
                                    <form className="p-8 bg-neutral-100 rounded-xl" data-netlify="true" name="contact" method="post">
                                        <div className="grid gap-y-4">
                                            
                                            <div className="grid gap-y-2 ">
                                                <label htmlFor="name" className="block text-neutral-900 font-bold">Name</label>
                                                <input type="text" id="name" name="name" placeholder="Name" className=" text-neutral-900 rounded-lg p-2" required/>
                                            </div>
                                        
                                            <div className="grid gap-y-2">
                                                <label htmlFor="email" className="block text-neutral-900 font-bold">Email:</label>
                                                <input type="email" id="email" name="email" placeholder="Email"  className=" text-neutral-900 rounded-lg p-2" required/>
                                            </div>
                                            
                                            <div className="grid gap-y-2">
                                                <label htmlFor="phone" className="block text-neutral-900 font-bold">Phone:</label>
                                                <input type="tel" id="phone" name="phone" placeholder="Phone" className=" text-neutral-900 rounded-lg p-2" required/>
                                            </div>
                                            
                                            <div className="grid gap-y-2">
                                                <label htmlFor="message" className="block text-neutral-900 font-bold">Message:</label>
                                                <textarea id="message" name="message" rows="4" placeholder="Message" className=" text-neutral-900 rounded-lg p-2" required></textarea>
                                            </div>

                                            <p>
                                                <button type="submit" className="border rounded-lg bg-blue-700 py-4 px-12 text-white">{language.contact.contact.button.title}</button>
                                            </p>

                                        </div>
                                        
                                    </form>

                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
