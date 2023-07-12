import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import close from "/public/icons/close.svg";

export default function SideNav(props){

    return(
        <Fragment>
            {/* Mobile Navbar  */}
            <nav className={
                props.offcanvas
                    ? "offcanvas-menu-wrap active"
                    : "offcanvas-menu-wrap"
            }>
                <nav className="offcanvas-menu z-50">
                    <ul className="offcanvas-menu-items" onClick={props.showOffcanvas}>

                        {/* Logo and Close Button Wrapper*/}
                        <li className="navbar-toggle flex justify-between items-center pb-[15px] cursor-pointer">
                            
                            {/* Logo */}
                            <div className="logo">
                                <Link href={"/"} >
                                    <Image src={props.logo} height={60} width={100} alt={"logo"}/>
                                </Link>
                            </div>

                            {/* Close Button */}
                            <button className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all" aria-label="Right Align">
                            <Image src={close} width={20} alt={"logo"} />
                            </button>
                        </li>

                        {/* List */}
                        <div>
                            
                            {/* Link 1 */}
                            <Link href={"/"} >
                                <div className='offcanvas-text'>
                                    {props.language.navbar.link1}
                                </div>
                            </Link>

                            {/* Link 2 */}
                            <Link href={"/" + [props.language.navbar.link2]} >
                                <div className='offcanvas-text'>
                                    {props.language.navbar.link2}
                                </div>
                            </Link>

                            {/* Link 3 */}
                            <Link href={"/" + [props.language.navbar.link3]} >
                                <div className='offcanvas-text'>
                                    {props.language.navbar.link3}
                                </div>
                            </Link>

                            {/* Link 4 */}
                            <Link href={"/" + [props.language.navbar.link4]} >
                                <div className='offcanvas-text'>
                                    {props.language.navbar.link4}
                                </div>
                            </Link>

                            {/* Link 5 */}
                            <Link href={"/" + [props.language.navbar.link5]} >
                                <div className='offcanvas-text'>
                                    {props.language.navbar.link5}
                                </div>
                            </Link>

                            {/* Link 6 */}
                            <Link href={'/'} locale={props.language.navbar.locale.spanish.code}>
                                <div className='offcanvas-text'>
                                    {props.language.navbar.locale.spanish.title}
                                </div>
                            </Link>

                            
                        </div>

                    </ul>
                </nav>
            </nav>
        </Fragment>
    )
}