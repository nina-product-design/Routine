import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "./svg-5pzoc0foad";
import imgImageProseCustomShampooBottle from "figma:asset/a06595e028cff15a1e5b4ea40ed381ee3209aad7.png";
import imgImageProseCustomShampooWithBubbles from "figma:asset/8d72585e1723fae84bef6f3be35dd544e8f1ac77.png";
import imgImageShampooPouringFromBottle from "figma:asset/7bdf181b500b5d25f75bce0412317a767b09f343.png";
import imgImageWomanWashingHairWithShampoo from "figma:asset/e1e4b6e0319b64fd18e64f089041fbd4466397cb.png";
import imgImageProseCustomersWithTheirCustomShampoo from "figma:asset/52fd239fd0d052c4a2b6ef88eee1fdbb172e8c50.png";
import imgImage from "figma:asset/e2fc75eabda0289ba58737891c0aa548f4bc6408.png";
import imgImage1 from "figma:asset/0a7dcab57280db1bd8a745ce2e1a41baf92eeea4.png";
import imgImage2 from "figma:asset/0913a3956f96191cadd2899f0350dc1488eea659.png";
import imgImage3 from "figma:asset/f76dbda92b80b8e170780be44fab645d4216f166.png";
import imgVideo from "figma:asset/bb5348105ebfe8549a88c11e96efcfe693214b03.png";
import { imgVector } from "./svg-8wqzn";

