/**
 * Hero Component – Café Coffee Day
 *
 * The hero/banner section at the top of the homepage.
 * Features:
 * - Full-screen video background with autoplay
 * - Dark overlay for text readability
 * - Official CCD brand emblem image from cup upload
 * - CCD tagline: "A Lot Can Happen Over Coffee"
 * - Call-to-action buttons
 * - Parallax scrolling effect using Locomotive Scroll data attributes
 */

"use client";

import Image from "next/image";
import Separator from "./Separator";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  // Scroll-driven animation for seamless transition into Explore (Page 2)
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 200]);
  const videoScale = useTransform(scrollY, [0, 800], [1.05, 1.25]);
  const videoFilter = useTransform(
    scrollY,
    [0, 450, 800],
    [
      "brightness(0.95) blur(0px)",
      "brightness(0.75) blur(2px)",
      "brightness(0.45) blur(6px)",
    ]
  );
  const bottomGradientOpacity = useTransform(scrollY, [0, 500], [0.85, 1]);

  return (
    <section id="hero" className="h-[88vh] xl:h-screen relative text-white overflow-hidden bg-[#100e0e]">
      {/* Cinematic Ambient Dark Gradient Overlay – Balances video vibrancy with crisp text contrast */}
      <div className="absolute w-full h-full z-10 bg-gradient-to-b from-[#100e0e]/75 via-[#100e0e]/45 to-[#1a0f0c]/90 pointer-events-none" />

      {/* Animated Video Background with Parallax Scale & Soft Blur into Page 2 */}
      <motion.div
        style={{
          y: videoY,
          scale: videoScale,
          filter: videoFilter,
        }}
        className="absolute top-0 left-0 w-full h-full will-change-transform"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Seamless Feathered Blend Mask into 2nd Page (Explore Section) */}
      <motion.div
        style={{ opacity: bottomGradientOpacity }}
        className="absolute bottom-0 left-0 w-full h-44 sm:h-56 xl:h-72 bg-gradient-to-b from-transparent via-[#1a0f0c]/70 to-[#1a0f0c] z-20 pointer-events-none"
      />

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative px-4">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-7 h-full"
        >
          {/* Brand Emblem & Heading */}
          <div className="flex flex-col items-center">
            {/* Authentic Brand Emblem Image (Clickable) */}
            <Link
              href="/"
              aria-label="Café Coffee Day Home"
              className="relative w-[58px] h-[80px] xl:w-[72px] xl:h-[98px] mb-4 drop-shadow-2xl block hover:scale-105 transition-transform cursor-pointer"
            >
              <Image 
                src="/assets/ccd-brand-logo.png" 
                fill 
                alt="Café Coffee Day Brand Emblem" 
                className="object-contain" 
                priority
              />
            </Link>
            <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-2">
              ESTD 1996 • BRIGADE ROAD, BENGALURU
            </p>
            <h1 className="h1 text-white">
              <span className="text-accent">Café</span> Coffee Day
            </h1>
          </div>

          <Separator />

          <p className="lead font-light max-w-[320px] md:max-w-[480px] xl:max-w-[620px] mb-2">
            “A Lot Can Happen Over Coffee.” Since 1996, we&apos;ve been India&apos;s
            favourite destination for coffee, conversations, friendship and connections.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link href="#menu" className="btn flex items-center justify-center">
              Our Menu
            </Link>
            <Link 
              href="/research" 
              className="min-w-[156px] h-[54px] px-6 border border-accent/60 hover:border-accent hover:bg-accent/10 text-white text-[13px] uppercase font-semibold tracking-[.15em] transition-all flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
