import React, {Fragment} from "react";
import Image from 'next/image'

function Contact({
    language,
    donationButton,
    svg
}){

    return(
        <Fragment>
            {/* Giving */}
            <section className='bg-white' id="donation">
                <div className='container py-20'>
                    <div className='grid lg:grid-cols-2 gap-y-10'>

                        {/* Image */}
                        <div className="lg:order-2">
                            <Image src={svg}  alt="Qr Code" className="rounded-xl"/>
                        </div>

                        {/* Text */}
                        <div className="lg:order-1">
                            <div className=" md:px-28 xl:py-44">
                            <div className="grid gap-y-4">
                                
                                {/* Title and Heading */}
                                <div>
                                    <div className="text-2xl text-yellow-600 font-bold">{language.donationsHeading}</div>
                                    <div className="text-[2.5rem] font-bold">{language.donationsTitle}</div>
                                </div>
                                
                                {/* Paragraph */}
                                <div className="grid gap-y-4">
                                    <div className="text-md">{language.donationParagraph}</div>
                                </div>

                                {/* Form */}
                                <div className="bg-gray-100">
                                        <form className="p-8" data-netlify="true">
                                            <div className="grid gap-y-4">
                                                <div className="grid gap-y-2">
                                                    <label htmlFor="name" className="block text-black font-bold">Name</label>
                                                    <input type="text" id="name" name="name" required/>
                                                </div>
                                            
                                                <div className="grid gap-y-2">
                                                    <label htmlFor="email" className="block text-black font-bold">Email:</label>
                                                    <input type="email" id="email" name="email" required/>
                                                </div>
                                                
                                                <div className="grid gap-y-2">
                                                    <label htmlFor="phone" className="block text-black font-bold">Phone:</label>
                                                    <input type="tel" id="phone" name="phone" required/>
                                                </div>
                                                
                                                <div className="grid gap-y-2">
                                                    <label htmlFor="message" className="block text-black font-bold">Message:</label>
                                                    <textarea id="message" name="message" rows="4" required></textarea>
                                                </div>

                                                <div className="">
                                                    <a href= {donationButton}>
                                                        <button type="submit" className="border rounded-lg bg-amber-900 p-4 text-white">{language.donationButton}</button>
                                                    </a>
                                                </div>

                                            </div>
                                            
                                        </form>
                                </div>

                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact
