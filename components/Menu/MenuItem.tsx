/**
 * MenuItem Component – Café Coffee Day
 *
 * Individual menu item display component.
 * Displays appetizing food/coffee photography, product name, description,
 * verified category badge, and bold INR price.
 * Styled to match the deep espresso dark luxury theme.
 */

import Image from "next/image";
import React from "react";

type PropsType = {
  imgSrc: `/${string}`;
  name: string;
  description: string;
  price: number;
  tag?: string;
};

const MenuItem = ({ imgSrc, name, description, price, tag }: PropsType) => {
  return (
    <div className="flex items-center gap-4 sm:gap-5 group p-3 sm:p-3.5 rounded-2xl transition-all duration-300 hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06]">
      {/* Product Image Frame with CCD Accent Border & Glow */}
      <div className="relative w-[80px] h-[80px] sm:w-[92px] sm:h-[92px] rounded-2xl overflow-hidden shrink-0 bg-[#1a1210] shadow-[0_8px_24px_rgba(0,0,0,0.6)] border border-[#c7a17a]/30 group-hover:border-accent group-hover:shadow-[0_0_24px_rgba(199,161,122,0.3)] transition-all duration-300">
        <Image
          src={imgSrc}
          fill
          alt={name}
          sizes="(max-width: 640px) 80px, 92px"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
        />
        {/* Subtle inner dark gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Item Text Content */}
      <div className="flex flex-col flex-1 gap-1.5 min-w-0">
        {/* Name, Tag, Price Row */}
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <p className="uppercase font-primary font-semibold text-[19px] sm:text-[22px] leading-tight text-white group-hover:text-accent transition-colors duration-300 truncate sm:whitespace-normal">
              {name}
            </p>
            {tag && (
              <span className="self-start text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 shrink-0">
                {tag}
              </span>
            )}
          </div>

          {/* Price in INR */}
          <div className="shrink-0 text-right pl-2">
            <span className="font-primary font-bold text-[22px] sm:text-[26px] text-accent leading-none group-hover:text-white transition-colors duration-300">
              &#8377;{price}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#c4b6ab] text-xs sm:text-[13px] leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
