import {Fragment} from "react";

function Giving(){

    return(
        <Fragment>
            {/* Giving */}
            <div className='bg-neutral-100'>
                <div className='container flex justify-center py-36'>
                    <div className='grid md:grid-cols-2'>
                        <div className="grid gap-y-8 text-right p-12">
                            <div className="italic">Donation</div>
                            <div className="text-4xl">Help us Make a Change</div>
                            <div className="md:text-[1rem]">
                                Dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </div>
                            <a href="https://tithe.ly/give?c=5922800">
                                <button
                                    type="button"
                                    className="border rounded-lg bg-sky-500 p-4"
                                >
                                    Donate Online
                                </button>
                            </a>

                        </div>

                        <div className="bg-back-1 border rounded-xl">

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Giving
