import svgPaths from "../../imports/svg-t3nan2wscw";
import iconSvgPaths from "../../imports/svg-87i0okdis6";

export type SubscriptionInfoVariant = "startsWith" | "gettingPerks" | "subscribeToday";

interface SubscriptionInfoProps {
  variant?: SubscriptionInfoVariant;
}

// ─── Header per variant ───────────────────────────────────
function StartsWithHeader() {
  return (
    <div className="grid grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative">
      <div className="bg-[#ecff92] col-start-1 row-start-1 h-[12px] mix-blend-multiply self-end mb-[4px] ml-[37px] w-[253px]" />
      <div className="col-start-1 row-start-1 font-['Simplon_Norm',sans-serif] text-[16px] text-center tracking-[0.32px] text-[#161716] w-[327px]">
        <p className="mb-0 leading-[1.5]">Your subscription starts with a</p>
        <p className="leading-[1.5]">60% off your first Haircare Routine</p>
      </div>
    </div>
  );
}

function GettingPerksHeader() {
  return (
    <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-center tracking-[0.32px] w-[327px] leading-[1.5]">
      <span className="text-[#161716]">You're getting </span>
      <span
        className="text-[#323429]"
        style={{
          backgroundImage: "linear-gradient(to top, #ecff92 50%, transparent 50%)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          boxDecorationBreak: "clone",
          WebkitBoxDecorationBreak: "clone",
        }}
      >
        60% off your first order
      </span>
      <span className="text-[#323429]"> plus additional subscription perks.</span>
    </p>
  );
}

function SubscribeTodayHeader() {
  return (
    <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-center tracking-[0.32px] w-[327px] leading-[1.5]">
      <span className="text-[#161716]">Subscribe today to </span>
      <span
        className="text-[#323429]"
        style={{
          backgroundImage: "linear-gradient(to top, #ecff92 50%, transparent 50%)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          boxDecorationBreak: "clone",
          WebkitBoxDecorationBreak: "clone",
        }}
      >
        get 60% off your first order
      </span>
      <span className="text-[#323429]"> plus additional subscription perks.</span>
    </p>
  );
}

// ─── Shared Icon Grid ─────────────────────────────────────
import flexibleRefillsIcon from "figma:asset/5e281c9be42907b4466d8b5beb080b5a5035f69d.png";

function PropIcons() {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="flex gap-[24px] items-start justify-center px-[48px] w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-[24px] items-center">
            {/* Cancel anytime */}
            <div className="flex flex-col gap-[12px] items-center w-[91px]">
              <div className="relative size-[34px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 34 34">
                  <path d={iconSvgPaths.p2c011100} fill="#ECFF92" />
                </svg>
                <div className="absolute left-[7px] top-[5.56px] size-[21px] flex items-center justify-center pt-[2.15px]">
                  <svg className="block w-[19.18px] h-[17.45px]" fill="none" viewBox="0 0 19.1804 17.4548">
                    <path d="M19.1804 16.9968H0" stroke="#323429" strokeWidth="0.91583" />
                    <path d={iconSvgPaths.p29b49600} stroke="#323429" strokeWidth="0.91583" />
                  </svg>
                </div>
              </div>
              <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#161716] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">Cancel anytime</p>
            </div>

            {/* 15% off future orders */}
            <div className="flex flex-col gap-[12px] items-center">
              <div className="relative size-[34px] flex items-center justify-center">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 34 34">
                  <path d={iconSvgPaths.p2c011100} fill="#ECFF92" />
                </svg>
                <p className="relative font-['Simplon_Norm',sans-serif] text-[12px] text-[#323429] text-center leading-[0]">
                  <span className="leading-[6.174px]">1</span>
                  <span className="leading-[6.174px] tracking-[-0.1715px]">5</span>
                  <span className="leading-[6.174px]">%</span>
                </p>
              </div>
              <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-black text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">15% off future orders</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[24px] items-center">
            {/* Free shipping */}
            <div className="flex flex-col gap-[12px] items-center">
              <div className="relative size-[34px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 34 34">
                  <path d={iconSvgPaths.p2c011100} fill="#ECFF92" />
                </svg>
                <div className="absolute left-[3.5px] top-[5.43px] size-[24px] flex items-start justify-center pt-[5px]">
                  <svg className="block w-[18.3px] h-[14.24px]" fill="none" viewBox="0 0 18.2976 14.2423">
                    <path d={iconSvgPaths.p2232900} stroke="#323429" strokeWidth="0.8" />
                    <path d={iconSvgPaths.p51dce00} stroke="#323429" strokeWidth="0.8" />
                    <path d="M3.56981 6.94461H0" stroke="#323429" strokeWidth="0.8" />
                    <path d="M7.84186 9.89766H0" stroke="#323429" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>
              <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#161716] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">Free shipping</p>
            </div>

            {/* Flexible refills */}
            <div className="flex flex-col gap-[12px] items-center">
              <div className="relative size-[34px]">
                <img src={flexibleRefillsIcon} alt="" className="absolute block size-full object-contain" />
              </div>
              <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#161716] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">Flexible refills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function SubscriptionInfo({ variant = "startsWith" }: SubscriptionInfoProps) {
  return (
    <div className="py-[24px] border-b border-[#eaeaea]">
      <div className="flex flex-col gap-[16px] items-center w-full">
        {/* Header — varies per variant */}
        <div className="flex justify-center">
          {variant === "startsWith" && <StartsWithHeader />}
          {variant === "gettingPerks" && <GettingPerksHeader />}
          {variant === "subscribeToday" && <SubscribeTodayHeader />}
        </div>

        {/* Shared 2×2 icon grid */}
        <PropIcons />
      </div>
    </div>
  );
}