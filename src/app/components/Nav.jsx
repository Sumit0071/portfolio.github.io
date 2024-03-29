"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import { SiYoutubemusic } from "react-icons/si";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact me", path: "#contact" },
    {
        title: <SiYoutubemusic className='h-7 w-7' />, path: "#music"
    },

];
const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState( false );
    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap lg:py-4 items-center justify-between mx-auto py-4'>

                <Link href="/">
                    <Image src="/assets/logo.png" alt='logo' height={85} width={85}>
                    </Image></Link>
                <div className='Mobile-menu block md:hidden'>
                    {!navbarOpen ?
                        <button className='flex items-center px-3 py-2 
                        border rounded border-slate-200 text-slate-200
                        hover:text-white hover:border-white' onClick={() => setNavbarOpen( true )}>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                        :
                        <button className='flex items-center px-3 py-2 
                        border rounded border-slate-200 text-slate-200
                        hover:text-white hover:border-white'
                            onClick={() => setNavbarOpen( false )}>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    }
                </div>
                <div className="menu hideen md:block md:w-auto max-lg:hidden px-2" id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 '>{
                        navLinks.map( ( link, index ) =>
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li> )

                    }

                    </ul>

                </div>

            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Nav;
