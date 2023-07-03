import { Fragment } from "react"
import Image from "next/image"

function Blog({
    language,
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
                                    <a href= "/about">
                                        <button type="submit" className="border rounded-lg bg-amber-900 px-10 py-4 text-white">{language.Button1}</button>
                                    </a>
                                </div>
                        </div>
                        
                    </div>

                    {/* Blog Posts */}
                    <div className="pt-12">
                        <div className="grid gap-y-5 lg:grid-cols-3 gap-x-8">

                        {/* Post 3 */}
                        <div className="relative grid gap-y-5">
                            <Image src={svg3} alt="Ariane Macias" height={2000} className="w-full h-full"/>
                                <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent">
                                    <div className="absolute bottom-0 p-6">
                                        <div className="grid gap-y-2 text-neutral-100 text-[10px] md:text-[14px] lg:text-[12px] xl:text-[14px]">
                                            <div className="italic">{language.blogType}</div>
                                                <div className="font-bold">{language.blogArticle}</div>
                                                    <div className="">{language.blogSentence}</div>
                                                        <div className="">{language.blogDate}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                        </div>

                        {/* Post 3 */}
                        <div className="relative grid gap-y-5">
                            <Image src={svg3} alt="Ariane Macias" height={2000} className="w-full h-full"/>
                                <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent">
                                    <div className="absolute bottom-0 p-5">
                                        <div className="grid gap-y-2 text-neutral-100 text-[10px] md:text-[14px] lg:text-[12px] xl:text-[14px]">
                                            <div className="italic">{language.blogType}</div>
                                                <div className="font-bold">{language.blogArticle}</div>
                                                    <div className="">{language.blogSentence}</div>
                                                        <div className="">{language.blogDate}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                        </div>

                        {/* Post 3 */}
                        <div className="relative grid gap-y-5">
                            <Image src={svg3} alt="Ariane Macias" height={2000} className="w-full h-full"/>
                                <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent">
                                    <div className="absolute bottom-0 p-5">
                                        <div className="grid gap-y-2 text-neutral-100 text-[10px] md:text-[14px] lg:text-[12px] xl:text-[14px]">
                                            <div className="italic">{language.blogType}</div>
                                                <div className="font-bold">{language.blogArticle}</div>
                                                    <div className="">{language.blogSentence}</div>
                                                        <div className="">{language.blogDate}</div>
                                        </div>
                                    </div>
                                    
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