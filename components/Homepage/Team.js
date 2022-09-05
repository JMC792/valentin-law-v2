import {Fragment} from "react";
import Image from 'next/image'
import jesusChavez from "public/images/jesusChavez.jpg"
import johnMcCarthy from "public/images/johnMcCarthy.jpg"
import arianeMacias from "public/images/arianeMacias.jpg"

function Team(){
    return(
        <Fragment>
            <div className="container py-32" id="team">
                <div className="grid gap-y-5">
                    <div className="grid gap-y-4 text-center">
                        <h2 className="text-2xl font-bold text-yellow-600">Our Team Members</h2>
                        <h1 className="text-6xl font-bold">We Build Hope </h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-20 pt-12">

                        <div className="grid gap-y-1.5">
                            <Image src={jesusChavez} alt="Jesus Chavez" className="rounded-xl"/>
                            <div className="text-3xl pt-12">Jesus Chavez</div>
                            <div className="italic">Lead Pastor</div>
                            <div className="pt-4">Lorem ipsum dolor sit amet, co secte penatibus ullamcorp, id.</div>
                        </div>

                        <div className="grid gap-y-1.5">
                            <Image src={johnMcCarthy}
                                   alt="John McCarthy"
                                   height={730}
                                   className="rounded-xl" />
                            <div className="text-3xl pt-12">John McCarthy</div>
                            <div className="italic">Co-Pastor</div>
                            <div className="pt-4">Lorem ipsum dolor sit amet, co secte penatibus ullamcorp, id.</div>
                        </div>

                        <div className="grid gap-y-1.5">
                            <Image src={arianeMacias}
                                   alt="Ariane Macias"
                                   height={1950}
                                   className="rounded-xl"/>
                            <div className="text-3xl pt-12">Ariane Macias</div>
                            <div className="italic">Band Director</div>
                            <div className="pt-4">Lorem ipsum dolor sit amet, co secte penatibus ullamcorp, id.</div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team
