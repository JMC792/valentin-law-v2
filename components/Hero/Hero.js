import {Fragment} from "react";

function Hero() {



    return(
        <Fragment>
            <header className="h-screen bg-back-2 bg-cover" id="header">
                <div className="container flex justify-center">
                    <div className="pt-[10rem] md:pt-[15rem] lg:pt-[23rem] text-center text-neutral-200 grid gap-y-10">
                        <h1 className="text-3xl lg:text-7xl drop-shadow-xl">Encuentro Church</h1>
                        <h3 className="text-xl lg:text-4xl drop-shadow-xl">Coming Soon</h3>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}
export default Hero
