import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
