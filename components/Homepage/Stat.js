import {Fragment} from "react";

function Quote({
    language
}){

    return(
        <Fragment>
            {/* Quote */}
            <div className="bg-purple-900 text-neutral-200">
                <div className="container py-32">
                    <div className="flex justify-center">
                        <div className='text-center grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-[8rem]'>

                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.quoteTitle}</div>
                            </div>
                            
                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.quoteTitle}</div>
                            </div>

                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.quoteAuthor}</div>
                            </div>
                            <div className="">
                                <div className="text-5xl font-medium">18K+</div>
                                <div className='text-md'>{language.quoteAuthorPosition}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Quote
