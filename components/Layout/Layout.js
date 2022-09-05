import {Fragment} from "react";
import Footer from "@components/Layout/Footer";
import Meta from "@components/Layout/Meta";

export default function Layout ({ children }){

    return(
        <Fragment>
            <Meta/>
            <main>{children}</main>
            <Footer/>
        </Fragment>
    )

}
