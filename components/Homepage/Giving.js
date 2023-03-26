import React, {Fragment} from "react";
import Image from 'next/image'
import qrCode from "public/images/qr-code.png"

function Giving({
    language
}){

    return(
        <Fragment>
            {/* Giving */}
            <section className='bg-white' id="donation">
                <div className='container py-20'>
                    <div className='grid lg:grid-cols-2 gap-y-32'>
                        <div className="text-center grid gap-y-8 md:text-right md:px-28 lg:py-44">
                            <div className="text-2xl text-yellow-600 font-bold">{language.donationsHeading}</div>
                            <div className="text-5xl font-bold">{language.donationsTitle}</div>
                            <div className="text-xl">
                                {language.donationParagraph}
                            </div>
                            <a href="https://tithe.ly/give?c=5922800">
                                <button type="button" className="border rounded-lg bg-amber-900 p-4 text-white">{language.donationButton}</button>
                            </a>
                        </div>

                        <div className="">
                            <Image src={qrCode}  alt="Qr Code" className="rounded-xl"/>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Giving
