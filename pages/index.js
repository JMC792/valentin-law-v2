import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from "@components/Navbar/Navbar";
import Link from "next/link";
import {Fragment} from "react";
import Hero from "@components/Hero/Hero";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>

      <main>
          <Hero/>

      </main>

    </Fragment>
  )
}
