import {Fragment} from "react";
import Footer from "@components/Layout/Footer";
import Meta from "@components/Layout/Meta";
import Navbar from "@components/Layout/Navbar";

export default function Layout ({ children }){

    return(
        <Fragment>
            <Meta/>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </Fragment>
    )

}
