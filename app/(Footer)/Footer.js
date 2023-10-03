import { Fragment } from "react"

// Icons
import call from "public/icons/call2.svg"
import email from "public/icons/email.svg"
import image1 from "public/icons/crown.svg"
import location from "public/icons/location_on_white.svg"
import language from "dictionaries/en.json"

// Components
import Overview from "./Overview"
import Internal from "./Internal"
import Outgoing from "./Outgoing"
import Trademark from "./Trademark"
import Contact from "./Contact"

export default function Footer(props) {

  return (
    <Fragment>
      <footer className="bg-neutral-800">
        {/* Footer Container */}
        <div className="container text-white">
          {/* Footer padding and Margin */}
          <div className="py-20">
            {/* Footer Layout*/}
            <div className="grid gap-y-20 lg:flex lg:justify-between items-start">
              <Overview
                title = {props.overview[0]}
                description = {props.overview[1]}
                image = {props.overview[2]}
              />
              <Internal
                links={props.internal}/>
              <Outgoing 
                title= {language.footer.socialMedia.title}
                links= {props.outgoing}
              />
              <Contact 
                title= {language.footer.legal.title}
                links={[
                  [language.footer.legal.link1.title, language.footer.legal.link1.link, call, "call"],
                  [language.footer.legal.link2.title, language.footer.legal.link2.link, email, "email"],
                ]}
              />
            </div>
          </div>

          {/*----------------------- Dividing Line ----------------------- */}
          <hr className="border-neutral-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/*----------------------- Trademark ----------------------- */}
          <Trademark
            year = {props.trademark[0]}
            company = {props.trademark[1]}
            rights = {props.trademark[2]}
          />
        </div>
      </footer>
    </Fragment>
  );
}
