/**
 * Badge Component – Café Coffee Day
 * 
 * Aesthetic luxury circular brand emblem.
 * Features:
 * - Static, clean champagne-gold circular typography ("CAFÉ COFFEE DAY" & "★ ESTD 1996 • OVER COFFEE ★")
 * - Concentric hairline gold accent tracks & dark espresso obsidian disc
 * - Centered, upright official CCD red dialogue-box brand logo with ambient glow
 * - Pure static presentation — zero spinning or distracting animations
 */

import Image from "next/image";
import Link from "next/link";

type PropsType = {
  containerStyles: string;
};

const Badge = ({ containerStyles }: PropsType) => {
  return (
    <Link
      href="/"
      aria-label="Café Coffee Day Home"
      className={`relative ${containerStyles} flex items-center justify-center select-none cursor-pointer group hover:scale-[1.03] transition-transform duration-300 block`}
    >
      {/* 1. Ambient Background Dark Obsidian Glow */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-b from-[#241713]/90 via-[#150d0b]/95 to-[#0d0706] shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md" />

      {/* 2. Static Circular Heritage Typography & Concentric Gold Rings */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Top Arc (Clockwise over the top) */}
            <path id="badge-top-arc" d="M 27 100 A 73 73 0 0 1 173 100" fill="none" />
            {/* Bottom Arc (Curving under the bottom) */}
            <path id="badge-bottom-arc" d="M 173 100 A 73 73 0 0 1 27 100" fill="none" />
          </defs>

          {/* Outer Gold Delicate Dashed Track */}
          <circle 
            cx="100" 
            cy="100" 
            r="96" 
            stroke="#C7A17A" 
            strokeWidth="1" 
            strokeDasharray="4 3" 
            opacity="0.5"
          />

          {/* Solid Champagne Gold Outer Border */}
          <circle 
            cx="100" 
            cy="100" 
            r="91" 
            stroke="#C7A17A" 
            strokeWidth="1.2" 
            opacity="0.85"
          />

          {/* Inner Accent Ring Encapsulating the Text */}
          <circle 
            cx="100" 
            cy="100" 
            r="58" 
            stroke="#C7A17A" 
            strokeWidth="0.8" 
            strokeDasharray="2 3" 
            opacity="0.5"
          />

          {/* Top Curving Text */}
          <text 
            fontFamily="'Open Sans', Arial, sans-serif" 
            fontSize="10.5" 
            fontWeight="800" 
            fill="#FFFFFF" 
            letterSpacing="3.2"
          >
            <textPath href="#badge-top-arc" startOffset="50%" textAnchor="middle">
              CAFÉ COFFEE DAY
            </textPath>
          </text>
          
          {/* Bottom Curving Text */}
          <text 
            fontFamily="'Open Sans', Arial, sans-serif" 
            fontSize="7.5" 
            fontWeight="700" 
            fill="#E5C39E" 
            letterSpacing="2"
          >
            <textPath href="#badge-bottom-arc" startOffset="50%" textAnchor="middle">
              ★ ESTD 1996 • OVER COFFEE ★
            </textPath>
          </text>
        </svg>
      </div>

      {/* 3. Center Fixed Upright Authentic CCD Brand Emblem with Warm Halo */}
      <div className="relative w-[44%] h-[58%] z-10 drop-shadow-[0_10px_25px_rgba(229,25,39,0.4)] flex items-center justify-center pointer-events-none">
        <Image
          src="/assets/ccd-brand-logo.png"
          fill
          alt="Café Coffee Day Authentic Brand Logo"
          className="object-contain"
          priority
        />
      </div>

      {/* 4. Subtle Inner Vignette Border */}
      <div className="absolute inset-0 rounded-full pointer-events-none border border-[#c7a17a]/25" />
    </Link>
  );
};

export default Badge;