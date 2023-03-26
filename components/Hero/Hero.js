import {Fragment} from "react";
import {useRouter} from "next/router";
import indexEnglish from "public/locales/english/index.js"
import indexSpanish from "public/locales/spanish/index.js"

function Hero({
    language
}) {

    const router = useRouter();
    const {locale} = router;
    const t =locale === 'en-US'
        ? indexEnglish
        : indexSpanish

    return(
        <Fragment>

            {/* Hero Background */}
            <div className="h-screen bg-back-2 bg-cover" id="header">

                {/* Hero Container */}
                <div className="container flex justify-center">

                    {/* Hero Margin and Padding */}
                    <div className="pt-[13rem] md:pt-[15rem] lg:pt-[23rem]">

                        {/* Hero Text Config */}
                        <div className="text-center text-neutral-100 space-y-10">

                            {/* Hero Title */}
                            <div className="text-7xl">
                                {language.heroTitle}
                            </div>

                            {/* Hero Subtitle */}
                            <div className="text-xl lg:text-2xl ">
                                {language.heroSubtitle}
                            </div>

                            {/* Hero Button */}
                            <button type="button" className="bg-yellow-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 mt-4 w-[14rem] uppercase">
                                <a href="https://www.facebook.com/encuentrochurch1">
                                    {language.heroButton}
                                </a>
                                
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Hero
