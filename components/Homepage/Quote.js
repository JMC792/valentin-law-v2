import {Fragment} from "react";
import {useRouter} from "next/router";
import indexEnglish from "public/locales/english/index.js"
import indexSpanish from "public/locales/spanish/index.js"

function Quote(){

    const router = useRouter();
    const {locale} = router;
    const t =locale === 'en-US'
        ? indexEnglish
        : indexSpanish

    return(
        <Fragment>
            {/* Quote */}
            <div className='bg-neutral-100'>
                <div className='container flex justify-center py-32'>
                    <div className='text-center grid gap-y-6'>
                        <div className='md:text-2xl'>{t.quoteTitle}</div>
                        <div className="text-[2rem] italic">{t.quote}</div>
                        <div className="text-[1.5rem]">{t.quoteAuthor}</div>
                        <div>{t.quoteAuthorPosition}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Quote
