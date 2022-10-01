import React, {Fragment} from "react";
import Image from "next/image";
import aboutUsPicture from "public/images/youthGroup.jpg"
import Link from "next/link";

function About(){

    return (
        <Fragment>
            {/* About */}
            <div className="container py-20" id="about">
                <div className="grid md:grid-cols-2 gap-y-20">

                    {/* ----------- Image ----------- */}
                    <div className="">
                        <Image src={aboutUsPicture} alt="Youth Group" className="rounded-xl"/>
                    </div>

                    {/* ----------- Text ----------- */}
                    <div className="grid gap-y-10 md:p-32">
                        <div className="text-2xl font-bold text-yellow-600">About Us</div>
                        <div className="text-5xl font-bold">Jesus Taught Us to Love Like God Loves</div>
                        <div className="text-xl text-neutral-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                        <Link href="https://tithe.ly/give?c=5922800" >
                            <button type="button" className="border rounded-lg bg-amber-900 py-4 mx-24 md:mx- text-white">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
