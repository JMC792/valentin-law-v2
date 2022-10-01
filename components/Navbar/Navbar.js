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
            <nav className="absolute w-full z-10 top-0 text-white">
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">
                        <div className="flex flex-nowrap items-center justify-between">

                            {/* Logo */}
                            <Logo/>


                            {/* Link list */}
                            <div className="hidden lg:flex gap-x-6">


                                    <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#about">
                                            Nosotros
                                        </Link>
                                    </div>

                                    <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="#mission">
                                        Eventos
                                    </Link>
                                </div>

                                    <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#donation">
                                            Donacion
                                        </Link>
                                    </div>

                                    <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#contact">
                                            Conactctenos
                                        </Link>
                                    </div>

                            </div>

                            {/* Language */}
                            <div className="hidden lg:flex">
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="es" locale="es">
                                        English
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Us */}
                                <div className="hidden lg:grid hover:text-yellow-600 transition-colors delay-100">
                                    <h1 className="ml-2 text-center">Llamenos:</h1>
                                    <Link href="tel: 980-920-7074" className="ml-2 text-center">(980)290-7074</Link>
                                </div>

                            {/* Off-canvas Menu */}
                            <div className="xs:flex">
                                <a href="#" id="toggle-button">
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
                                        <Logo/>
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
