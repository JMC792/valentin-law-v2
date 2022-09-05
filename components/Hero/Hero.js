import {Fragment} from "react";

function Hero() {



    return(
        <Fragment>
            <div className="h-screen bg-back-2 bg-cover" id="header">
                <div className="container flex justify-center">
                    <div className="pt-[13rem] md:pt-[15rem] lg:pt-[23rem]">
                        <div className="text-center text-neutral-100 space-y-10">
                            <div className="text-7xl">Encuentro Church</div>
                            <div className="text-xl lg:text-2xl ">Conectando a todos por el amor de dios</div>
                            <button type="button" className="bg-yellow-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 mt-4 w-[14rem] uppercase">aprende mas</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Hero
