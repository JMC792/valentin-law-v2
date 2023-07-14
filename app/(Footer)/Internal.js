import { Fragment } from "react";
import Link from "next/link";
import language from "dictionaries/en.json";

export default function Internal(props) {
  return (
    <Fragment>
        <div className="flex flex-col items-center gap-y-8">
            {/* Links Title */}
            <div className="text-[1.5rem] font-bold text-center">
                {language.footer.usefulLinks.title}
            </div>

            <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <a href={"/"} className="capitalize">
                        {props.links[0]}
                    </a>
                </div>

            {/* Links */}
            {props.links.slice(1).map((link, index) => (
                <div key={index} className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <a href={link} className="capitalize">{link}</a>
                </div>
            ))}
        </div>
            
    </Fragment>
  );
}
