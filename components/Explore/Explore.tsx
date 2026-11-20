/**
 * Explore Component – Café Coffee Day (Page 2)
 * 
 * Showcases CCD's signature beverage & food categories around the authentic
 * Café Coffee Day cold cup with a soft brown coffee atmosphere and smooth
 * scroll-triggered entrance animations from the sides.
 */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section 
      id="explore" 
      className="py-20 xl:py-0 xl:h-[95vh] w-full flex items-center relative overflow-hidden bg-[#1a0f0c] bg-[radial-gradient(circle_at_center,_#38221b_0%,_#261713_50%,_#1a0f0c_100%)] scroll-mt-20"
    >
      {/* Seamless Transition Ingress from Hero (Page 1) – Zero color line cut */}
      <div className="absolute top-0 left-0 w-full h-40 sm:h-52 xl:h-72 bg-gradient-to-b from-[#1a0f0c] via-[#1a0f0c]/70 to-transparent pointer-events-none z-0" />

      {/* Soft warm brown ambient highlights */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(199,161,122,0.08),transparent_70%)]" />

      {/* Seamless Transition Egress into About (Page 3) */}
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-52 xl:h-72 bg-gradient-to-b from-transparent via-[#100e0e]/70 to-[#100e0e] pointer-events-none z-0" />

      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center px-4 relative z-10">
        {/* Three-column layout: Left (slides in from left) | Center Authentic Cup | Right (slides in from right) */}
        <div className="w-full flex flex-col lg:flex-row gap-8 xl:gap-14 items-center">
          
          {/* Left Column - Flies in from the LEFT when scrolled */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col justify-around items-center xl:items-end text-center xl:text-right gap-10 xl:gap-12 max-w-[420px] mx-auto xl:max-w-none xl:mx-0 order-2 lg:order-1"
          >
            {/* Item 1: Hot Classics */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-1.svg"
              text={{
                title: "Hot Classics",
                description:
                  "Indulge in our signature Hot Classics — from aromatic South Indian filter coffees and intense espressos to rich cappuccinos crafted from Chikmagalur beans.",
              }}
            />
            {/* Item 2: All-Time Chillers */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-2.svg"
              text={{
                title: "All-Time Chillers",
                description:
                  "Beat the heat with CCD's legendary cold coffees. Try the iconic Devil's Own, the creamy Iced Eskimo, or our Crunchy Frappe with caramel pearls.",
              }}
            />
          </motion.div>
          
          {/* Center Column - Authentic Café Coffee Day Cup with soft scale & glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex justify-center items-center order-1 lg:order-2 my-4 lg:my-0"
          >
            <div className="relative w-[280px] h-[460px] sm:w-[320px] sm:h-[520px] xl:w-[360px] xl:h-[580px] drop-shadow-[0_20px_50px_rgba(229,25,39,0.3)]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt="Café Coffee Day Authentic Cup"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Flies in from the RIGHT when scrolled */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex-1 flex flex-col justify-around items-center xl:items-start text-center xl:text-left gap-10 xl:gap-12 max-w-[420px] mx-auto xl:max-w-none xl:mx-0 order-3"
          >
            {/* Item 3: All-Day Delights */}
            <ExploreItem
              itemCSS="xl:text-left items-center xl:items-start"
              icon="coffee-3.svg"
              text={{
                title: "All-Day Delights",
                description:
                  "Crispy warm samosas, grilled paneer sandwiches, gourmet burgers, and quick bites designed to pair with your favorite CCD brew.",
              }}
            />
            {/* Item 4: Sweet Tooth */}
            <ExploreItem
              itemCSS="xl:text-left items-center xl:items-start"
              icon="coffee-4.svg"
              text={{
                title: "Sweet Tooth",
                description:
                  "Decadent chocolate fantasy cakes, sizzling brownies, muffins, and cookies to celebrate sweet moments over coffee.",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Explore;