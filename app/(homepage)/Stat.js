import {Fragment} from "react";

function stat({
    stat1number,
    stat1title,
    stat2number,
    stat2title,
    stat3number,
    stat3title,
    stat4number,
    stat4title,
}){

    return(
        <Fragment>
            {/* stat */}
            <div className="bg-purple-900 text-neutral-200">
                <div className="container py-32">
                    <div className="flex justify-center">
                        <div className='text-center grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-[8rem]'>

                            <div className="">
                                <div className="text-5xl font-medium">{stat1number}</div>
                                <div className='text-md'>{stat1title}</div>
                            </div>
                            
                            <div className="">
                                <div className="text-5xl font-medium">{stat2number}</div>
                                <div className='text-md'>{stat2title}</div>
                            </div>

                            <div className="">
                                <div className="text-5xl font-medium">{stat3number}</div>
                                <div className='text-md'>{stat3title}</div>
                            </div>
                            <div className="">
                                <div className="text-5xl font-medium">{stat4number}</div>
                                <div className='text-md'>{stat4title}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default stat
