'use client'

import React, {useState, useEffect} from 'react';
import style from './navbar.module.css';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion, useScroll } from 'framer-motion';
import {buzzvelLogoLight, burguerMenuIcon, closeIcon} from '@/app/ui/icons/icons';

function MenuOptions() {
  const pathname = usePathname();

  return (
    <>
      <Link 
        href="/about" 
        className={`px-2 py-1 border border-solid transition text-center ${
          pathname === '/about' ? 'font-semibold border-highlight-white' : 'border-transparent'
        }`}
      >
        about
      </Link>

      <Link 
        href="/projects" 
        className={`px-2 py-1 border border-solid transition text-center ${
          pathname === '/projects' ? 'font-semibold border-highlight-white' : 'border-transparent'
        }`}
      >
        projects
      </Link>

      <Link 
        href="/career" 
        className={`px-2 py-1 border border-solid transition text-center ${
          pathname === '/career' ? 'font-semibold border-highlight-white' : 'border-transparent'
        }`}
      >
        career
      </Link>
    </>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className="navbar w-full h-[60px] flex md:container md:mx-auto items-center justify-between font-raleway">
        <div className="navbar-logo px-[3.5px]">
          <Link href="/">
            {buzzvelLogoLight()}
          </Link>
        </div>

        <div 
          className="navbar-menu md:hidden relative cursor-pointer" 
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          {!mobileMenuOpen ? burguerMenuIcon() : closeIcon()}

          <div 
          className={`absolute top-[50px] right-2 p-10 bg-secondary-bg rounded gap-3 z-50 ${
            mobileMenuOpen ? 'flex flex-col' : 'hidden'
          }`}
          >
            <MenuOptions />
          </div>
        </div>

        <div className="navbar-navlinks hidden md:flex gap-3 px-[3.5px]">
          <MenuOptions />
        </div>

      </nav>
    
      <motion.div 
        className={style['progress-bar']}
        style={{ scaleX: scrollYProgress}}
      />
    </>
  )
}
