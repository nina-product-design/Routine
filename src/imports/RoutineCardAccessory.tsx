import svgPaths from "./svg-ppq6coy9xw";
import imgHairTowel1 from "figma:asset/2c1decd3d47ad04cea3a3fbc7e11e56f0c2e920a.png";
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
        <div className={`content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative ${isAccessory ? "" : isBuyOnce ? "gap-[4px]" : 'font-["Simplon_Norm:Regular",sans-serif] gap-[4px] leading-[1.5] not-italic text-[#4d523c]'}`} data-name="product info">
          <p className={`relative shrink-0 text-[12px] tracking-[0.24px] w-[192px] ${isBuyOnceOrAccessory ? 'font-["Simplon_Norm:Regular",sans-serif] leading-[1.5] not-italic text-[#4d523c]' : ""}`}>{isBuyOnceOrAccessory ? "Buy Once" : "Every 4 weeks (recommended)"}</p>
          {isEvery4Weeks && <p className="min-w-full relative shrink-0 text-[10px] tracking-[0.2px] w-[min-content]">60% off first order</p>}
          {isBuyOnce && (
            <div className="bg-[#ecff92] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
              <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px] whitespace-nowrap">Get 60% when you subscribe</p>
            </div>
          )}
        </div>
        <div className={`content-stretch flex flex-col relative shrink-0 ${isAccessory ? "items-center justify-center" : "gap-[4px] items-end"}`} data-name="price">
          <div className={`content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0 ${isBuyOnceOrAccessory ? "" : "bg-[#ecff92]"}`} data-name="highlight">
            <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$14.00</p>
          </div>
          {isEvery4WeeksOrBuyOnce && <div className={`content-stretch flex items-center justify-center px-[4px] shrink-0 ${isBuyOnce ? "" : "relative"}`}>{isEvery4Weeks && <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] line-through not-italic relative shrink-0 text-[#6c6c6c] text-[10px] text-right tracking-[0.2px] whitespace-nowrap">$35.00</p>}</div>}
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

function UiControlsCloseButton({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="UI controls/Close button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" data-figma-bg-blur-radius="4" fill="var(--fill-0, white)" id="Ellipse 287" opacity="0.5" r="16" />
        <defs>
          <clipPath id="bgblur_0_53_234_clip_path" transform="translate(4 4)">
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

export default function RoutineCardAccessory({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[24px] items-center pb-[24px] relative rounded-[10px] w-[327px]"} data-name="RoutineCardAccessory">
      <div className="h-[220px] relative shrink-0 w-full" data-name="product image">
        <div className="absolute h-[220px] left-0 top-0 w-[327px]" data-name="Hair-Towel 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHairTowel1} />
        </div>
        <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center left-[8px] px-[12px] py-[4px] rounded-[20px] top-[8px]" data-name="reccomended tag">
          <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] whitespace-nowrap">Recommended</p>
        </div>
        <UiControlsCloseButton className="absolute left-[287px] size-[32px] top-[8px]" />
      </div>
      <div className="relative shrink-0 w-full" data-name="contents">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Product info">
            <p className="font-['Saol_Text:Light',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[#4d523c] text-[32px] tracking-[-0.96px] w-[min-content]">Maggie’s Hair Towel</p>
            <div className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
              <p className="mb-0">Fast-drying hair towel for reducing unwanted frizz and preserving hair’s natural texture. Made from 100% recycled microfiber derived from plastic bottles.</p>
              <p className="mb-0">&nbsp;</p>
              <p>Designed for all textures and lengths</p>
            </div>
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="size & link">
              <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] whitespace-nowrap">23” x 37” in</p>
            </div>
          </div>
        </div>
      </div>
      <AddedToCart className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative rounded-[10px] shrink-0 w-[295px]" type="Accessory" />
    </div>
  );
}