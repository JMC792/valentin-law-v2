import React, {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import relaxing from "public/icons/relaxing.svg"

function Sermons({
    language,
    sermonButton
}){
    return(
        <Fragment>
            {/* Giving */}
            <section className='bg-white' id="sermon">
                <div className='container py-20'>
                    <div className='grid lg:grid-cols-2 gap-y-32'>
                        <div className="text-center grid gap-y-8 md:text-right md:px-28 lg:py-44">
                            <div className="text-2xl text-yellow-600 font-bold">
                                {language.sermonHeading}
                            </div>
                            <div className="text-5xl font-bold">
                                {language.sermonTitle}
                            </div>
                            <div className="text-xl">
                                {language.sermonParagraph}
                            </div>
                            <Link href= {sermonButton}>
                                <button type="button" className="border rounded-lg bg-amber-900 py-4 mx-24 text-white">
                                    {language.sermonButton}
                                </button>
                            </Link>
                        </div>

                        <div className="">
                            <Image 
                                src={relaxing}  
                                alt="Watching laptop" 
                                className="rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Sermons
