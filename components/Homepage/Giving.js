import React, {Fragment} from "react";
import Image from 'next/image'
import qrCode from "public/images/qr-code.png"

function Giving(){

    return(
        <Fragment>
            {/* Giving */}
            <section className='bg-white' id="donation">
                <div className='container py-20'>
                    <div className='grid md:grid-cols-2 gap-y-32'>
                        <div className="text-center grid gap-y-8 md:text-right md:px-28 md:py-44">
                            <div className="text-2xl text-yellow-600 font-bold">Donation</div>
                            <div className="text-5xl font-bold">Help us Make Change</div>
                            <div className="text-xl">
                                Dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </div>
                            <a href="https://tithe.ly/give?c=5922800">
                                <button type="button" className="border rounded-lg bg-amber-900 p-4 text-white">Donate Online</button>
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
