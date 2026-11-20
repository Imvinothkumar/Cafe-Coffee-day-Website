/**
 * Nav Component – Café Coffee Day
 * 
 * Full-screen responsive mobile navigation drawer with backdrop blur,
 * body scroll locking, and accessible exit animations.
 */

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import NavList from "./NavList";

interface NavProps {
  onClose: () => void;
}

const menuVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  close: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: [0.75, 0, 0.23, 1] },
  },
};

const Nav = ({ onClose }: NavProps) => {
  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <motion.nav
      variants={menuVariants}
      initial="initial"
      animate="open"
      exit="close"
      className="fixed inset-0 z-[70] bg-[#100E0E]/98 backdrop-blur-2xl flex flex-col justify-center items-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
    >
      {/* Close button on top right */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-white/70 hover:text-accent text-sm tracking-wider uppercase font-semibold flex items-center gap-2 rounded-full border border-white/10 hover:border-accent/40 bg-white/[0.04] transition-all"
        aria-label="Close navigation menu"
      >
        <span>✕</span>
        <span className="hidden sm:inline">Close</span>
      </button>

      {/* Nav Content */}
      <div className="w-full h-full max-h-screen">
        <NavList onLinkClick={onClose} />
      </div>
    </motion.nav>
  );
};

export default Nav;
