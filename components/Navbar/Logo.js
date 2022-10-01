import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/icons/logo.svg"


function Logo() {

    return (
        <Fragment>
            <Link href={"/"} >
                <Image src={logo} height={60} width={100} alt={"logo"}/>
            </Link>

        </Fragment>
    )
}

export default Logo
