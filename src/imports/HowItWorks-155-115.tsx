import svgPaths from "./svg-dso15g0sxr";
import iconSvgPaths from "./svg-87i0okdis6";
import imgImage from "figma:asset/670732c8ba23d179ffcd97ca29f12c58870cba1c.png";
import imgHighlight from "figma:asset/07345c1666001022d333bb92436f5eb3e8092028.png";
import flexibleRefillsIcon from "figma:asset/5e281c9be42907b4466d8b5beb080b5a5035f69d.png";

export default function HowItWorks({ className }: { className?: string }) {
  return (
    <div className={className || "flex flex-col items-start relative w-[375px]"}>
      {/* Hero Image */}
      <div className="w-full h-[300px] overflow-hidden relative">
        <img
          alt="Prose hair care products lineup"
          className="absolute left-[-25px] top-[-211px] w-[730px] max-w-none object-cover pointer-events-none h-[512px]"
          src={imgImage}
        />
      </div>

      {/* Content Section */}
      <div className="bg-white w-full">
        <div className="flex flex-col gap-[47px] px-[24px] py-[64px] w-full">
          {/* How It Works */}
          <div className="flex flex-col gap-[24px] w-full max-w-[321px]">
            {/* Title */}
            <p className="font-['Saol_Text','Noto_Serif',serif] text-[#323429] tracking-[-0.96px] leading-[1.1] whitespace-nowrap">
              <span className="text-[32px]">The Prose</span>
              <span className="text-[20.64px] align-super">®</span>
              <span className="text-[32px]"> experience</span>
            </p>

            {/* Steps with dotted line */}
            <div className="flex gap-[12px]">
              {/* Vertical dotted line with dots */}
              <div className="flex flex-col items-center w-[6px] relative" style={{ height: 216 }}>
                {/* Dotted line */}
                <svg
                  className="absolute left-1/2 -translate-x-1/2 top-[3px] bottom-[3px]"
                  width="1"
                  height="210"
                  fill="none"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="210"
                    stroke="#4D523C"
                    strokeDasharray="0 4"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Top dot */}
                <svg className="absolute top-[1px] left-0" width="6" height="6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#F69371" />
                </svg>
                {/* Middle dot */}
                <svg className="absolute top-1/2 -translate-y-1/2 left-0" width="6" height="6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#F69371" />
                </svg>
                {/* Bottom dot */}
                <svg className="absolute bottom-[1px] left-0" width="6" height="6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#F69371" />
                </svg>
              </div>

              {/* Steps content */}
              <div className="flex flex-col gap-[31px] w-[303px]">
                <div className="flex flex-col gap-[5px] max-w-[256px]">
                  <p className="font-['Simplon Mono','JetBrains Mono',monospace] text-[#323429] text-[12px] tracking-[0.96px] uppercase leading-[1.2]">
                    trial your routine
                  </p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] text-[#4d523c] text-[14px] tracking-[0.28px] leading-[1.5]">
                    Get a feel for each truly personalized formula.
                  </p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="font-['Simplon Mono','JetBrains Mono',monospace] text-[#323429] text-[12px] tracking-[0.96px] uppercase leading-[1.2]">
                    fine tune your formulas
                  </p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] text-[#4d523c] text-[14px] tracking-[0.28px] leading-[1.5]">
                    {`Need a tweak like extra oil control or richer hydration? Use Review & Refine® to adjust your formulas for a perfect fit.`}
                  </p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="font-['Simplon Mono','JetBrains Mono',monospace] text-[#323429] text-[12px] tracking-[0.96px] uppercase leading-[1.2]">
                    keep seeing improved results
                  </p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] text-[#4d523c] text-[14px] tracking-[0.28px] leading-[1.5]">
                    Consistency is key. Build a routine that works on your schedule, sent straight to your door.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Derisker Section */}
          <div className="flex flex-col gap-[21px] items-center w-full max-w-[327px]">
            {/* Header */}
            <div className="flex flex-col items-center w-full">
              <p className="font-['Simplon Norm','Inter',sans-serif] text-[#161716] text-[16px] text-center tracking-[0.32px] leading-[1.5]">
                Your subscription starts with a
              </p>
              <div className="relative inline-flex items-center justify-center">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgHighlight}
                />
                <p className="font-['Simplon Norm','Inter',sans-serif] text-[#323429] text-[16px] text-center tracking-[0.32px] leading-[1.5] relative whitespace-nowrap">
                  60% off your first Haircare Routine
                </p>
              </div>
            </div>

            {/* Icons Grid */}
            <div className="flex gap-[24px] items-start justify-center w-full px-[24px]">
              {/* Column 1 */}
              <div className="flex flex-col gap-[24px] items-center">
                {/* Cancel anytime */}
                <div className="flex flex-col gap-[12px] items-center">
                  <div className="relative size-[34px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 34 34">
                      <path d={iconSvgPaths.p2c011100} fill="#ECFF92" />
                    </svg>
                    <div className="absolute left-[7px] top-[5.56px] size-[21px] flex items-center justify-center pt-[2.15px]">
                      <svg className="block w-[19.18px] h-[17.45px]" fill="none" viewBox="0 0 19.1804 17.4548">
                        <path d="M19.1804 16.9968H0" stroke="#323429" strokeWidth="0.91583" />
                        <path d={iconSvgPaths.p29b49600} stroke="#323429" strokeWidth="0.91583" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Simplon Norm','Inter',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                    Cancel anytime
                  </p>
                </div>
                {/* 15% off future orders */}
                <div className="flex flex-col gap-[12px] items-center">
                  <div className="relative size-[34px] flex items-center justify-center">
                    <svg className="absolute block size-full" fill="none" viewBox="0 0 34 34">
                      <path d={iconSvgPaths.p2c011100} fill="#ECFF92" />
                    </svg>
                    <p className="relative font-['Simplon Norm','Inter',sans-serif] text-[#323429] text-[12px] text-center leading-[0]">
                      <span className="leading-[6.174px]">1</span>
                      <span className="leading-[6.174px] tracking-[-0.1715px]">5</span>
                      <span className="leading-[6.174px]">%</span>
                    </p>
                  </div>
                  <p className="font-['Simplon Norm','Inter',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                    15% off future orders
                  </p>
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
                  <p className="font-['Simplon Norm','Inter',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                    Free shipping
                  </p>
                </div>
                {/* Flexible refills */}
                <div className="flex flex-col gap-[12px] items-center">
                  <div className="relative size-[34px]">
                    <img src={flexibleRefillsIcon} alt="" className="absolute block size-full object-contain" />
                  </div>
                  <p className="font-['Simplon Norm','Inter',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                    Flexible refills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}