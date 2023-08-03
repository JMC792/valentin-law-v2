import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/icons/superwoman.svg";
import call from "public/icons/call2.svg";
import email from "public/icons/email.svg";
import location from "public/icons/location_on_white.svg";
import language from "dictionaries/en.json";

export default function Overview(props) {
  return (
    <Fragment>
        <div className="basis-1/4 grid gap-y-8">
            
            {/* Overview Title */}
            <div className="text-[1.5rem] text-neutral-200 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                <Link href="/">
                    <Image
                    src={logo}
                    width={200}
                    alt={"logo"}
                    className={"cursor-pointer"}
                    />
                </Link>
            </div>

            {/* Overview Paragraph*/}
            <div className="text-white">
                {language.footer.overview.paragraph}
            </div>
            
        </div>
    </Fragment>
  );
}
