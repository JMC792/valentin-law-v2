import {Fragment} from "react";

function Quote(){

    return(
        <Fragment>
            {/* Quote */}
            <div className='bg-neutral-100'>
                <div className='container flex justify-center py-32'>
                    <div className='text-center grid gap-y-6'>
                        <div className='md:text-2xl'>Nuestra Iglesia</div>
                        <div className="text-[2rem] italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                        <div className="text-[1.5rem]">Jesus Chavez</div>
                        <div>Lead Pastor</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Quote
