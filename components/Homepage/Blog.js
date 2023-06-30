import { Fragment } from "react"
import Image from "next/image"

function Blog({
    language,
    donationButton,
    svg1,
    svg2,
    svg3
}){

    return(
        <Fragment>
            <div className="container py-20" id="team">
                <div className="grid gap-y-5">

                    <div className="grid gap-y-4">
                        {/* Header */}
                        <h2 className="text-2xl font-medium text-yellow-600">{language.blogHeading}</h2>
                        {/* Title and Button */}
                        <div className="flex justify-between">
                            <h1 className="text-5xl font-bold">{language.blogTitle}</h1>
                            <div className="">
                                    <a href= {donationButton}>
                                        <button type="submit" className="border rounded-lg bg-amber-900 px-10 py-4 text-white">{language.viewAll}</button>
                                    </a>
                                </div>
                        </div>
                        
                    </div>

                    {/* Team Members */}
                    <div className="pt-12">
                        <div className="grid lg:grid-cols-3 gap-x-8">

                        {/* Pastor */}
                        <div className="grid gap-y-5">
                            <Image src={svg1} alt="Jesus Chavez" height={1000} />
                            <div className="gap-y-1.5">
                                <div className="text-3xl">{language.teamMember1}</div>
                                <div className="italic">{language.teamMember1Title}</div>
                            </div>
                        </div>

                        {/* Administrator */}
                        <div className="grid gap-y-5">
                            <Image src={svg2} alt="Mauricio Chavez" height={1100} />
                            <div className="gap-y-1.5">
                                <div className="text-3xl">{language.teamMember2}</div>
                                <div className="italic">{language.teamMember2Title}</div>
                            </div>
                        </div>

                        {/* Band Director */}
                        <div className="grid gap-y-5">
                            <Image src={svg3} alt="Ariane Macias" height={2000} />
                            <div className="gap-y-1.5">
                                <div className="text-3xl">{language.teamMember3}</div>
                                <div className="italic">{language.teamMember3Title}</div>
                            </div>
                        </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}
export default Blog