import Navbar from "@components/Layout/Navbar";
import {Fragment} from "react";
import Hero from "@components/Hero/Hero";
import About from "@components/Homepage/About";
import Quote from "@components/Homepage/Quote";
import Giving from "@components/Homepage/Giving";
import Sermons from "@components/Homepage/Sermons";
import Team from "@components/Homepage/Team";
import Events from "@components/Homepage/Events";

export default function Home() {
  return (
    <Fragment>
        <Navbar/>
        <Hero/>
        <Quote/>
        <About/>
        <Sermons/>
        <Events/>
        <Giving/>
        <Team/>
    </Fragment>
  )
}