export default function QuickView({ className }: { className?: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const carouselImages = [
    imgImageProseCustomShampooBottle,
    imgImageProseCustomShampooWithBubbles,
    imgImageShampooPouringFromBottle,
    imgImageWomanWashingHairWithShampoo,
    imgImageProseCustomersWithTheirCustomShampoo,
  ];

  const totalSlides = carouselImages.length;

  const handleDragEnd = (_event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    // Determine if swipe was significant enough
    if (Math.abs(velocity) > 500 || Math.abs(offset) > 50) {
      if (offset > 0 && currentSlide > 0) {
        // Swiped right, go to previous slide
        setCurrentSlide(currentSlide - 1);
      } else if (offset < 0 && currentSlide < totalSlides - 1) {
        // Swiped left, go to next slide
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  // Handle trackpad/wheel swipes
  const handleWheel = (e: React.WheelEvent) => {
    // Only handle horizontal swipes (trackpad gestures)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 300);

      if (e.deltaX > 0 && currentSlide < totalSlides - 1) {
        // Swiped left (next slide)
        setCurrentSlide(currentSlide + 1);
      } else if (e.deltaX < 0 && currentSlide > 0) {
        // Swiped right (previous slide)
        setCurrentSlide(currentSlide - 1);
      }
    }
  };
  return (
    <div className={className || "bg-white content-stretch flex gap-[10px] items-start justify-center relative"} data-name="Quick View">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="contents">
        <div className="h-[447px] relative shrink-0 w-[360px]" data-name="PDP carosuel">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start py-[24px] relative size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[360px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch overflow-hidden relative rounded-[inherit] size-full touch-pan-y">
                <motion.div
                  className="flex h-full cursor-grab active:cursor-grabbing touch-none"
                  animate={{ x: `${-currentSlide * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragElastic={0.2}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  onWheel={handleWheel}
                >
                  {carouselImages.map((img, idx) => (
                    <div key={idx} className="h-[381px] relative shrink-0 w-[360px] flex items-center justify-center" data-name="Container">
                      <div className="absolute content-stretch flex flex-col h-[381px] items-start left-[27.5px] overflow-clip rounded-[10px] top-0 w-[305px] pointer-events-none" data-name="Container">
                        <div className="h-[381px] relative rounded-[10px] shrink-0 w-full">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="h-[6px] relative shrink-0 w-[360px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative size-full">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className="relative shrink-0 size-[6px]"
                    data-name="Button"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="h-[6px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                          <path d={svgPaths.p969ae00} fill={idx === currentSlide ? "#323429" : "#A6A6A6"} id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1391.414px] relative shrink-0 w-[360px]" data-name="About product">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
            <div className="h-[1367.781px] relative shrink-0 w-[360px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start pl-[24px] relative size-full">
                <div className="h-[367.195px] relative shrink-0 w-[312px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                        <div className="h-[144.195px] relative shrink-0 w-[312px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[208.93px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
                                    <div className="h-[35.195px] relative shrink-0 w-[208.93px]" data-name="Paragraph">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[35.2px] left-0 not-italic text-[#4d523c] text-[32px] top-0 tracking-[-0.96px] whitespace-nowrap">Custom Shampoo</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[22px] relative shrink-0 w-[205.484px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
                                    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Paragraph">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d523c] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                          8.5 fl oz 250mL
                                        </p>
                                      </div>
                                    </div>
                                    <div className="h-[22px] relative shrink-0 w-[93.656px]" data-name="Paragraph">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="-translate-x-1/2 absolute decoration-solid font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22px] left-[47px] text-[#4d523c] text-[14px] text-center top-[-0.5px] tracking-[0.5px] underline whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                          Read Reviews
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[63px] relative shrink-0 w-[312px]" data-name="Paragraph">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d523c] text-[14px] top-0 tracking-[0.28px] w-[302px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                  A gentle, clarifying shampoo, personalized to meet your unique hair and scalp cleansing needs.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="h-[126px] relative shrink-0 w-full" data-name="Paragraph">
                                  <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d523c] text-[14px] top-0 tracking-[0.28px] w-[304px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`From rebalancing roots to gently hydrating lengths, Prose Custom Shampoo is specifically formulated to target multiple concerns, including oily hair, dry scalps, and more. Used consistently, it's proven to increase hair strength and reduce breakage.* `}</p>
                                </div>
                                <div className="h-[57px] relative shrink-0 w-full" data-name="Paragraph">
                                  <div className="absolute h-[18.5px] left-0 top-px w-0" data-name="Text" />
                                  <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6c6c6c] text-[12px] top-[22px] tracking-[0.24px] w-[300px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                    *Instrumental efficacy test when used with Prose Custom Conditioner vs. non-conditioning shampoo.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="h-0 shrink-0 w-[312px]" data-name="Container" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                        <div className="h-[108.594px] relative shrink-0 w-[312px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                            <div className="h-[33.594px] relative shrink-0 w-[305px]" data-name="Paragraph">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['DM_Mono:Medium',sans-serif] leading-[16.8px] left-0 not-italic text-[#323429] text-[14px] top-0 tracking-[1.12px] uppercase w-[296px]">Naturally powerful ingredients, picked just for you</p>
                              </div>
                            </div>
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Paragraph">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d523c] text-[14px] top-0 tracking-[0.28px] w-[309px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                  Your Custom Shampoo is made to order using a unique blend of only the clean, proven-effective ingredients your hair needs.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[48.398px] relative shrink-0 w-[312px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                            <div className="h-[14.398px] relative shrink-0 w-[312px]" data-name="Paragraph">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[14.4px] left-0 not-italic text-[#4d523c] text-[12px] top-0 tracking-[0.96px] uppercase whitespace-nowrap">YOUR TARGETED CONCERNS</p>
                              </div>
                            </div>
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[302.078px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div className="absolute h-[26px] left-0 rounded-[20px] top-0 w-[105.727px]" data-name="Container">
                                  <div className="absolute h-[18px] left-[12px] top-[4px] w-[81.727px]" data-name="Paragraph">
                                    <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#323429] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                      Very Sensitive
                                    </p>
                                  </div>
                                  <div className="absolute border border-[#e2d9c2] border-solid h-[26px] left-0 rounded-[20px] top-0 w-[105.727px]" data-name="Container" />
                                </div>
                                <div className="absolute h-[26px] left-[113.73px] rounded-[20px] top-0 w-[73.656px]" data-name="Container">
                                  <div className="absolute h-[18px] left-[12px] top-[4px] w-[49.656px]" data-name="Paragraph">
                                    <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#323429] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                      Very Dry
                                    </p>
                                  </div>
                                  <div className="absolute border border-[#e2d9c2] border-solid h-[26px] left-0 rounded-[20px] top-0 w-[73.656px]" data-name="Container" />
                                </div>
                                <div className="absolute h-[26px] left-[195.38px] rounded-[20px] top-0 w-[106.695px]" data-name="Container">
                                  <div className="absolute h-[18px] left-[12px] top-[4px] w-[82.695px]" data-name="Paragraph">
                                    <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#323429] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                      Some Damage
                                    </p>
                                  </div>
                                  <div className="absolute border border-[#e2d9c2] border-solid h-[26px] left-0 rounded-[20px] top-0 w-[106.695px]" data-name="Container" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                            <div className="h-[14.398px] relative shrink-0 w-[163.203px]" data-name="Paragraph">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[14.4px] left-0 not-italic text-[#323429] text-[12px] top-0 tracking-[0.96px] uppercase whitespace-nowrap">your key ingredients</p>
                              </div>
                            </div>
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                                    <div className="bg-[#e2d9c2] h-[0.5px] shrink-0 w-[312px]" data-name="Container" />
                                    <div className="h-[80px] relative shrink-0 w-[312px]" data-name="Container">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                                        <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Image">
                                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                                        </div>
                                        <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px relative" data-name="Container">
                                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                            <div className="h-[18px] relative shrink-0 w-[126.227px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#323429] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                                  Fermented Rice Water
                                                </p>
                                              </div>
                                            </div>
                                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[240px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#4d523c] text-[12px] top-0 tracking-[0.24px] w-[218px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                                  Smooths and strengthens hair to help control frizz. Rich in amino acids.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-[#e2d9c2] h-[0.5px] shrink-0 w-[312px]" data-name="Container" />
                                    <div className="h-[80px] relative shrink-0 w-[312px]" data-name="Container">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                                        <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Image">
                                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                                        </div>
                                        <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px relative" data-name="Container">
                                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                            <div className="h-[18px] relative shrink-0 w-[198.133px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#323429] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Oat Lipid & Sunflower Seed Extract`}</p>
                                              </div>
                                            </div>
                                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[240px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#4d523c] text-[12px] top-0 tracking-[0.24px] w-[233px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                                  Helps to prevent color-fading by sealing the cuticle.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-[#e2d9c2] h-[0.5px] shrink-0 w-[312px]" data-name="Container" />
                                    <div className="h-[80px] relative shrink-0 w-[312px]" data-name="Container">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                                        <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Image">
                                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                                        </div>
                                        <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px relative" data-name="Container">
                                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                            <div className="h-[18px] relative shrink-0 w-[116.758px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#323429] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Licorice & Panthenol`}</p>
                                              </div>
                                            </div>
                                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[240px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#4d523c] text-[12px] top-0 tracking-[0.24px] w-[196px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`Helps rebalance the scalp for less sensitivity & more relief.`}</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[80px] relative shrink-0 w-[312px]" data-name="Container">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                                        <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Image">
                                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                                        </div>
                                        <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px relative" data-name="Container">
                                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                            <div className="h-[18px] relative shrink-0 w-[117.727px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#4d523c] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                                  Professional Polymer
                                                </p>
                                              </div>
                                            </div>
                                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[240px]" data-name="Paragraph">
                                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#4d523c] text-[12px] top-0 tracking-[0.24px] w-[229px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                                  Helps define curls and increase bounce so hair stays frizz-free longer.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-[#e2d9c2] h-[0.5px] shrink-0 w-[312px]" data-name="Container" />
                                  </div>
                                </div>
                                <div className="h-[58.898px] relative shrink-0 w-[312px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start py-[8px] relative size-full">
                                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                                        <div className="h-[14.398px] relative shrink-0 w-[179.523px]" data-name="Paragraph">
                                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                            <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[14.4px] left-0 not-italic text-[#323429] text-[12px] top-0 tracking-[0.96px] uppercase whitespace-nowrap">additional ingredients</p>
                                          </div>
                                        </div>
                                        <div className="h-[7px] relative shrink-0 w-[12px]" data-name="Icon">
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
                                      </div>
                                    </div>
                                    <div className="bg-[#e2d9c2] h-[0.5px] shrink-0 w-[312px]" data-name="Container" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[148.297px] relative shrink-0 w-[312px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                        <div className="h-[16.797px] relative shrink-0 w-[228.484px]" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#323429] text-[14px] top-0 tracking-[1.12px] uppercase whitespace-nowrap">your shampoo preferences</p>
                          </div>
                        </div>
                        <div className="bg-[#e2d9c2] h-[0.5px] shrink-0 w-[312px]" data-name="Container" />
                        <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[120.031px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                                <div className="h-[50px] relative shrink-0 w-[40px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[5px] relative size-full">
                                    <div className="flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Container">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                        <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                          <div className="absolute contents inset-[1.25%]" data-name="Group">
                                            <div className="absolute inset-[1.25%]" data-name="Vector">
                                              <div className="absolute inset-[-1.28%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                                  <path d={svgPaths.p38276000} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute inset-[15.15%_13.64%_15.15%_16.67%]" data-name="Vector">
                                              <div className="absolute inset-[-1.27%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4394 21.4394">
                                                  <path d={svgPaths.peb36e60} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute contents inset-[24.79%_33.86%_28.67%_33.85%]" data-name="Group">
                                              <div className="absolute inset-[40.57%_33.86%_28.67%_33.85%]" data-name="Vector">
                                                <div className="absolute inset-[-4.06%_-3.87%]">
                                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4346 9.9785">
                                                    <path d={svgPaths.pe318200} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="absolute inset-[24.79%_44.8%_59.56%_42.59%]" data-name="Vector">
                                                <div className="absolute inset-[-7.99%_-9.91%_0_0]">
                                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1577 5.0707">
                                                    <path d={svgPaths.pcb43780} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="absolute contents inset-[22.59%_56.53%_65.67%_25.65%]" data-name="Group">
                                              <div className="absolute contents inset-[22.59%_56.53%_65.67%_25.65%]" data-name="Mask group">
                                                <div className="absolute inset-[20.09%_51.43%_63.17%_23.15%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.75px_0.75px] mask-size-[5.345px_3.521px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
                                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.62509 5.02146">
                                                    <path d={svgPaths.p2f86e000} fill="var(--fill-0, #6C6C6C)" id="Vector" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="absolute inset-[24.78%_39.12%_73.05%_56.97%]" data-name="Vector">
                                              <div className="absolute inset-[-50.26%_-15.51%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.53814 1.30779">
                                                  <path d={svgPaths.p34ce5d00} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute inset-[30.86%_39.13%_66.97%_56.96%]" data-name="Vector">
                                              <div className="absolute inset-[-50.26%_-15.51%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.53814 1.3078">
                                                  <path d={svgPaths.p18ed9000} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute inset-[28.83%_38.67%_71.08%_56.99%]" data-name="Vector">
                                              <div className="absolute inset-[-1432.14%_-0.58%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.31935 0.776028">
                                                  <path d={svgPaths.p245c1a00} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Paragraph">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                    <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[15px] left-0 text-[#323429] text-[10px] top-0 tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                      Fragrance Free
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[45px] relative shrink-0 w-[312px]" data-name="Paragraph">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[15px] left-0 text-[#4d523c] text-[10px] top-0 tracking-[0.2px] w-[302px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                  You may notice a light scent due to your custom ingredient blend. Some of our ingredients have naturally occurring scents that are not removed.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="How to use product">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
            <div className="aspect-[974/946] relative shrink-0 w-full" data-name="'video'">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideo} />
            </div>
            <div className="bg-[#4d523c] content-stretch flex flex-col gap-[24px] h-[827.586px] items-center py-[64px] relative shrink-0 w-full" data-name="Container">
              <div className="h-[192.789px] relative shrink-0 w-[360px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[24px] relative size-full">
                  <div className="h-[14.398px] relative shrink-0 w-[81.602px]" data-name="Paragraph">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[14.4px] left-0 not-italic text-[12px] text-white top-0 tracking-[0.96px] uppercase whitespace-nowrap">How to use</p>
                    </div>
                  </div>
                  <div className="h-[70.391px] relative shrink-0 w-[312px]" data-name="Paragraph">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[35.2px] left-0 not-italic text-[32px] text-white top-0 tracking-[-0.96px] w-[276px]">A shampoo as unique as you are</p>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Paragraph">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] w-[311px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                        Each Custom Shampoo includes directions tailored to your specific hair, goals, and concerns — from oily roots to dry ends. Below is just a guide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(226,217,194,0.3)] h-[0.5px] shrink-0 w-[327px]" data-name="Container" />
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-[360px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pl-[24px] relative size-full">
                  <div className="h-[68.398px] relative shrink-0 w-[312px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                      <div className="h-[14.398px] relative shrink-0 w-[48.961px]" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[14.4px] left-0 not-italic text-[12px] text-white top-0 tracking-[0.96px] uppercase whitespace-nowrap">amount</p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] w-[304px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                            As needed, based on hair length, texture, and density.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(226,217,194,0.3)] h-[0.5px] shrink-0 w-[327px]" data-name="Container" />
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                      <div className="h-[14.398px] relative shrink-0 w-[81.602px]" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[14.4px] left-0 not-italic text-[12px] text-white top-0 tracking-[0.96px] uppercase whitespace-nowrap">directions</p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                          <div className="h-[63px] relative shrink-0 w-[312px]" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <div className="absolute h-[63px] left-[37px] top-0 w-[275px]" data-name="Paragraph">
                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] w-[237px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                  Begin with damp hair and dispense desired amount of shampoo onto fingertips.
                                </p>
                              </div>
                              <div className="absolute left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container">
                                <div className="absolute h-[21px] left-[8.17px] top-0 w-[4.648px]" data-name="Paragraph">
                                  <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                    1
                                  </p>
                                </div>
                                <div className="absolute border border-[#b9c2a6] border-solid left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <div className="h-[63px] relative shrink-0 w-[312px]" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <div className="absolute h-[63px] left-[37px] top-0 w-[275px]" data-name="Paragraph">
                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] w-[262px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                  Rub together, adding small amounts of water and gently massage into the hair and scalp.
                                </p>
                              </div>
                              <div className="absolute left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container">
                                <div className="absolute h-[21px] left-[6.32px] top-0 w-[8.352px]" data-name="Paragraph">
                                  <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                    2
                                  </p>
                                </div>
                                <div className="absolute border border-[#b9c2a6] border-solid left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <div className="h-[42px] relative shrink-0 w-[312px]" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <div className="absolute h-[42px] left-[37px] top-0 w-[275px]" data-name="Paragraph">
                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] w-[234px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                  Focus on the roots to create a rich lather.
                                </p>
                              </div>
                              <div className="absolute left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container">
                                <div className="absolute h-[21px] left-[6.22px] top-0 w-[8.555px]" data-name="Paragraph">
                                  <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                    3
                                  </p>
                                </div>
                                <div className="absolute border border-[#b9c2a6] border-solid left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative w-[312px]" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <div className="absolute h-[63px] left-[37px] top-0 w-[275px]" data-name="Paragraph">
                                <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] w-[269px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                  Rinse thoroughly and repeat if desired. Follow with your Custom Conditioner as needed.
                                </p>
                              </div>
                              <div className="absolute left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container">
                                <div className="absolute h-[21px] left-[6.11px] top-0 w-[8.781px]" data-name="Paragraph">
                                  <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                                    4
                                  </p>
                                </div>
                                <div className="absolute border border-[#b9c2a6] border-solid left-0 rounded-[10.5px] size-[21px] top-0" data-name="Container" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[308px] rounded-[16777200px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] size-[36px] top-[16px]" data-name="close button">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g clipPath="url(#clip0_38_4331)" id="Icon">
              <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #323429)" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M13 1L1 13" id="Vector_2" stroke="var(--stroke-0, #323429)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
            <defs>
              <clipPath id="clip0_38_4331">
                <rect fill="white" height="14" width="14" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}