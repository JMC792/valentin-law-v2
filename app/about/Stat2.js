import Image from "next/image";
import {Fragment} from "react";
import phone2 from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"

export default function Stat2({language,links}){

    return(
        <Fragment>
            {/* stat */}
            <div className="bg-neutral-900 text-neutral-200">
                <div className="container py-32">
                    <div className="flex justify-center">
                        <div className='text-center grid gap-y-8 lg:grid-cols-3 lg:gap-x-[5rem]'>

                            <div className="grid grid-cols-2 ">
                                <div className="flex items-center justify-center">
                                    <Image src={phone2} alt="Phone Icon"/>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <div className="font-bold">Phone</div>
                                    <div className='text-md'>{links.phone}</div>
                                    <div className='text-md'>{links.phone}</div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 ">
                                <div className="flex items-center justify-center">
                                    <Image src={customer} alt="Phone Icon"/>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <div className="font-bold">Address</div>
                                        <div className='text-md'>{links.address}</div>
                                            <div className='text-md'>{links.postalCode}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 ">
                                <div className="flex items-center justify-center">
                                    <Image src={tick} alt="Phone Icon"/>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <div className="font-bold">Open Hour</div>
                                    <div className='text-md'>{links.openHourDate}</div>
                                    <div className='text-md'>{links.openHourTime}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}
