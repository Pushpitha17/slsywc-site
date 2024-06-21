'use client'
import React, { useState, useEffect } from 'react'
import logo from '/assets/logo.png'
import clsx from 'clsx';


const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Theme", href: "#" },
  { label: "Speakers", href: "#" },
  { label: "Schedule", href: "#" },
]

function Navbar() {

  const [activeLink, setActiveLink] = useState("Home")
  
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <nav className={clsx("sticky top-0 z-50 border-b border-[#01224D] transition duration-300", {'backdrop-blur-lg  h-[69px] md:h-[85px]': hasScrolled })}>
      <div className="absolute w-full">
      <div className="container mx-auto px-4 relative lg:text-sm">
        <div className="py-3 md:pt-7 flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="mr-2" src="/assets/Congress Logo 2024.svg" alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index} className={activeLink == item.label ? 'bg-text-gradient font-bold text-transparent bg-clip-text' : undefined} >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
              <HamburgerMenu isOpen={mobileDrawerOpen} toggleMenu={toggleNavbar} />
          </div>
          </div>
          {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#01224D] w-full pt-2 flex flex-col justify-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-3 pl-8 border-b-2 border-primary-background">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
     
    </nav>
  )
}

export default Navbar


const HamburgerMenu = (props: { toggleMenu: () => void, isOpen: boolean }) => (
  <button 
        onClick={props.toggleMenu} 
        className="relative w-6 h-4 flex flex-col justify-between items-center group"
      >
        <span 
          className={clsx(
            "block w-full h-0.5 bg-text-gradient transform transition duration-300",
            { "rotate-45 translate-y-1.5": props.isOpen }
          )}
        ></span>
        <span 
          className={clsx(
            "block w-full h-0.5 bg-text-gradient transition duration-300",
            { "opacity-0": props.isOpen }
          )}
        ></span>
        <span 
          className={clsx(
            "block w-full h-0.5 bg-text-gradient transform transition duration-300",
            { "-rotate-45 -translate-y-1.5": props.isOpen }
          )}
        ></span>
      </button>
)