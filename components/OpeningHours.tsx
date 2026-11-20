/**
 * OpeningHours Component – Café Coffee Day
 * 
 * Displays comprehensive store opening hours, weekend timings,
 * holiday schedules, and 24/7 highway lounge availability.
 */

import Image from "next/image";
import Link from "next/link";
import Separator from "./Separator";
import { FaClock, FaCalendarAlt, FaPhoneAlt, FaMotorcycle } from "react-icons/fa";

const OpeningHours = () => {
  return (
    <section id="opening-hours" className="flex flex-col xl:flex-row bg-[#100E0E] min-h-[70vh] xl:min-h-[85vh] scroll-mt-20">
      {/* Left Side - Welcoming Coffee Shop Entrance Image with Heritage Badge */}
      <div className="relative flex min-h-[360px] sm:min-h-[440px] xl:min-h-full flex-1 justify-center items-center overflow-hidden group">
        {/* Cinematic Vignette Overlay – Seamless blend on both mobile (bottom) and desktop (right) */}
        <div className="w-full h-full absolute z-30 top-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-black/40 to-[#100E0E] pointer-events-none" />
        
        {/* Aesthetic Background Image: Guest entering cozy coffee shop */}
        <Image
          src="/assets/opening-hours/img.jpg"
          fill
          alt="Guest entering welcoming Café Coffee Day lounge in the evening"
          priority
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Right Side - Schedule & Timings Board */}
      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative py-16 px-4 sm:px-8">
        {/* Dark Overlay for optimal readability */}
        <div className="w-full h-full absolute top-0 left-0 bg-black/[0.88] z-10" />
        
        {/* Content Container */}
        <div className="z-20 flex flex-col items-center justify-center max-w-xl w-full text-center">
          {/* Authentic CCD Brand Emblem (Clickable) */}
          <Link
            href="/"
            aria-label="Café Coffee Day Home"
            className="relative w-[44px] h-[60px] mb-3 drop-shadow-xl block hover:scale-105 transition-transform cursor-pointer"
          >
            <Image
              src="/assets/ccd-brand-logo.png"
              fill
              alt="Café Coffee Day Brand Emblem"
              className="object-contain"
            />
          </Link>

          {/* Section Subtitle & Title */}
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-2">
            Store Hours &amp; Holiday Schedule
          </p>
          <h2 className="h2 text-white mb-3">Opening Hours</h2>
          
          <Separator bg="accent" />

          {/* Timings Card Board */}
          <div className="mt-8 w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-5 text-left">
            
            {/* Weekdays */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-1 sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-accent/15 text-accent text-base">
                  <FaClock />
                </span>
                <div>
                  <p className="font-primary font-bold text-lg text-white">Monday – Friday</p>
                  <p className="text-xs text-secondary">Regular Café Hours</p>
                </div>
              </div>
              <span className="font-primary font-semibold text-lg text-accent sm:text-right">
                09:00 AM – 11:30 PM
              </span>
            </div>

            {/* Weekends */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-1 sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-accent/15 text-accent text-base">
                  <FaClock />
                </span>
                <div>
                  <p className="font-primary font-bold text-lg text-white">Saturday &amp; Sunday</p>
                  <p className="text-xs text-secondary">Weekend Extended Lounge Hours</p>
                </div>
              </div>
              <span className="font-primary font-semibold text-lg text-accent sm:text-right">
                08:30 AM – 12:00 Midnight
              </span>
            </div>

            {/* Holidays & Festivals */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-1 sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-accent/15 text-accent text-base">
                  <FaCalendarAlt />
                </span>
                <div>
                  <p className="font-primary font-bold text-lg text-white">Holidays &amp; Festivals</p>
                  <p className="text-xs text-secondary">Diwali, New Year, Christmas, National Holidays</p>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="inline-block bg-accent/20 text-accent font-semibold text-xs uppercase px-2.5 py-0.5 rounded-full border border-accent/30 mb-0.5">
                  Open 365 Days
                </span>
                <p className="font-primary font-semibold text-base text-white">
                  10:00 AM – 12:00 Midnight
                </p>
              </div>
            </div>

            {/* Highway Lounges & Online Delivery Notice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-black/40 border border-white/5 rounded-xl p-3 flex items-start gap-2.5">
                <span className="text-accent text-sm mt-0.5">★</span>
                <div>
                  <p className="font-bold text-white">Highway &amp; Transit Hubs</p>
                  <p className="text-secondary text-[11px] mt-0.5">Selected NH Highway Lounges &amp; Airport kiosks operate <strong>24/7</strong>.</p>
                </div>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-xl p-3 flex items-start gap-2.5">
                <FaMotorcycle className="text-accent text-sm mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-white">Late-Night Delivery</p>
                  <p className="text-secondary text-[11px] mt-0.5">Order on Swiggy &amp; Zomato till <strong>01:00 AM</strong>.</p>
                </div>
              </div>
            </div>

            {/* Store Helpdesk with Clickable Phone */}
            <div className="pt-2 text-center text-xs text-secondary flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-accent text-[11px]" />
              <span>For outlet specific timings or bulk orders, call Toll-Free: <a href="tel:18001025093" className="text-white font-semibold hover:text-accent underline transition-colors">1800 102 5093</a></span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
