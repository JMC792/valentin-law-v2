import React, {Fragment} from "react";
import Head from "next/head";
import Script from 'next/script'

function Meta(){

    return(
            <Head>
                <title>Encuentro Church</title>
                <link rel="icon" href="/favicon.ico"/>
                <Script src="https://kit.fontawesome.com/445848c381.js" crossOrigin="anonymous"></Script>
            </Head>
    )
}

export default Meta
