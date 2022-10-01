import React, {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import audience2 from "public/images/audience-2.jpg"
import cross from "public/images/cross.jpg"

function Sermons(){

    return(
        <Fragment>
            <div className="py-20 bg-sky-100" id="services">
                <div className="container grid gap-y-12">
                    <h1 className="text-center text-2xl text-yellow-600 font-bold">Nuestro Sermones </h1>
                    <h2 className="text-center text-5xl font-bold">Nuestros Mensajes Previa</h2>
                    <div className="grid gap-y-24 lg:flex justify-evenly">

                        <div className="grid gap-y-4 md:p-4">
                            <Link href={"https://youtube.com"}>
                                <Image src={audience2} height={430} className={"cursor-pointer"}/>
                            </Link>
                            <h2 className="text-3xl transition hover:text-yellow-600">
                                <Link href={"https://youtube.com"}>
                                    El Desanimo
                                </Link>

                            </h2>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                            <div className="flex">
                                <span className="material-symbols-outlined">event</span>
                                <div>08/09/2022</div>
                            </div>
                        </div >

                        <div className="grid gap-y-4 md:p-4">
                            <Image src={cross} height={430}/>
                            <h2 className="text-3xl">Funerals</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                            <div className="flex">
                                <span className="material-symbols-outlined">event</span>
                                <div>08/09/2022</div>
                            </div>
                        </div>

                        <div className="grid gap-y-4 md:p-4">
                            <Image src={audience2} height={430}/>
                            <h2 className="text-3xl">Special Events</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                            <div className="flex">
                                <span className="material-symbols-outlined">event</span>
                                <div>08/09/2022</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default Sermons
