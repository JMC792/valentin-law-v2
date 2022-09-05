import {Fragment} from "react";

function Services(){

    return(
        <Fragment>
            <div className="container py-32" id="services">
                <div className="grid gap-y-12">
                    <h1 className="text-center text-2xl text-yellow-600 font-bold">Our Services</h1>
                    <h2 className="text-center text-5xl font-bold">Let us Help You </h2>
                    <div className="grid lg:flex justify-evenly text-center">

                        <div className="grid gap-y-4 p-4">
                            <span className="material-symbols-outlined">mood</span>
                            <h2 className="text-3xl">Counseling</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div >

                        <div className="grid gap-y-4 p-4">
                            <span className="material-symbols-outlined">skull</span>
                            <h2 className="text-3xl">Funerals</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>

                        <div className="grid gap-y-4 p-4">
                            <span className="material-symbols-outlined">emoji_people</span>
                            <h2 className="text-3xl">Special Events</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default Services
