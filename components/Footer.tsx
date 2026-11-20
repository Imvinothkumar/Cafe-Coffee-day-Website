/**
 * Footer Component – Café Coffee Day
 *
 * Site footer with navigation links, social media icons, legal policies,
 * refined pro designer signature (VINOTHKUMAR P - Product Designer), and authentic CCD brand attribution.
 */

import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Primary Navigation links
const primaryLinks = [
  { href: "/", name: "Home" },
  { href: "/#explore", name: "Explore" },
  { href: "/menu", name: "Menu" },
  { href: "/#about", name: "About" },
  { href: "/#opening-hours", name: "Stores & Hours" },
  { href: "/research", name: "About CCD" },
];

// Legal Policy links
const legalLinks = [
  { href: "/privacy", name: "Privacy Policy" },
  { href: "/terms", name: "Terms & Copyright" },
  { href: "/cookies", name: "Cookie Policy" },
  { href: "/privacy#contact", name: "Contact & Grievances" },
];

// Social media icon components with verified official CCD URLs
const socialIcons = [
  { icon: <FaYoutube />, name: "YouTube", href: "https://www.youtube.com/@cafecoffeeday" },
  { icon: <FaFacebook />, name: "Facebook", href: "https://www.facebook.com/cafecoffeeday/" },
  { icon: <FaTwitter />, name: "Twitter", href: "https://twitter.com/cafecoffeeday" },
  { icon: <FaInstagram />, name: "Instagram", href: "https://www.instagram.com/cafecoffeeday/" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 pb-8 relative">
      <div className="absolute w-full h-full bg-black/[0.93] z-10 top-0" />
      <div className="container mx-auto z-20 relative px-4">
        <div className="flex flex-col items-center justify-center gap-10">
          
          {/* Authentic Footer Brand Identity */}
          <Link href="/" className="flex flex-col items-center gap-3 group">
            <div className="relative w-[50px] h-[70px] drop-shadow-xl group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/ccd-brand-logo.png"
                fill
                alt="Café Coffee Day"
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <p className="font-primary text-[24px] xl:text-[28px] font-bold text-white tracking-wider leading-none group-hover:text-accent transition-colors">
                <span className="text-accent">Café</span> Coffee Day
              </p>
              <p className="text-[10px] xl:text-[11px] text-accent tracking-[0.28em] uppercase font-semibold mt-1.5">
                A Lot Can Happen Over Coffee
              </p>
            </div>
          </Link>

          {/* Primary Navigation Links */}
          <nav className="flex flex-wrap gap-6 xl:gap-12 justify-center items-center">
            {primaryLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all text-xs xl:text-sm font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Media Icons */}
          <ul className="flex text-white text-lg gap-3.5">
            {socialIcons.map((social, index) => (
              <a
                key={`social-${index}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Café Coffee Day on ${social.name}`}
                className="w-10 h-10 border border-white/[0.12] rounded-full flex items-center justify-center text-white/70 hover:text-accent hover:border-accent hover:bg-white/[0.04] transition-all"
              >
                {social.icon}
              </a>
            ))}
          </ul>

          {/* Legal Policies Navigation Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-white/60 border-t border-white/[0.08] w-full pt-6 max-w-2xl mx-auto">
            {legalLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-accent transition-colors underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CCD Official Helpline & Support Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 bg-white/[0.02] border border-white/10 rounded-2xl py-3 px-6 max-w-2xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <span className="text-accent text-xs">📞</span>
              <span>CCD Helpline:</span>
              <a href="tel:18001025093" className="text-white hover:text-accent font-semibold transition-colors">
                1800 102 5093
              </a>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="text-accent text-xs">✉</span>
              <a href="mailto:customercare@cafecoffeeday.com" className="text-white hover:text-accent font-semibold transition-colors">
                customercare@cafecoffeeday.com
              </a>
            </div>
          </div>

          {/* Bespoke Pro Creator Signature */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#1c1310]/80 via-[#140d0b]/90 to-[#0e0908]/95 border border-[#c7a17a]/20 hover:border-[#c7a17a]/40 p-6 sm:p-7 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-500">
              {/* Subtle Ambient Gold Hue */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#c7a17a]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#c7a17a]/15 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Designer Hallmark */}
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
                      rel="noopener noreferrer"
                      className="font-primary text-2xl sm:text-[28px] font-semibold text-white tracking-wide hover:text-accent transition-colors duration-300 block leading-tight"
                    >
                      VINOTHKUMAR P
                    </a>
                    <p className="text-xs tracking-[0.18em] uppercase text-white/50 font-medium pt-1">
                      Product Designer
                    </p>
                  </div>
                </div>

                {/* Minimalist Pro Contact Cluster */}
                <div className="flex flex-wrap items-center gap-2.5 pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                  <a
                    href="https://vinothkumar-portfolio-mu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
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
            </div>
          </div>

          {/* Clean Trademark & Copyright Reservation */}
          <div className="w-full text-center text-white/45 text-[11px] tracking-wider space-y-1.5 max-w-2xl mx-auto pt-2">
            <p className="text-white/70 font-medium">
              &copy; {currentYear} VINOTHKUMAR P. All Rights Reserved.
            </p>
            <p className="text-white/40 text-[10.5px]">
              &ldquo;Café Coffee Day&rdquo;, &ldquo;A Lot Can Happen Over Coffee&rdquo;, and related brand marks are registered trademarks of Coffee Day Global Limited.
            </p>
            <p className="text-accent/70 font-medium pt-0.5">
              ESTD 1996 • Brigade Road, Bengaluru • Sourced from Chikmagalur Estates
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
