import {Fragment} from "react";
import Image from 'next/image'
import jesusChavez from "public/images/jesusChavez.jpg"
import image2 from "public/images/mauricio.jpeg"
import arianeMacias from "public/images/arianeMacias.jpg"

function Team({
    language
}){
    return(
        <Fragment>
            <div className="container py-20" id="team">
                <div className="grid gap-y-5">

                    {/* Header */}
                    <div className="grid gap-y-4 text-center">
                        <h2 className="text-2xl font-bold text-yellow-600">{language.teamHeading}</h2>
                        <h1 className="text-6xl font-bold">{language.teamTitle}</h1>
                    </div>

                    {/* Team Members */}
                    <div className="grid lg:grid-cols-3 gap-20 pt-12">

                        {/* Pastor */}
                        <div className="grid">
                            <Image src={jesusChavez} alt="Jesus Chavez" className="rounded-xl"/>
                            <div className="gap-y-1.5">
                                <div className="text-3xl pt-12">{language.teamMember1}</div>
                                <div className="italic">{language.teamMember1Title}</div>
                            </div>
                        </div>

                        {/* Administrator */}
                        <div className="grid">
                            <Image src={image2} alt="Mauricio Chavez" height={1100} className="rounded-xl"/>
                            <div className="gap-y-1.5">
                                <div className="text-3xl pt-12">{language.teamMember2}</div>
                                <div className="italic">{language.teamMember2Title}</div>
                            </div>
                        </div>

                        {/* Band Director */}
                        <div className="grid">
                            <Image src={arianeMacias} alt="Ariane Macias" height={1950} className="rounded-xl"/>
                            <div className="gap-y-1.5">
                                <div className="text-3xl pt-12">{language.teamMember3}</div>
                                <div className="italic">{language.teamMember3Title}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team
