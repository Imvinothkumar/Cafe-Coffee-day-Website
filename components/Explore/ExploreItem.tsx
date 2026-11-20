/**
 * ExploreItem Component
 * 
 * Individual coffee type item in the Explore section.
 * Displays icon, title, and description with optimal contrast
 * on soft brown background.
 */

import Image from "next/image";

type PropsType = {
  itemCSS?: string;
  icon: `${string}.svg`;
  text: {
    title: string;
    description: string;
  };
};

const ExploreItem = ({ itemCSS, icon, text }: PropsType) => {
  return (
    <div className="relative flex items-start">
      <div className={`xl:max-w-[420px] xl:flex xl:flex-col ${itemCSS}`}>
        {/* Icon */}
        <div className="mb-5 flex justify-center items-center p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-inner backdrop-blur-sm">
          <Image src={`/assets/explore/icons/${icon}`} width={52} height={52} alt="" priority />
        </div>
        {/* Title */}
        <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-3 text-white">
          {text.title}
        </h3>
        {/* Description */}
        <p className="max-w-[400px] text-[#d6c7b8] text-sm xl:text-base leading-relaxed">
          {text.description}
        </p>
      </div>
    </div>
  );
};

export default ExploreItem;
