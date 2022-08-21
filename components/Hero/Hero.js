import {Fragment} from "react";

function Hero() {



    return(
        <Fragment>
            <header className="h-screen bg-back-2 bg-cover" id="header">
                <div className="container flex justify-center">
                    <div className="pt-[10rem] md:pt-[15rem] lg:pt-[23rem] text-center text-neutral-200">
                        <h1 className="text-2xl lg:text-7xl drop-shadow-xl">Bienvenidos a Encuentro Church</h1>
                        <h3 className="pt-4 text-xl lg:text-2xl drop-shadow-xl">Conectando a todos por el amor de dios</h3>
                        <button type="button" className="text-white bg-yellow-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 mt-4 w-[14rem] uppercase">aprende mas</button>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}
export default Hero
