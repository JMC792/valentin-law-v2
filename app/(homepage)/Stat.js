import {Fragment} from "react";

function stat({
    language
}){

    return(
        <Fragment>
            {/* stat */}
            <div className="bg-purple-900 text-neutral-200">
                <div className="container py-32">
                    <div className="flex justify-center">
                        <div className='text-center grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-[8rem]'>

                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.stat1}</div>
                            </div>
                            
                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.stat2}</div>
                            </div>

                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.stat3}</div>
                            </div>
                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.stat4}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default stat
