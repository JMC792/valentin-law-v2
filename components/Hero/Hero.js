import {Fragment} from "react";
import {useRouter} from "next/router";
import indexEnglish from "public/locales/english/index.js"
import indexSpanish from "public/locales/spanish/index.js"

function Hero({
    language,
    heroButton,
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
                    <div className="pt-[13rem] md:pt-[15rem] lg:pt-[20rem]">

                        {/* Hero Text Config */}
                        <div className="text-center text-neutral-100">
                            <div className="space-y-10">

                            {/* Hero Title */}
                            <div className="text-6xl">
                                <div className="font-medium">
                                    {language.heroTitle}
                                </div>
                            </div>
                            

                            {/* Hero Subtitle */}
                            <div className="lg:px-[14rem] xl:px-[24rem]">
                                <div className="text-lg">
                                    {language.heroSubtitle}
                                </div>
                            </div>
                            

                            {/* Hero Button */}
                            <div>
                                <a href = {heroButton} >
                                    <button type="button" className="bg-sky-700 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 mt-4 w-[14rem] uppercase">
                                        {language.heroButton}
                                    </button>
                                </a>
                            </div>
                            

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Hero
