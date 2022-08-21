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
          <Navbar/>
          <Hero/>

          {/* Quote */}
          <div className='bg-orange-100'>
            <div className='container flex justify-center py-32'>
              <div className='text-center grid gap-y-6'>
                <div className='md:text-2xl'>Nuestra Iglesia</div>
                <div className="md:text-[2rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                <div>By Jesus Chavez</div>
                <div>Lead Pastor</div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className='container py-32'>
            <div className='grid md:grid-cols-2 md:p-12'>
              <div>
                  <img src="public/images/youth-group.jpg" alt="youth group" className="h-full"/>
              </div>
              <div className='grid gap-y-6'>
                <h1 className='text-2xl'>About Us</h1>
                <div className=" md:text-4xl">Jesus Taught Us to Love Like God Loves</div>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
          </div>


      </main>

      <Footer />
    </Fragment>
  )
}
