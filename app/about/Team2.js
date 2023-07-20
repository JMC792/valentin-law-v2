import {Fragment} from "react";
import Image from 'next/image'

export default function Team2({
    language,
    svg1,
    svg2,
    svg3,
}){
    return(
        <Fragment>
            <div className="container py-20" id="team">
                <div className="grid gap-y-5">

                    {/* Header */}
                    <div className="flex flex-col items-center gap-y-4">
                        <div className="text-2xl text-purple-800">{language.teamHeading}</div>
                        <div className="text-4xl lg:text-6xl font-bold text-center">{language.teamTitle}</div>
                        <div className="text-center">{language.teamSentence}</div>
                    </div>

                    {/* Team Members */}
                    <div className="grid lg:grid-cols-3 gap-5 xl:px-24 pt-12">

                        {/* Pastor */}
                        <div className="relative ">
                            <Image src={svg1} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{language.teamMember1}</div>
                                    <div className="text-sm">{language.teamMember1Title}</div>
                                </div>
                            </div>
                        </div>

                        {/* Pastor */}
                        <div className="relative ">
                            <Image src={svg1} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{language.teamMember1}</div>
                                    <div className="text-sm">{language.teamMember1Title}</div>
                                </div>
                            </div>
                        </div>

                        {/* Pastor */}
                        <div className="relative ">
                            <Image src={svg1} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{language.teamMember1}</div>
                                    <div className="text-sm">{language.teamMember1Title}</div>
                                </div>
                            </div>
                        </div>

                        {/* Pastor */}
                        <div className="relative ">
                            <Image src={svg1} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{language.teamMember1}</div>
                                    <div className="text-sm">{language.teamMember1Title}</div>
                                </div>
                            </div>
                        </div>

                        {/* Pastor */}
                        <div className="relative ">
                            <Image src={svg1} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{language.teamMember1}</div>
                                    <div className="text-sm">{language.teamMember1Title}</div>
                                </div>
                            </div>
                        </div>

                        {/* Pastor */}
                        <div className="relative ">
                            <Image src={svg1} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{language.teamMember1}</div>
                                    <div className="text-sm">{language.teamMember1Title}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
