import {Fragment} from "react";
import Link from "next/link";
import { heroButton } from "public/data/links"
import {language} from "public/locales/english/index.js"

export default function Button1(
){
    return(
        <Fragment>
            {/* Hero Button */}
            <div>
                <Link href = {heroButton} >
                    <button type="button" className="bg-sky-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 mt-4 w-[14rem] uppercase">
                        {language.heroButton}
                    </button>
                </Link>
            </div>
        </Fragment>
    )
}