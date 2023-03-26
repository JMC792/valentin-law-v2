import Navbar from "@components/Layout/Navbar";
import {Fragment} from "react";
import Hero from "@components/Hero/Hero";
import About from "@components/Homepage/About";
import Quote from "@components/Homepage/Quote";
import Giving from "@components/Homepage/Giving";
import Sermons from "@components/Homepage/Sermons";
import Team from "@components/Homepage/Team";
import Events from "@components/Homepage/Events";
import {useRouter} from "next/router";
import indexEnglish from "public/locales/english/index.js"
import indexSpanish from "public/locales/spanish/index.js"

export default function Home() {

  const router = useRouter();
    const {locale} = router;
    const language = locale === 'en-US'
        ? indexEnglish
        : indexSpanish

  return (
    <Fragment>
        <Navbar language = {language}/>
        <Hero language = {language}/>
        <Quote language = {language}/>
        <About language = {language}/>
        <Sermons language = {language}/>
        <Events language = {language}/>
        <Giving language = {language}/>
        <Team language = {language}/>
    </Fragment>
  )
}
