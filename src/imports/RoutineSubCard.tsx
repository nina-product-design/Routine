import svgPaths from "./svg-g4omtyf4b6";
import imgProseCustomShampoo from "figma:asset/26794102a1b0acdbbfc3e928a0ea62a0390bf96f.png";
import imgProseIngredientFermentedRiceWater from "figma:asset/e2fc75eabda0289ba58737891c0aa548f4bc6408.png";
import imgProseIngredientOatKernelOil from "figma:asset/0a7dcab57280db1bd8a745ce2e1a41baf92eeea4.png";
import imgProseIngredientOatKernelOil1 from "figma:asset/0913a3956f96191cadd2899f0350dc1488eea659.png";
import imgProseIngredientOatKernelOil2 from "figma:asset/f76dbda92b80b8e170780be44fab645d4216f166.png";
type AddedToCartProps = {
  className?: string;
  type?: "Accessory" | "Buy Once" | "Every 4 weeks";
};

function AddedToCart({ className, type = "Every 4 weeks" }: AddedToCartProps) {
  const isAccessory = type === "Accessory";
  const isBuyOnce = type === "Buy Once";
  const isBuyOnceOrAccessory = ["Buy Once", "Accessory"].includes(type);
  const isEvery4Weeks = type === "Every 4 weeks";
  const isEvery4WeeksOrBuyOnce = ["Every 4 weeks", "Buy Once"].includes(type);
  return (
    <div className={className || "content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative rounded-[10px] w-[295px]"}>
      <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="top row">
        <div className={`content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative ${isAccessory ? "" : isBuyOnce ? "gap-[4px]" : 'font-["Simplon Norm","Inter",sans-serif] gap-[4px] leading-[1.5] not-italic text-[#4d523c]'}`} data-name="product info">
          <p className={`relative shrink-0 text-[12px] tracking-[0.24px] w-[192px] ${isBuyOnceOrAccessory ? 'font-["Simplon Norm","Inter",sans-serif] leading-[1.5] not-italic text-[#4d523c]' : ""}`}>{isBuyOnceOrAccessory ? "Buy Once" : "Every 4 weeks (recommended)"}</p>
          {isEvery4Weeks && <p className="min-w-full relative shrink-0 text-[10px] tracking-[0.2px] w-[min-content]">60% off first order</p>}
          {isBuyOnce && (
            <div className="bg-[#ecff92] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
              <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px] whitespace-nowrap">Get 60% when you subscribe</p>
            </div>
          )}
        </div>
        <div className={`content-stretch flex flex-col relative shrink-0 ${isAccessory ? "items-center justify-center" : "gap-[4px] items-end"}`} data-name="price">
          <div className={`content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0 ${isBuyOnceOrAccessory ? "" : "bg-[#ecff92]"}`} data-name="highlight">
            <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$14.00</p>
          </div>
          {isEvery4WeeksOrBuyOnce && <div className={`content-stretch flex items-center justify-center px-[4px] shrink-0 ${isBuyOnce ? "" : "relative"}`}>{isEvery4Weeks && <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon Norm','Inter',sans-serif] leading-[1.5] line-through not-italic relative shrink-0 text-[#6c6c6c] text-[10px] text-right tracking-[0.2px] whitespace-nowrap">$35.00</p>}</div>}
        </div>
        {isEvery4WeeksOrBuyOnce && (
          <>
            <div className="flex h-[36px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[36px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                      <line id="Line 32" stroke="var(--stroke-0, #E2D9C2)" x2="36" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-45">
                <div className="relative size-[7px]" data-name="/">
                  <div className="absolute inset-[-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                      <path d="M7.5 0.5V7.5H0.5" id="/" stroke="var(--stroke-0, #323429)" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[8px] px-[4px] top-[-8px]">
        <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[10px] whitespace-nowrap">Added to cart</p>
      </div>
    </div>
  );
}
type GoalPillProps = {
  className?: string;
  text?: string;
};

function GoalPill({ className, text = "Improved Hydration" }: GoalPillProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px]"} data-name="goal pill">
      <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function UiControlsCloseButton({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="UI controls/Close button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" data-figma-bg-blur-radius="4" fill="var(--fill-0, white)" id="Ellipse 287" opacity="0.5" r="16" />
        <defs>
          <clipPath id="bgblur_0_53_228_clip_path" transform="translate(4 4)">
            <circle cx="16" cy="16" r="16" />
          </clipPath>
        </defs>
      </svg>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Close button">
        <div className="absolute inset-[0_0.17%_0.17%_0]" data-name="Group">
          <div className="absolute inset-[-5.9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3935 13.3934">
              <g id="Group">
                <path d={svgPaths.pbfcab60} id="Line 4" stroke="var(--stroke-0, #323429)" strokeLinecap="square" />
                <path d={svgPaths.p39b19100} id="Line 4_2" stroke="var(--stroke-0, #323429)" strokeLinecap="square" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoutineSubCard({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[24px] items-center pb-[24px] relative rounded-[10px] w-[327px]"} data-name="RoutineSubCard">
      <div className="h-[220px] relative shrink-0 w-full" data-name="product image">
        <div className="absolute h-[220px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[327px]" data-name="Prose-custom-shampoo">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
            <img alt="" className="absolute h-[115.42%] left-[-19.56%] max-w-none top-[-5.44%] w-[139.73%]" src={imgProseCustomShampoo} />
          </div>
        </div>
        <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center left-[8px] px-[12px] py-[4px] rounded-[20px] top-[8px]" data-name="reccomended tag">
          <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] whitespace-nowrap">Recommended</p>
        </div>
        <UiControlsCloseButton className="absolute left-[287px] size-[32px] top-[8px]" />
      </div>
      <div className="relative shrink-0 w-full" data-name="contents">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#4d523c] w-full" data-name="Product info">
            <p className="font-['Saol Text','Noto Serif',serif] leading-[1.1] min-w-full relative shrink-0 text-[32px] tracking-[-0.96px] w-[min-content]">Maggie’s Shampoo</p>
            <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">A gentle, sulfate-free cleanser that maintains the natural balance of your scalp, without color washout.</p>
            <div className="content-stretch flex font-['Simplon Norm','Inter',sans-serif] gap-[24px] items-start leading-[1.5] relative shrink-0 text-[12px] tracking-[0.24px] whitespace-nowrap" data-name="size & link">
              <p className="relative shrink-0">8.5 fl oz</p>
              <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 underline">See full details</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Targeted goals">
            <p className="font-['Simplon Mono','JetBrains Mono',monospace] leading-[14.4px] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">YOUR TARGETED CONCERNS</p>
            <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-[271.133px]" data-name="goal pills">
              <GoalPill className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" />
              <GoalPill className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" text="Reduced Damage" />
              <GoalPill className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" text="Silky Softness" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[279px]" data-name="ingrident list">
            <p className="font-['Simplon Mono','JetBrains Mono',monospace] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.96px] uppercase w-[min-content]">your KEY INGREDIENTS</p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[279px]" data-name="ingridents">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Fermented-Rice-Water">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientFermentedRiceWater} />
                </div>
                <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
                  <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">Fermented Rice Water</p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Tamed Frizz</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Oat-Kernel-Oil">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientOatKernelOil} />
                </div>
                <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
                  <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">{`Oat Lipid & Sunflower Seed Extract`}</p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Color Care</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Oat-Kernel-Oil">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientOatKernelOil1} />
                </div>
                <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
                  <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">{`Licorice & Panthenol`}</p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Scalp Comfort</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Oat-Kernel-Oil">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientOatKernelOil2} />
                </div>
                <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
                  <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">Professional Polymer</p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Curl Definition</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#4d523c] text-[12px] w-full">
                <p className="font-['Simplon Mono','JetBrains Mono',monospace] leading-[1.2] relative shrink-0 tracking-[0.96px] uppercase w-full">YOUR PREFERENCES</p>
                <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 tracking-[0.24px] w-full">Fragrance free.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddedToCart className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative rounded-[10px] shrink-0 w-[295px]" />
    </div>
  );
}