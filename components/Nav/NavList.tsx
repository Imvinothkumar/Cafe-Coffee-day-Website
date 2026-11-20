/**
 * NavList Component – Café Coffee Day
 *
 * Clean mobile navigation links with quick contact action bar.
 * Automatically closes mobile navigation when any link is tapped.
 */

"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

interface NavListProps {
  onLinkClick: () => void;
}

export const navLinks = [
  { href: "/", name: "Home" },
  { href: "/#explore", name: "Explore Chillers" },
  { href: "/#about", name: "Our Heritage" },
  { href: "/menu", name: "Café Menu" },
  { href: "/#opening-hours", name: "Stores & Hours" },
  { href: "/research", name: "About CCD" },
] as const;

const NavList = ({ onLinkClick }: NavListProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full py-12 px-6 max-w-md mx-auto text-center">
      
      {/* Brand Watermark in Mobile Drawer */}
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">
          Café Coffee Day
        </p>
        <p className="text-white/40 text-xs mt-1">
          A Lot Can Happen Over Coffee
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-5 sm:gap-6 w-full">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={onLinkClick}
            className="font-primary text-2xl sm:text-3xl font-bold text-white/90 hover:text-accent tracking-wider uppercase transition-colors py-1 border-b border-white/[0.05]"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Quick Mobile Contact Bar */}
      <div className="w-full pt-8 mt-6 border-t border-white/10 space-y-3 text-xs">
        <a
          href="tel:18001025093"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold tracking-wide hover:bg-accent/25 transition-all"
        >
          <FaPhoneAlt className="text-xs" />
          <span>Call Toll-Free: 1800 102 5093</span>
        </a>

        <div className="flex items-center justify-center gap-4 text-white/50 text-[11px] pt-1">
          <a
            href="mailto:customercare@cafecoffeeday.com"
            className="hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <FaEnvelope className="text-accent" />
            <span>Customer Care</span>
          </a>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <FaClock className="text-accent" />
            <span>Open 365 Days</span>
          </span>
        </div>
      </div>

    </div>
  );
};

export default NavList;
