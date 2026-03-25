import imgImage12 from "figma:asset/9a0f1af7fa14dd4e72ad9cd85a2b569e25329f2c.png";

export default function NonSub({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#f9f7f2] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] w-[327px]"} data-name="NonSub">
      <div className="bg-[#e2d9c2] h-[27px] relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[4px] py-[9px] relative size-full">
            <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#161716] text-[10px] text-center tracking-[0.8px] uppercase whitespace-nowrap">Subscribe to 3 items to unlock</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[8px] relative w-full">
            <div className="opacity-50 relative shrink-0 size-[56px]" data-name="image 12">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[111.54%] left-[-0.19%] max-w-none top-[-3.85%] w-[100.38%]" src={imgImage12} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
              <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161716] text-[#6c6c6c] text-[0px] text-[12px] tracking-[0.24px] w-full whitespace-pre-wrap">
                <span className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5]">
                  {`You have subscribed to `}
                  <br aria-hidden="true" />
                  {`0 of 3 items `}
                </span>
                <span className="leading-[1.5]">
                  {`needed to unlock your `}
                  <br aria-hidden="true" />
                  FREE Toiletry bag - $30 value
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}