import {Fragment} from "react";
import Image from "next/image";
import bible from "public/images/bible.jpg"

export default function Events(){

    return(
        <Fragment>
            <div>
                <div className="container py-12">

                    {/* Event title */}
                    <div className="grid gap-y-4">
                        <h1 className="text-xl text-yellow-600 font-bold">Upcoming Events</h1>
                        <h3 className="text-5xl font-bold">Where to find us</h3>
                    </div>

                    {/* Event Card(s) */}
                    <div className="pt-12">
                        <div className="grid gap-y-10 md:grid-cols-2">

                            {/* Event Card Data*/}
                            <div className="grid md:grid-cols-2">

                                {/* Event Card Image */}
                                <div className="p-4">
                                    <Image src={bible} alt={"bible"} className="rounded-xl"/>
                                </div>

                                {/* Event Card Information */}
                                <div className="grid gap-y-2 py-10">
                                    <div className="grid grid-cols-2">
                                        <div className="flex">
                                            <span className="material-symbols-outlined">home</span>
                                            <h1>Encuentro Church</h1>
                                        </div>
                                        <div className="flex">
                                            <span className="material-symbols-outlined">event</span>
                                            <div>08/09/2022</div>
                                        </div>
                                    </div>
                                    <h1 className="text-4xl text-yellow-900 font-bold">Santa Cena</h1>
                                    <p>Donec quam felis, ultricies nec, pell entes que eu, pretium quis id.</p>
                                </div>
                            </div>

                            {/* Event Card Data*/}
                            <div className="grid md:grid-cols-2">

                                {/* Event Card Image */}
                                <div className="p-4">
                                    <Image src={bible} alt={"bible"} className="rounded-xl"/>
                                </div>

                                {/* Event Card Information */}
                                <div className="grid gap-y-2 py-10">
                                    <div className="grid grid-cols-2">
                                        <div className="flex">
                                            <span className="material-symbols-outlined">home</span>
                                            <h1>Encuentro Church</h1>
                                        </div>
                                        <div className="flex">
                                            <span className="material-symbols-outlined">event</span>
                                            <div>08/09/2022</div>
                                        </div>
                                    </div>
                                    <h1 className="text-4xl text-yellow-900 font-bold">Santa Cena</h1>
                                    <p>Donec quam felis, ultricies nec, pell entes que eu, pretium quis id.</p>
                                </div>
                            </div>

                            {/* Event Card Data*/}
                            <div className="grid md:grid-cols-2">

                                {/* Event Card Image */}
                                <div className="p-4">
                                    <Image src={bible} alt={"bible"} className="rounded-xl"/>
                                </div>

                                {/* Event Card Information */}
                                <div className="grid gap-y-2 py-10">
                                    <div className="grid grid-cols-2">
                                        <div className="flex">
                                            <span className="material-symbols-outlined">home</span>
                                            <h1>Encuentro Church</h1>
                                        </div>
                                        <div className="flex">
                                            <span className="material-symbols-outlined">event</span>
                                            <div>08/09/2022</div>
                                        </div>
                                    </div>
                                    <h1 className="text-4xl text-yellow-900 font-bold">Santa Cena</h1>
                                    <p>Donec quam felis, ultricies nec, pell entes que eu, pretium quis id.</p>
                                </div>
                            </div>

                            {/* Event Card Data*/}
                            <div className="grid md:grid-cols-2">

                                {/* Event Card Image */}
                                <div className="p-4">
                                    <Image src={bible} alt={"bible"} className="rounded-xl"/>
                                </div>

                                {/* Event Card Information */}
                                <div className="grid gap-y-2 py-10">
                                    <div className="grid grid-cols-2">
                                        <div className="flex">
                                            <span className="material-symbols-outlined">home</span>
                                            <h1>Encuentro Church</h1>
                                        </div>
                                        <div className="flex">
                                            <span className="material-symbols-outlined">event</span>
                                            <div>08/09/2022</div>
                                        </div>
                                    </div>
                                    <h1 className="text-4xl text-yellow-900 font-bold">Santa Cena</h1>
                                    <p>Donec quam felis, ultricies nec, pell entes que eu, pretium quis id.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
    )
}
