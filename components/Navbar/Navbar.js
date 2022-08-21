import {useState, useEffect, Fragment} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {OffcanvasData} from './offcanvas-data'
import Logo from "@components/Navbar/Logo";

function Navbar() {

    {/*============= Mobile Navbar Responsive  =============*/
    }
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


    {/*============= Adds sticky  =============*/
    }
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const navbar = document.querySelector('.header-selection');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? navbar.classList.add('is-sticky')
            : navbar.classList.remove('is-sticky');
    };

    return(
        <Fragment>
            <nav className="absolute w-full z-10 top-0 px-6">
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">
                        <div className="flex flex-nowrap items-center justify-between">
                            {/*----------------------- Logo ----------------------- */}
                            <Logo/>

                            {/*----------------------- Link list ----------------------- */}
                            <div className="hidden lg:flex gap-x-6 text-white">
                                <a className="text-[20px] hover:text-yellow-600 transition-colors delay-100">Mision</a>
                                <a className="text-[20px] hover:text-yellow-600 transition-colors delay-100">Nosotros</a>
                                <a className="text-[20px] hover:text-yellow-600 transition-colors delay-100">Donacion</a>
                                <a className="text-[20px] hover:text-yellow-600 transition-colors delay-100">Contactenos</a>
                            </div>

                            {/*----------------------- Language ----------------------- */}
                            <div className="hidden lg:flex">
                                <a className="text-[20px] text-white hover:text-yellow-600 transition-colors delay-100">English</a>
                            </div>

                            {/*----------------------- Contact Us ----------------------- */}
                            <div className="hidden lg:block text-white hover:text-yellow-600 transition-colors delay-100">
                                <i className="fa-solid fa-phone"></i>
                                <span className="ml-2 text-center">Llamanos:</span>
                                <br></br>
                                <a href="tel: 404-919-0443" className="text-center">
                                    (+1) 404-919-0443{" "}
                                </a>
                            </div>

                            {/*----------------------- Off-canvas Menu ----------------------- */}
                            <div className="xs:flex">
                                <a href="#" className="text-white" id="toggle-button">
                                    <span onClick={showOffcanvas} className="material-symbols-outlined">menu</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>

            {/*----------------------- Mobile Nav ----------------------- */}
            <nav className={offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"}>
                <nav className="offcanvas-menu z-50">
                    <ul className="offcanvas-menu-items" onClick={showOffcanvas}>
                        <li className="navbar-toggle flex justify-between items-center pb-[15px]">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/logo.png"
                                            alt="Logo"
                                            width={70}
                                            height={70}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <button
                                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                                aria-label="Right Align"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </li>
                        {OffcanvasData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </nav>
        </Fragment>
    )
}

export default Navbar
