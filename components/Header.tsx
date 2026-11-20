/**
 * Header Component – Café Coffee Day
 * 
 * The site header/navigation bar that appears at the top of every page.
 * Uses the authentic Café Coffee Day brand emblem and tagline.
 */

"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav/Nav";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="absolute top-[24px] xl:top-[30px] left-0 right-0 z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Authentic CCD Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 z-[60] group cursor-pointer"
            aria-label="Café Coffee Day Home"
          >
            {/* Authentic Brand Emblem from user upload */}
            <div className="relative w-[44px] h-[58px] xl:w-[50px] xl:h-[66px] shrink-0 drop-shadow-md group-hover:scale-105 transition-transform">
              <Image 
                src="/assets/ccd-brand-logo.png" 
                fill 
                alt="Café Coffee Day Emblem" 
                className="object-contain" 
                priority
              />
            </div>
            
            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-primary text-[20px] xl:text-[24px] font-bold text-white tracking-wider leading-none group-hover:text-accent transition-colors">
                <span className="text-accent">Café</span> Coffee Day
              </span>
              <span className="text-[9px] xl:text-[10px] text-accent tracking-[0.22em] uppercase font-semibold mt-1">
                A Lot Can Happen Over Coffee
              </span>
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setNavActive(!navActive)}
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            ></span>
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0  transition-opacity duration-300 ${
                navActive ? "opacity-0" : "top-1/2"
              }`}
            ></span>
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {navActive && <Nav onClose={() => setNavActive(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
