import { useState } from "react";
import svgPaths from "./svg-lql3dsfqfp";
import type { Ingredient } from "../app/components/routine-product-card";

// Import additional ingredients for shampoo
import GreenTea from "figma:asset/b2af4fefac86866bda16ebdf0676ec5d4518fc12.png";
import Glycerin from "figma:asset/27b5268221fd2968643fe30976ccd671204b1dc8.png";
import Sandalwood from "figma:asset/6ac32400a5dfce61b9c1775858e0d709cf5a4dd2.png";
import FermentedRiceWater from "figma:asset/e2fc75eabda0289ba58737891c0aa548f4bc6408.png";

const additionalIngredients: Ingredient[] = [
  {
    name: "Rosemary Extract",
    benefit: "Root Revival",
    image: GreenTea,
  },
  {
    name: "Glycerin",
    benefit: "Moisture Boost",
    image: Glycerin,
  },
  {
    name: "Jujube Bark Extract",
    benefit: "Scalp Health",
    image: Sandalwood,
  },
  {
    name: "Fermented Rice Water",
    benefit: "Tamed Frizz",
    image: FermentedRiceWater,
  },
];

function Icon({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`h-[7px] relative shrink-0 w-[12px] transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      data-name="Icon"
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
        <g clipPath="url(#clip0_38_4335)" id="Icon">
          <path d={svgPaths.p16d13c00} id="Vector" stroke="var(--stroke-0, #323429)" strokeWidth="0.989006" />
        </g>
        <defs>
          <clipPath id="clip0_38_4335">
            <rect fill="white" height="7" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function AdditionalIngridents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative size-full mx-[0px] mt-[0px] mb-[48px]" data-name="additional ingridents">
      <div className="flex flex-col relative w-full" data-name="accordion">
        {/* Accordion Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full text-left"
        >
          <p className="font-['JetBrains Mono',monospace] font-normal leading-[14.4px] tracking-[0.96px] uppercase text-[#323429] text-[14px]">
            Additional ingredients
          </p>
          <Icon isOpen={isOpen} />
        </button>
        
        {/* Divider */}
        <div className="bg-[#e2d9c2] h-[0.5px] relative shrink-0 w-full mt-[16px]" data-name="divider">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
        </div>

        {/* Accordion Content */}
        {isOpen && (
          <div className="flex flex-col mt-[16px]">
            {additionalIngredients.map((ingredient, idx) => (
              <div key={idx}>
                <div className="flex gap-[8px] items-center py-[16px]">
                  <div className="size-[64px] shrink-0">
                    <img
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col text-[#4d523c] text-[12px] leading-[1.5]">
                    <p className="font-['Inter',sans-serif] font-medium">
                      {ingredient.name}
                    </p>
                    <p className="font-['Inter',sans-serif] tracking-[0.24px]">
                      {ingredient.benefit}
                    </p>
                  </div>
                </div>
                {idx < additionalIngredients.length - 1 && (
                  <div className="bg-[#e2d9c2] h-[0.5px] w-full" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}