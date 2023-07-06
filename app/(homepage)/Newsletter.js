import { Fragment } from "react";

export default function Newsletter({language,heroButton}){

    return(
        <Fragment>
            {/* Hero Background */}
            <div className="md:h-[30rem] lg:h-[35rem] bg-back-2 bg-cover" id="header">
                {/* Hero Container */}
                <div className="container flex justify-center">
                    {/* Horizontal Margin and Padding */}
                    <div className="py-[2rem] md:py-[4rem] lg:py-[6rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="lg:px-[4rem] 2xl:px-[12rem]">
                            <div className="text-center text-neutral-100 ">
                                {/* Text Wrapper */}
                                <div className="space-y-5">

                                    {/* Hero Heading */}
                                    <div>
                                        <div className="text-md">
                                            <div className="font-bold leading-tight">
                                                {language.newsHeading}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hero Title */}
                                    <div className="lg:px-12">
                                        <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                            <div className="font-bold leading-tight">
                                                {language.newsTitle}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Hero Subtitle */}
                                    <div className="lg:px-24">
                                        <div className="text-lg">
                                            {language.newsSentence}
                                        </div>
                                    </div>
                                    
                                    {/* Form */}
                                    <form className="grid gap-y-4 md:flex md:gap-x-4 justify-center" data-netlify="true">
                                        {/* Input */}
                                        <div className="">
                                            <input type="email" id="email" name="email" placeholder="Email Address" className="rounded-md font-medium text-neutral-900 p-3" required />
                                        </div>

                                        {/* Button */}
                                        <div className="">
                                            <a href= {heroButton}>
                                                <button type="submit" className="rounded-lg bg-sky-600 py-3 px-8 text-white">{language.Button2}</button>
                                            </a>
                                        </div>
                                    </form>
                                

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
  }