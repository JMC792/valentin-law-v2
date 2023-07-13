import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import t from "public/locales/english/footer.js"
import logo from "public/icons/superwoman.svg"
import call from "public/icons/call2.svg"
import email from "public/icons/email.svg"
import location from "public/icons/location_on_white.svg"
import language from "dictionaries/en.json"
import Overview from "./Overview"
import Internal from "./Internal"
import Outgoing from "./Outgoing"
import Trademark from "./Trademark"

export default function Footer(props) {

  return (
    <Fragment>
      <footer className="bg-neutral-800">
        {/* Footer Container */}
        <div className="container text-white">
          {/* Footer padding and Margin */}
          <div className="py-20">
            {/* Footer Layout*/}
            <div className="grid gap-y-20 lg:flex lg:justify-between items-center">
              <Overview/>
              <Internal/>
              <Outgoing 
                title= {language.footer.socialMedia.title}
                links={[
                  [language.footer.socialMedia.media1.title, language.footer.socialMedia.media1.link],
                  [language.footer.socialMedia.media2.title, language.footer.socialMedia.media2.link],
                  [language.footer.socialMedia.media3.title, language.footer.socialMedia.media3.link],
                  [language.footer.socialMedia.media4.title, language.footer.socialMedia.media4.link]
              ]}/>
              <Outgoing 
                title= {language.footer.legal.title}
                links={[
                  [language.footer.legal.link1.title, language.footer.legal.link1.link],
                  [language.footer.legal.link2.title, language.footer.legal.link2.link],
                  [language.footer.legal.link3.title, language.footer.legal.link3.link],
                  [language.footer.legal.link4.title, language.footer.legal.link4.link],
                ]}
              />
            </div>
          </div>

          {/*----------------------- Dividing Line ----------------------- */}
          <hr className="border-neutral-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/*----------------------- Trademark ----------------------- */}
          <Trademark
            year = {language.footer.trademark.year}
            company = {language.footer.trademark.company}
            rights = {language.footer.trademark.rights}
          />
        </div>
      </footer>
    </Fragment>
  );
}
