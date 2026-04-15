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
            <p className="font-['Saol_Text','Noto_Serif',serif] font-light text-[#323429] text-[32px] tracking-[-0.96px] leading-[1.1] whitespace-nowrap">
              How membership works
            </p>

            {/* Steps with dotted line */}
            <div className="flex gap-[12px] relative">
              {/* Steps content with inline dots */}
              <div className="flex flex-col gap-[31px] w-full">
                <div className="flex gap-[12px]">
                  <div className="relative pt-[4px] shrink-0 w-[6px]">
                    <svg width="6" height="6" fill="none"><circle cx="3" cy="3" r="3" fill="#F69371" /></svg>
                    {/* Line from this dot down to next step's dot */}
                    <svg className="absolute left-[2.5px] top-[10px] w-[1px]" style={{ height: "calc(100% + 31px)" }} fill="none" preserveAspectRatio="none">
                      <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#4D523C" strokeDasharray="0 4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <p className="font-['Simplon Mono',monospace] text-[#323429] text-[12px] tracking-[0.96px] uppercase leading-[1.2]">
                      START WITH A TRIAL
                    </p>
                    <p className="font-['Simplon Norm',sans-serif] text-[#4d523c] text-[14px] tracking-[0.28px] leading-[1.5]">
                      Subscribe today to try your custom haircare with an exclusive welcome offer. Update your routine anytime.
                    </p>
                  </div>
                </div>
                <div className="flex gap-[12px]">
                  <div className="relative pt-[4px] shrink-0 w-[6px]">
                    <svg width="6" height="6" fill="none"><circle cx="3" cy="3" r="3" fill="#F69371" /></svg>
                    {/* Line from this dot down to next step's dot */}
                    <svg className="absolute left-[2.5px] top-[10px] w-[1px]" style={{ height: "calc(100% + 31px)" }} fill="none" preserveAspectRatio="none">
                      <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#4D523C" strokeDasharray="0 4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <p className="font-['Simplon Mono',monospace] text-[#323429] text-[12px] tracking-[0.96px] uppercase leading-[1.2]">
                      YOUR FORMULAS EVOLVE
                    </p>
                    <p className="font-['Simplon Norm',sans-serif] text-[#4d523c] text-[14px] tracking-[0.28px] leading-[1.5]">
                      {`Need more oil control? Richer hydration? As your hair changes, adjust your formulas with Review & Refine® — always free and easy for members.`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[12px]">
                  <div className="pt-[4px] shrink-0 w-[6px]">
                    <svg width="6" height="6" fill="none"><circle cx="3" cy="3" r="3" fill="#F69371" /></svg>
                    {/* No line after last dot */}
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <p className="font-['Simplon Mono',monospace] text-[#323429] text-[12px] tracking-[0.96px] uppercase leading-[1.2]">
                      RESULTS THAT LAST
                    </p>
                    <p className="font-['Simplon Norm',sans-serif] text-[#4d523c] text-[14px] tracking-[0.28px] leading-[1.5]">
                      Your formulas keep getting better. Enjoy flexible refills, 15% member savings, and free shipping on every future order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Derisker Section */}
          <div className="flex flex-col gap-[21px] items-center w-full max-w-[327px]">
            {/* Header */}
            <p className="font-['Simplon Norm',sans-serif] text-[#161716] text-[16px] text-center tracking-[0.32px] leading-[1.5]">
              You're getting{" "}
              <span className="relative inline-flex items-center justify-center">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgHighlight}
                />
                <span className="relative text-[#323429]">60% off your first order</span>
              </span>
              {" "}— plus exclusive member perks.
            </p>

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
                  <p className="font-['Simplon Norm',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                    Cancel anytime
                  </p>
                </div>
                {/* 15% off every order */}
                <div className="flex flex-col gap-[12px] items-center">
                  <div className="relative size-[34px] flex items-center justify-center">
                    <svg className="absolute block size-full" fill="none" viewBox="0 0 34 34">
                      <path d={iconSvgPaths.p2c011100} fill="#ECFF92" />
                    </svg>
                    <p className="relative font-['Simplon Norm',sans-serif] text-[#323429] text-[12px] text-center leading-[0]">
                      <span className="leading-[6.174px]">1</span>
                      <span className="leading-[6.174px] tracking-[-0.1715px]">5</span>
                      <span className="leading-[6.174px]">%</span>
                    </p>
                  </div>
                  <p className="font-['Simplon Norm',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                    15% off every order
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
                  <p className="font-['Simplon Norm',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                    Free shipping
                  </p>
                </div>
                {/* Flexible refills */}
                <div className="flex flex-col gap-[12px] items-center">
                  <div className="relative size-[34px]">
                    <img src={flexibleRefillsIcon} alt="" className="absolute block size-full object-contain" />
                  </div>
                  <p className="font-['Simplon Norm',sans-serif] text-[#161716] text-[12px] text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
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