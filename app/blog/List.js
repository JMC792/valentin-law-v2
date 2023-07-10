import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

function Blog({ heading, title, image, blogData }) {
    return (
    <Fragment>
        <div className="bg-neutral-50">
            <div className="container py-20 xl:px-[10rem] 2xl:px-[18rem]" id="team">
                <div className="grid gap-y-5">
                    {/* Title & Headigs */}
                    <div className="grid gap-y-4">
                        {/* Header */}
                        <h2 className="text-xl font-medium text-yellow-600">{heading}</h2>
                        {/* Title */}
                        <div className="flex justify-between">
                            <h1 className="text-5xl font-bold">{title}</h1>
                        </div>
                    </div>

                    {/* Blog Posts */}
                    <div className="pt-12">
                    <div className="grid gap-y-5 lg:grid-cols-3 gap-x-8">
                        {Object.keys(blogData).map((key) => {
                            const blog = blogData[key];
                            return (
                                <Link key={key} href={`/blog/${blog.slug}`}>
                                    <div className="relative grid gap-y-5 hover:duration-300 hover:scale-105 cursor-pointer">
                                    <Image src={image} alt="Ariane Macias" height={2000} className="w-full h-full rounded-xl"/>
                                    <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent">
                                        <div className="absolute bottom-0 p-5">
                                            <div className="grid gap-y-2 text-neutral-100 text-[10px] md:text-[14px] lg:text-[12px] xl:text-[14px]">
                                                <div className="italic">{blog.type}</div>
                                                <div className="font-bold">{blog.name}</div>
                                                <div className="">{blog.sentence}</div>
                                                <div className="">{blog.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </Fragment>
    );
}
export default Blog;
