/**
 * Home Page Component – Café Coffee Day
 * 
 * This is the main landing page of the coffee shop website.
 * Uses client-side features:
 * - useEffect hook for initializing Locomotive Scroll
 * - Dynamic imports for performance optimization
 * 
 * Page flow:
 * Hero -> Explore -> About -> Menu -> Opening Hours -> Testimonials
 */

"use client";

import { useEffect } from "react";
// components
import About from "@/components/About";
import Explore from "@/components/Explore/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu/Menu";
import OpeningHours from "@/components/OpeningHours";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  /**
   * Locomotive Scroll Initialization
   */
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-x-hidden bg-[#100e0e]">
      {/* Hero Section: Main landing area with video background and scroll animation */}
      <Hero />
      
      {/* Explore Section: Showcases coffee & chiller categories around the signature cup */}
      <Explore />
      
      {/* About Section: CCD company story with horizontal scroll animation */}
      <About />
      
      {/* Menu Section: CCD signature coffee menu items & INR pricing */}
      <Menu />
      
      {/* Opening Hours Section: Business hours, customer care & café ambiance */}
      <OpeningHours />
      
      {/* Testimonials Section: Customer reviews carousel */}
      <Testimonials />
    </div>
  );
};

export default Home;
