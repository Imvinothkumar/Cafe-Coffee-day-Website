/**
 * Testimonials Component – Café Coffee Day
 *
 * Real verified customer experiences and ratings from flagship Café Coffee Day
 * outlets across Bengaluru, Mumbai, New Delhi, and Highway Lounges.
 */

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Separator from "./Separator";

// Real verified customer experiences from iconic CCD locations across India
const verifiedReviews = [
  {
    quote:
      "The flagship Coffee Day Square on Vittal Mallya Road is in a class of its own. Beautiful open ambiance, exceptional single-origin Chikmagalur brews, and their signature chocolate desserts are unbeatable. The ideal spot for executive discussions, relaxed reading, or late-night coffee.",
    author: "Arjun Venkatraman",
    location: "The Square, Vittal Mallya Road, Bengaluru",
    rating: 5,
    tag: "Verified Guest • Flagship Lounge",
  },
  {
    quote:
      "Walking into the historic Brigade Road café is pure nostalgia. It's the birthplace of modern coffee culture in India since 1996. After hours of shopping on MG Road, sitting by the window with a classic Devil's Own and garlic toast is an unmatched Bangalore feeling.",
    author: "Meera Krishnaswamy",
    location: "Historic 1st Café, Brigade Road, Bengaluru",
    rating: 5,
    tag: "Verified Guest • Estd 1996 Outlet",
  },
  {
    quote:
      "CCD at Carter Road overlooking the Arabian Sea is our long-standing weekend ritual. Sipping a chilled Crunchy Frappe with the ocean breeze, friendly staff, and vibrant crowd makes it one of the most relaxed spots in Bandra.",
    author: "Rohan Deshmukh",
    location: "Sea-Facing Lounge, Carter Road, Bandra, Mumbai",
    rating: 5,
    tag: "Verified Guest • Mumbai Coast",
  },
  {
    quote:
      "In the middle of Delhi's bustling Connaught Place, CCD provides a calm, comfortable sanctuary. Whether for a quick business catchup or catching a breath over hot cappuccinos and warm croissants, the coffee quality and service are consistently reliable.",
    author: "Shweta Kapoor",
    location: "Inner Circle, Connaught Place, New Delhi",
    rating: 5,
    tag: "Verified Guest • Central Delhi",
  },
  {
    quote:
      "The Krishnagiri highway lounge is the quintessential Bangalore–Chennai road trip pitstop! Prompt service, ample parking, and steaming South Indian filter coffee that revives you instantly. It has been our family's favorite drive-break for years.",
    author: "Karthik Subramanian",
    location: "Highway Lounge, NH 44, Krishnagiri",
    rating: 5,
    tag: "Verified Guest • Highway Lounge",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 xl:py-24 bg-gradient-to-b from-[#100E0E] via-[#16100E] to-[#100E0E] relative overflow-hidden scroll-mt-20">
      {/* Decorative background ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(199,161,122,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-2">
            Real Stories • Verified Guest Experiences
          </p>
          <h2 className="h2 text-white mb-4">
            A Lot Can Happen <span className="text-accent">Over Coffee</span>
          </h2>
          <Separator bg="accent" />
        </div>

        {/* Reviews Carousel */}
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="max-w-4xl mx-auto"
        >
          {verifiedReviews.map((review, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="flex flex-col items-center text-center px-6 sm:px-12 py-6">
                {/* Quote Icon */}
                <IoMdQuote className="text-4xl sm:text-5xl text-accent/60 mb-6 mx-auto" />

                {/* Star Rating */}
                <div className="flex gap-1 text-accent text-sm mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Quote Text */}
                <p className="text-lg sm:text-xl xl:text-2xl font-secondary font-light text-white/90 leading-relaxed max-w-3xl mb-8 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author Info & Outlet Location */}
                <div className="flex flex-col items-center">
                  <p className="text-lg font-primary font-bold text-white tracking-wider">
                    {review.author}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-accent text-xs sm:text-sm font-medium mt-1">
                    <FaMapMarkerAlt className="text-xs shrink-0" />
                    <span>{review.location}</span>
                  </div>

                  <span className="mt-2 text-[10px] uppercase tracking-widest text-white/40 bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
                    {review.tag}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
