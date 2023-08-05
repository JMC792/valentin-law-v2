import {Fragment} from "react";
import Image from "next/image";
import seo from "/public/icons/Homepage/seo.svg";

export default function Services(props){
    return(
        <Fragment>
            <div id="Services">
                <div className="container py-20">

                    {/* Services Heading Wrapper */}
                    <div className="grid gap-y-10 pb-8 text-center">
                        {/* Header */}
                        <div className="text-xl font-medium text-purple-900 capitalize">what we do</div>
                        {/* Title */}
                        <div className="text-5xl text-teal-800 capitalize lg:px-44 xl:px-64">Empowering Businesses with Cutting-Edge Online Solutions</div>
                        {/* Subtitle */}
                        <div className="text-md lg:px-44 xl:px-64">Our tailored web design and development services ensure top-notch performance, attracting more customers to your site and boosting your business revenue. Each line of code is meticulously crafted by hand, guaranteeing exceptional results for your online success</div>
                    </div>

                    {/* Services Cards List */}
                    <div className="flex flex-col lg:flex-row gap-8 justify-center">
                        
                        {/* Services 1 */}
                        <div className="flex flex-col bg-neutral-100 p-6 items-center">
                            {/* Service Image */}
                            <Image src={seo} alt="people cooking" height={200}/>
                            {/* Services Text Wrapper */}
                            <div className="flex flex-col gap-y-2 text-center">
                                {/*Services Card Title*/}
                                <div className="text-xl text-yellow-900 font-bold">Embracing Mobile-First Era</div>
                                {/*Services Card Paragraph*/}
                                <div className=""> Our expertise ensures your website shines on search engines with top-notch mobile optimization, catering to 60% of internet users who browse on their handheld devices.</div>
                            </div>
                        </div>

                        {/* Services 2 */}
                        <div className="flex flex-col bg-neutral-100 p-6 items-center">
                            {/* Service Image */}
                            <Image src={seo} alt="people cooking" height={200}/>
                            {/* Services Text Wrapper */}
                            <div className="flex flex-col gap-y-2 text-center">
                                {/*Services Card Title*/}
                                <div className="text-xl text-yellow-900 font-bold">Seamless Accessibility</div>
                                {/*Services Card Paragraph*/}
                                <div className="">Our website design ensures a perfect fit for screens of all sizes, be it mobiles, tablets, or desktops, enabling potential clients to access your site effortlessly from any location.</div>
                            </div>
                        </div>

                        {/* Services 1 */}
                        <div className="flex flex-col bg-neutral-100 p-6 items-center">
                            {/* Service Image */}
                            <Image src={seo} alt="people cooking" height={200}/>
                            {/* Services Text Wrapper */}
                            <div className="flex flex-col gap-y-2 text-center">
                                {/*Services Card Title*/}
                                <div className="text-xl text-yellow-900 font-bold">Custom Code</div>
                                {/*Services Card Paragraph*/}
                                <div className="">we craft bespoke solutions with precision. Embrace limitless possibilities and leave a lasting impact on your audience. Let's build your digital masterpiece together.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
