import {Fragment} from "react";

function About(){

    return (
        <Fragment>
            {/* About */}
            <div className='container py-32'>
                <div className='grid md:grid-cols-2'>

                    {/* ----------- Image ----------- */}
                    <div className="bg-back-3 h-96 border rounded-xl">

                    </div>

                    {/* ----------- Text ----------- */}
                    <div className='grid md:p-12'>
                        <div className='text-2xl'>About Us</div>
                        <div className=" md:text-4xl">Jesus Taught Us to Love Like God Loves</div>
                        <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
