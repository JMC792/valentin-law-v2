import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/icons/superwoman.svg";
import call from "public/icons/call2.svg";
import email from "public/icons/email.svg";
import location from "public/icons/location_on_white.svg";
import language from "dictionaries/en.json";

export default function Internal(props) {
  return (
    <Fragment>
        <div className="flex flex-col items-center gap-y-8 lg:pt-14">
            {/* Links Title */}
            <div className="text-[1.5rem] font-bold text-center">
                {language.footer.usefulLinks.title}
            </div>

            {/* Link 1 */}
            <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer capitalize">
                <Link href={"/"}>
                    {language.footer.usefulLinks.link1}
                </Link>
            </div>

            {/* Link 2 */}
            <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer capitalize">
                <Link href={"/"+[language.footer.usefulLinks.link2]}>
                    {language.footer.usefulLinks.link2}
                </Link>
            </div>

            {/* Link 3 */}
            <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer capitalize">
                <Link href={"/"+[language.footer.usefulLinks.link3]}>
                    {language.footer.usefulLinks.link3}
                </Link>
            </div>

            {/* Link 4 */}
            <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer capitalize">
                <Link href={"/"+[language.footer.usefulLinks.link4]}>
                    {language.footer.usefulLinks.link4}
                </Link>
            </div>

            {/* Link 5 */}
            <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer capitalize">
                <Link href={"/"+[language.footer.usefulLinks.link5]}>
                    {language.footer.usefulLinks.link5}
                </Link>
            </div>
        </div>
            
    </Fragment>
  );
}
