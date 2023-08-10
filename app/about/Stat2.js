import Image from "next/image";
import {Fragment} from "react";
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"

export default function Stat2({one, two, three}){
    return(
        <Fragment>
            <div className="bg-neutral-900 text-neutral-200">
                <div className="container py-32">
                    <div className="flex justify-center">
                        <div className='text-center grid gap-y-8 lg:grid-cols-3 lg:gap-x-[5rem]'>

                            {/* Statistic 1 */}
                            <div className="grid grid-cols-2 ">
                                <div className="flex items-center justify-center">
                                    <Image src={tick} alt="Phone Icon"/>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <div className="font-bold">{one[0]}</div>
                                    <div className='text-md'>{one[1]}</div>
                                    <div className='text-md'>{one[2]}</div>
                                </div>
                            </div>

                            {/* Statistic 2 */}
                            <div className="grid grid-cols-2 ">
                                <div className="flex items-center justify-center">
                                    <Image src={customer} alt="Phone Icon"/>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <div className="font-bold">{two[0]}</div>
                                        <div className='text-md'>{two[1]}</div>
                                            <div className='text-md'>{two[2]}</div>
                                </div>
                            </div>

                            {/* Statistic 3 */}
                            <div className="grid grid-cols-2 ">
                                <div className="flex items-center justify-center">
                                    <Image src={tick} alt="Phone Icon"/>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <div className="font-bold">{three[0]}</div>
                                    <div className='text-md'>{three[1]}</div>
                                    <div className='text-md'>{three[2]}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}
