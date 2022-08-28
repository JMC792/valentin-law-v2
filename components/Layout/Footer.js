import { Fragment } from "react";
import Logo from "@components/Navbar/Logo";

export default function Footer() {
  return (
    <Fragment>
      <footer className=" bg-slate-800 shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="container mx-auto">
        
        {/*----------------------- Row 1 ----------------------- */}
        <div className="lg:flex sm:items-center sm:justify-between">

          {/*----------------------- Column 1 / Logo ----------------------- */}

            <div className="grid gap-y-4">
              <a href="#header" className="flex justify-start">
                <Logo/>
                <span className="self-center text-2xl text-neutral-200 px-4">Encuentro Church</span>
              </a>
              <p className="text-white">
                Welcome to Chapel, a modern theme for church and religion websites.
              </p>

              {/*============= List Column ============= */}
              <div className="grid gap-y-4 text-white">

                {/*============= Phone Number Row ============= */}
                <div>
                  <span className="material-symbols-outlined">call</span>
                  <span>(980)290-7074</span>
                </div>

                {/*============= Email Row ============= */}
                <div className="">
                  <i className="fa-solid fa-envelope"></i>
                  <a className="">jesus@encuentro.church</a>
                </div>
              </div>
            </div>


          <div  className="flex justify-center gap-x-20" >
            <a href="https://www.instagram.com/atlimmigration/" className="text-white">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>

            <a href="https://www.youtube.com/channel/UCw9NjJpXBRKdm9ch_kj1wDQ" className="text-white">
              <i className="fa-brands fa-youtube fa-2x"></i>
            </a>

            <a href="https://www.tiktok.com/@immigrationatl" className="text-white">
              <i className="fa-brands fa-tiktok fa-2x"></i>
            </a>

            <a href="https://twitter.com/valentinlawllc" className="text-white">
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>

          </div>

          {/*----------------------- Column 2 ----------------------- */}
          <ul className="flex justify-evenly items-center mb-6 text-sm text-neutral-200 py-8 ">
            <li>
              <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/*----------------------- Row 2 ----------------------- */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/*----------------------- Row 3 ----------------------- */}
        <span className="flex justify-center text-sm text-neutral-200 sm:text-center dark:text-gray-400 py-4">
          © 2022{" "}
          <a href="https://flowbite.com" className="hover:underline px-2">
            Encuentro Church
          </a>
          . All Rights Reserved.
        </span>
      </div>
        {/*----------------------- Row 1 ----------------------- */}
    </footer>
    </Fragment>
  )
}
