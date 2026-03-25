export default function FreqencySelector() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative size-full" data-name="Freqency Selector">
      <button className="cursor-pointer mb-[-1px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full z-[2]" data-name="Freqency Selector">
        <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative w-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="top row">
              <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c] text-left" data-name="product info">
                <p className="relative shrink-0 text-[12px] tracking-[0.24px] w-[192px]">Every 4 weeks (recommended)</p>
                <p className="min-w-full relative shrink-0 text-[10px] tracking-[0.2px] w-[min-content]">60% off first order</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] not-italic relative shrink-0 text-right whitespace-nowrap" data-name="price">
                <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px]" data-name="highlight">
                  <p className="relative shrink-0">$</p>
                  <p className="relative shrink-0">14.00</p>
                </div>
                <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">35.00</p>
                </div>
              </div>
              <div className="flex h-[36px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "184", "--transform-inner-height": "16" } as React.CSSProperties}>
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
              <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" style={{ "--transform-inner-width": "184", "--transform-inner-height": "16" } as React.CSSProperties}>
                <div className="-rotate-135 flex-none">
                  <div className="relative size-[7px]" data-name="/">
                    <div className="absolute inset-[-7.14%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <path d="M7.5 0.5V7.5H0.5" id="/" stroke="var(--stroke-0, #323429)" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex items-center justify-center left-[8px] px-[4px] top-[-8px]">
              <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[10px] text-left whitespace-nowrap">Added to cart</p>
            </div>
          </div>
        </div>
      </button>
      <div className="content-stretch flex flex-col items-start mb-[-1px] overflow-clip pb-px relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full z-[1]" data-name="Dropdown list">
        <div className="bg-white mb-[-1px] relative shrink-0 w-full" data-name="Dropdown row">
          <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="radio button small">
                <div className="absolute inset-[-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                    <g id="Group">
                      <circle cx="10.5" cy="10.5" fill="var(--fill-0, white)" id="Oval" r="10" stroke="var(--stroke-0, #323429)" />
                      <circle cx="10.5" cy="10.5" fill="var(--fill-0, #4D523C)" id="Oval_2" r="7.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
                <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-full">Every 4 weeks [recommended]</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] not-italic relative shrink-0 text-right whitespace-nowrap" data-name="price">
                <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px]" data-name="highlight">
                  <p className="relative shrink-0">$</p>
                  <p className="relative shrink-0">14.00</p>
                </div>
                <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">35.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mb-[-1px] relative shrink-0 w-full" data-name="Dropdown row">
          <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="radio button small">
                <div className="absolute inset-[-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                    <g id="Group">
                      <circle cx="10.5" cy="10.5" fill="var(--fill-0, white)" id="Oval" r="10" stroke="var(--stroke-0, #A6A6A6)" />
                      <g id="Oval_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
                <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-full">Every 8 weeks</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] not-italic relative shrink-0 text-right whitespace-nowrap" data-name="price">
                <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px]" data-name="highlight">
                  <p className="relative shrink-0">$</p>
                  <p className="relative shrink-0">14.00</p>
                </div>
                <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">35.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mb-[-1px] relative shrink-0 w-full" data-name="Dropdown row">
          <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="radio button small">
                <div className="absolute inset-[-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                    <g id="Group">
                      <circle cx="10.5" cy="10.5" fill="var(--fill-0, white)" id="Oval" r="10" stroke="var(--stroke-0, #A6A6A6)" />
                      <g id="Oval_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
                <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-full">Every 12 weeks</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] not-italic relative shrink-0 text-right whitespace-nowrap" data-name="price">
                <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px]" data-name="highlight">
                  <p className="relative shrink-0">$</p>
                  <p className="relative shrink-0">14.00</p>
                </div>
                <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">35.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mb-[-1px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Dropdown row">
          <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="radio button small">
                <div className="absolute inset-[-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                    <g id="Group">
                      <circle cx="10.5" cy="10.5" fill="var(--fill-0, white)" id="Oval" r="10" stroke="var(--stroke-0, #A6A6A6)" />
                      <g id="Oval_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
                <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-full">One-time purchase</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="price">
                <div className="content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center leading-[1.5] not-italic px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap" data-name="highlight">
                  <p className="relative shrink-0">$</p>
                  <p className="relative shrink-0">14.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}