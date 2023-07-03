import { Fragment } from "react";
import Hero2 from "./Hero2";
import language from "public/locales/english/about.js"
import { facebook } from "public/data/links"
import SBSRight from "app/(homepage)/SBS-Right";

export const metadata = {
  
};

export default function Page() {
  return (
    <Fragment>
      <Hero2 language={language} heroButton={facebook}/>
      <SBSRight language={language} heroButton={facebook}/>
    </Fragment>
  );
}
