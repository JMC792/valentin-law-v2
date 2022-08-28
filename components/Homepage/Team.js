import {Fragment} from "react";

function Team(){
    return(
        <Fragment>
            <div className="container py-32">
                <div className="grid gap-y-5">
                    <div className="grid gap-y-4 text-center">
                        <h2>Our Team Members</h2>
                        <h1 className={"text-5xl"}>We Build Hope </h1>
                    </div>
                    <div className="grid grid-cols-4 gap-x-4 pt-12">
                        <div className="grid gap-y-1.5">
                            <div className="bg-back-1 h-[12rem]"></div>
                            <div className="text-3xl">Jesus Chavez</div>
                            <div className="italic">Lead Pastor</div>
                            <div className="pt-4">Lorem ipsum dolor sit amet, co secte penatibus ullamcorp, id.</div>
                        </div>

                        <div className="grid gap-y-1.5">
                            <div className="bg-back-1 h-[12rem]"></div>
                            <div className="text-3xl">Jesus Chavez</div>
                            <div className="italic">Lead Pastor</div>
                            <div className="pt-4">Lorem ipsum dolor sit amet, co secte penatibus ullamcorp, id.</div>
                        </div>

                        <div className="grid gap-y-1.5">
                            <div className="bg-back-1 h-[12rem]"></div>
                            <div className="text-3xl">Jesus Chavez</div>
                            <div className="italic">Lead Pastor</div>
                            <div className="pt-4">Lorem ipsum dolor sit amet, co secte penatibus ullamcorp, id.</div>
                        </div>

                        <div className="grid gap-y-1.5">
                            <div className="bg-back-1 h-[12rem]"></div>
                            <div className="text-3xl">Jesus Chavez</div>
                            <div className="italic">Lead Pastor</div>
                            <div className="pt-4">Lorem ipsum dolor sit amet, co secte penatibus ullamcorp, id.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team
