/**
 * Terms of Use & Copyright Reserve Page – Café Coffee Day
 * 
 * Formal terms of service, intellectual property notices, trademark ownership,
 * and creator copyright reservation for Product Designer VINOTHKUMAR P.
 */

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Use & Copyright Reserve | Café Coffee Day",
  description:
    "Official Terms of Use, Trademark Rights, and Developer Copyright Reservation by Product Designer VINOTHKUMAR P. All rights reserved.",
};

export default function TermsAndCopyrightPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#100E0E] text-white/90 pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb & Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold tracking-wider uppercase mb-4 transition-colors"
          >
            &larr; Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-primary font-bold text-white tracking-wide">
                Terms &amp; <span className="text-accent">Copyright Reserve</span>
              </h1>
              <p className="text-secondary text-sm mt-2">
                Designer Copyright &copy; {currentYear} VINOTHKUMAR P • Coffee Day Global Limited Attribution
              </p>
            </div>

            <Link
              href="/"
              aria-label="Café Coffee Day Home"
              className="relative w-[48px] h-[64px] shrink-0 block hover:scale-105 transition-transform cursor-pointer"
            >
              <Image
                src="/assets/ccd-brand-logo.png"
                fill
                alt="Café Coffee Day"
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-white/80">
          
          {/* Aesthetic Product Designer Ownership Card */}
          <section className="relative group overflow-hidden bg-gradient-to-b from-[#1c1310]/85 via-[#140d0b]/90 to-[#0e0908]/95 border border-[#c7a17a]/20 hover:border-[#c7a17a]/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-500 space-y-6">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#c7a17a]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#c7a17a]/15 transition-all duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/80 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent/80 font-semibold">
                    Created by
                  </span>
                </div>
                <div className="pt-0.5">
                  <a
                    href="https://vinothkumar-portfolio-mu.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-primary text-2xl sm:text-[30px] font-semibold text-white tracking-wide hover:text-accent transition-colors duration-300 block leading-tight"
                  >
                    VINOTHKUMAR P
                  </a>
                  <p className="text-xs tracking-[0.18em] uppercase text-white/50 font-medium pt-1">
                    Product Designer
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://vinothkumar-portfolio-mu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white/90 bg-white/[0.04] hover:bg-[#c7a17a]/15 border border-white/[0.1] hover:border-[#c7a17a]/40 transition-all duration-300 shadow-sm"
                >
                  <span>Visit Portfolio</span>
                  <span className="text-[11px] text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300">↗</span>
                </a>

                <a
                  href="mailto:veeravinoth292@gmail.com"
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
                >
                  Email
                </a>

                <a
                  href="tel:+919361422036"
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium text-accent hover:text-white bg-accent/10 hover:bg-accent/20 border border-accent/25 hover:border-accent/50 transition-all duration-300 font-mono tracking-tight"
                >
                  +91 9361422036
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-2">
                Copyright &amp; Intellectual Property Ownership
              </h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                The original source code, React and Next.js frontend component logic, Tailwind styling, Framer Motion entrance animations, GSAP horizontal scrolls, and user interface layouts are copyrighted by the product designer (&copy; {currentYear} VINOTHKUMAR P. All Rights Reserved).
              </p>
            </div>
          </section>

          {/* Trademark Protection */}
          <section className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              1. Brand Trademarks &amp; Proprietary Rights
            </h2>
            <p className="mb-3 text-secondary">
              All trademarks, trade dress, service marks, logos, brand slogans (&ldquo;A Lot Can Happen Over Coffee&rdquo;), beverage labels (&ldquo;Devil&apos;s Own&rdquo;, &ldquo;Crunchy Frappe&rdquo;, &ldquo;Kaapi Nirvana&rdquo;), and historical company records relating to &ldquo;Café Coffee Day&rdquo; are the exclusive intellectual property of <strong>Coffee Day Global Limited</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-black/30 border border-white/5 rounded-xl p-3.5">
                <p className="font-bold text-white text-sm">“Café Coffee Day” &amp; “CCD”</p>
                <p className="text-xs text-secondary mt-0.5">Primary registered trade names and café service marks.</p>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-xl p-3.5">
                <p className="font-bold text-white text-sm">Official Brand Logo &amp; Symbol</p>
                <p className="text-xs text-secondary mt-0.5">Signature dialogue brand symbol and visual identity.</p>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-xl p-3.5">
                <p className="font-bold text-white text-sm">“A Lot Can Happen Over Coffee”</p>
                <p className="text-xs text-secondary mt-0.5">Official brand tagline and slogan since 1996.</p>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-xl p-3.5">
                <p className="font-bold text-white text-sm">“The Lounge” &amp; “The Square”</p>
                <p className="text-xs text-secondary mt-0.5">Specialized format identifiers and beverage labels.</p>
              </div>
            </div>
          </section>

          {/* Website Usage Terms */}
          <section className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              2. Terms of Website Use
            </h2>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2 text-secondary">
              <li><strong className="text-white">Permitted Use:</strong> Visitors are granted a limited license to browse this website for personal, non-commercial purposes such as viewing café menus, locating stores, and checking opening hours.</li>
              <li><strong className="text-white">Prohibited Actions:</strong> Automated scrapers, data-mining scripts, or unauthorized commercial copying of design elements are strictly prohibited.</li>
              <li><strong className="text-white">Menu Pricing &amp; Availability:</strong> Menu items, descriptions, and pricing in Indian Rupees (₹) are subject to seasonal updates and municipal taxes.</li>
            </ul>
          </section>

          {/* Contact Details */}
          <section className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              3. Contact &amp; Legal Notices
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <p className="text-accent font-semibold uppercase text-xs">Product Designer</p>
                <p className="text-white font-bold text-base">VINOTHKUMAR P</p>
                <p className="text-secondary">
                  Portfolio:{" "}
                  <a
                    href="https://vinothkumar-portfolio-mu.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    vinothkumar-portfolio-mu.vercel.app ↗
                  </a>
                </p>
                <p className="text-secondary">
                  Email:{" "}
                  <a href="mailto:veeravinoth292@gmail.com" className="text-accent hover:underline">
                    veeravinoth292@gmail.com
                  </a>
                </p>
                <p className="text-secondary">
                  Phone:{" "}
                  <a href="tel:+919361422036" className="text-accent hover:underline">
                    +91 9361422036
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-accent font-semibold uppercase text-xs">Corporate Brand Entity</p>
                <p className="text-white font-bold text-base">Coffee Day Global Limited</p>
                <p className="text-secondary">Vittal Mallya Road, Bengaluru – 560001</p>
                <p className="text-secondary">
                  Toll-Free Helpline:{" "}
                  <a href="tel:18001025093" className="text-accent hover:underline">
                    1800 102 5093
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation Back Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center justify-between text-xs text-secondary">
          <Link href="/" className="hover:text-accent transition-colors">
            &larr; Back to Home
          </Link>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <Link href="/research" className="hover:text-accent transition-colors">
              About CCD Heritage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
