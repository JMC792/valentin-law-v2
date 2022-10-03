import { Fragment } from "react";
import Link from "next/link";
import footerEnglish from "public/locales/english/footer.js"
import footerSpanish from "public/locales/spanish/footer.js"
import {useRouter} from "next/router";

export default function Footer() {

  const router = useRouter();
  const {locale} = router;
  const t =locale === 'en-US'
      ? footerEnglish
      :footerSpanish

  return (
    <Fragment>
      <footer className="bg-slate-800">
        <div className="container text-white">
          {/*----------------------- Row 1 ----------------------- */}
          <div className="py-20">
            <div className="grid gap-x-24 gap-y-20 sm:items-center lg:flex">

              {/*----------------------- Encuentro Church ----------------------- */}
              <div className="basis-1/4 grid gap-y-8">

                <div className="text-[1.5rem] text-neutral-200 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="/">{t.overviewTitle}</Link>
                </div>

                <div className="text-white">
                  {t.overviewParagraph}
                </div>

                <div className="grid gap-y-4 text-white">

                  <div className="flex gap-x-2 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <span className="material-symbols-outlined">call</span>
                    <Link href="tel: 980-290-7074">(980)290-7074</Link>
                  </div>

                  <div className="flex gap-x-2 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <span className="material-symbols-outlined">mail</span>
                    <Link href="mailto: jesus@encuentro.church">jesus@encuentro.church</Link>
                  </div>

                  <div className="flex gap-x-2 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <span className="material-symbols-outlined">location_on</span>
                    <Link href="https://www.google.com/maps/place/Albemarle+Road+Middle+School/@35.1988335,-80.7309605,17z/data=!3m1!4b1!4m5!3m4!1s0x885421f0843cef05:0xfc0b30c5cc54b6e7!8m2!3d35.1988291!4d-80.7287718">6900 Democracy Dr, Charlotte, NC 28212</Link>
                  </div>

                </div>

              </div>

              {/*----------------------- Links ----------------------- */}
              <div className="basis-1/4 grid gap-y-8">
                <label className="text-[1.5rem] font-bold">{t.usefulLinkTitle}</label>

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="#about" >About</Link>
                </div>

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="#services" >Services</Link>
                </div>

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="https://tithe.ly/give?c=5922800">Donate</Link>
                </div>

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="#team">Team</Link>
                </div>

              </div>

              {/*----------------------- Follow Our Socials ----------------------- */}
              <div className="basis-1/4 grid gap-y-8">
                <label className="text-[1.5rem] font-bold">{t.socialMediaTitle}</label>
                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="https://www.instagram.com/atlimmigration/" >Instagram</Link>
                </div>
                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="https://www.youtube.com/channel/UCvTGSmdDliKBpuIM0kZvKiQ"  >Youtube</Link>
                </div>
                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="https://www.facebook.com/encuentrochurch1">Facebook</Link>
                </div>
                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="https://twitter.com/valentinlawllc">Twitter</Link>
                </div>

              </div>

              {/*----------------------- Private Policy ----------------------- */}
              <div className="basis-1/4 grid gap-y-8">
                <label className="text-[1.5rem] font-bold">Legal</label>

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="#about">About</Link>
                </div >

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="#">Privacy Policy</Link>
                </div>

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="#">Licensing</Link>
                </div>

                <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="#contact-us">Contact</Link>
                </div>

              </div>

            </div>
          </div>

          {/*----------------------- Dividing Line ----------------------- */}
          <hr className="border-neutral-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/*----------------------- Trademark ----------------------- */}
          <span className="flex justify-center text-sm text-neutral-200 sm:text-center dark:text-gray-400 py-4">
            © 2022{" "}
            <a href="https://flowbite.com" className="hover:underline px-2">
              Encuentro Church
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Fragment>
  );
}
