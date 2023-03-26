import {Fragment} from "react";

function Quote({
    language
}){

    return(
        <Fragment>
            {/* Quote */}
            <div className='bg-neutral-100'>
                <div className='container flex justify-center py-32'>
                    <div className='text-center grid gap-y-6'>
                        <div className='md:text-2xl'>{language.quoteTitle}</div>
                        <div className="text-[2rem] italic">{language.quote}</div>
                        <div className="text-[1.5rem]">{language.quoteAuthor}</div>
                        <div>{language.quoteAuthorPosition}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Quote
