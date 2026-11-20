/**
 * Custom 404 Page – Café Coffee Day
 *
 * Themed 404 Not Found page for broken or non-existent URLs.
 * Features official CCD branding, warm dark coffee ambience, and clear navigation paths.
 */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Spilled Coffee | Café Coffee Day",
  description:
    "Looks like this brew went cold or the page doesn't exist. Return to Café Coffee Day homepage to explore our menu, stores, and stories.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#100E0E] text-white flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden font-secondary pt-24 pb-16">
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#c7a17a]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#e51927]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        
        {/* Clickable Brand Logo */}
        <Link
          href="/"
          aria-label="Café Coffee Day Home"
          className="inline-block relative w-[60px] h-[80px] sm:w-[70px] sm:h-[95px] mb-6 drop-shadow-2xl hover:scale-105 transition-transform"
        >
          <Image
            src="/assets/ccd-brand-logo.png"
            fill
            alt="Café Coffee Day"
            className="object-contain"
            priority
          />
        </Link>

        {/* 404 Numerical & Coffee Metaphor */}
        <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-2">
          Error 404 • Table Not Found
        </p>

        <h1 className="font-primary text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
          Spilled <span className="text-accent">Coffee?</span>
        </h1>

        <div className="w-16 h-0.5 bg-[#c7a17a]/60 mx-auto mb-6" />

        <p className="text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
          Looks like this brew went cold or this table doesn&apos;t exist. Don&apos;t worry — a warm cup and great conversations are just a click away.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <Link
            href="/"
            className="btn inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-xs tracking-wider"
          >
            <span>Back to Café Home</span>
            <span>→</span>
          </Link>

          <Link
            href="/#menu"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent/40 text-xs text-white/90 font-semibold tracking-wider uppercase transition-all"
          >
            <span>Explore Menu</span>
          </Link>

          <Link
            href="/#opening-hours"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent/40 text-xs text-white/90 font-semibold tracking-wider uppercase transition-all"
          >
            <span>Stores &amp; Hours</span>
          </Link>
        </div>

        {/* Brand Tagline */}
        <p className="text-white/40 text-[11px] tracking-[0.25em] uppercase font-semibold mt-12">
          A Lot Can Happen Over Coffee • Estd 1996
        </p>

      </div>
    </main>
  );
}

