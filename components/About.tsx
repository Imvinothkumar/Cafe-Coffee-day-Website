/**
 * About Component – Café Coffee Day (Page 3)
 *
 * Immersive horizontal scrolling story section powered by GSAP ScrollTrigger.
 * Features:
 * - Pinned container with scrubbed horizontal translation across 3 heritage panels
 * - "Our Journey", "Our Promise", "Our Community"
 * - Clickable brand seals, responsive image showcases, and seamless CCD branding
 */

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import Separator from "./Separator";

const storyPanels = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    subtitle: "Brigade Road, Bengaluru • Estd 1996",
    description:
      "Founded in 1996 on Brigade Road, Bengaluru, Café Coffee Day began as a single café with an iconic cyber café counter and a visionary mission — to give young India a welcoming place to connect over great coffee. Today, CCD is India's favourite café chain, sourcing beans from thousands of small coffee planters in Chikmagalur and serving millions of memorable cups every year.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    subtitle: "Estate Beans to Every Cup",
    description:
      "At Café Coffee Day, we promise an experience rooted in authentic Indian coffee craftsmanship. Every batch is carefully sourced from lush southern plantations, expertly roasted, and lovingly prepared. From our signature Devil's Own and Crunchy Frappe to rich espressos and cold brews, every sip reflects our dedication to unmatched flavour.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Community",
    subtitle: "Education, Planters & Youth Empowerment",
    description:
      "CCD is more than a café — it is a community. Through the Coffee Day Foundation and the SVGH Education Trust, we empower rural youth with free vocational education and hospitality training. We believe in sustainable cultivation and supporting the thousands of families whose dedication brings great coffee to life.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section id="about" className="overflow-hidden bg-[#100E0E] relative scroll-mt-20">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {storyPanels.map((item, index) => (
            <div
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative px-4"
            >
              <div className="container mx-auto">
                <div className="flex gap-[40px] items-center relative">
                  
                  {/* Text Column */}
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] mb-3" />
                    
                    <div className="max-w-[560px] text-center">
                      <p className="text-xs uppercase tracking-[0.28em] text-accent font-semibold mb-2">
                        {item.subtitle}
                      </p>
                      
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-3">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>
                      
                      <div className="mb-6 flex justify-center">
                        <Separator bg="accent" />
                      </div>
                      
                      <p className="leading-relaxed mb-8 px-4 xl:px-0 text-secondary text-sm sm:text-base">
                        {item.description}
                      </p>
                      
                      <div>
                        <Link
                          href="/research"
                          className="btn inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs tracking-wider group"
                        >
                          <span>Discover Our Story</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image Column with Clickable Brand Logo Watermark */}
                  <div className="hidden lg:flex flex-1 w-full h-[55vh] xl:h-[68vh] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                      alt={item.title}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 pointer-events-none" />

                    {/* Clickable Brand Logo Watermark */}
                    <Link
                      href="/"
                      aria-label="Café Coffee Day Home"
                      className="absolute top-6 right-6 w-11 h-16 drop-shadow-2xl z-20 opacity-80 hover:opacity-100 hover:scale-105 transition-all block"
                    >
                      <Image
                        src="/assets/ccd-brand-logo.png"
                        fill
                        alt="Café Coffee Day Emblem"
                        className="object-contain"
                      />
                    </Link>

                    {/* Ambient Chapter Tag */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-semibold text-accent uppercase tracking-wider backdrop-blur-md">
                        Chapter {index + 1}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
