import svgPaths from "./svg-bkfnjhyo9y";

export default function Review({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px]"} data-name="Review">
      <div aria-hidden="true" className="absolute border border-[#f1ece0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Name and Feedback Date">
        <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Saol_Text:Light',sans-serif] h-[19px] leading-[1.1] min-h-px min-w-px relative text-[#283333] text-[20px] tracking-[-0.6px]">Kathy S.</p>
          <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#323429] text-[14px] text-right tracking-[0.28px] whitespace-nowrap">Reviewed on 03/02/26</p>
        </div>
        <div className="h-[10px] relative shrink-0 w-[81px]" data-name="Icon/Stars">
          <div className="absolute inset-[0_0.6%_0_86.42%]" data-name="5">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5146 10">
              <path clipRule="evenodd" d={svgPaths.p3253bc80} fill="var(--fill-0, #F69371)" fillRule="evenodd" id="5" />
            </svg>
          </div>
          <div className="absolute inset-[0_22.82%_0_64.2%]" data-name="4">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5146 10">
              <path clipRule="evenodd" d={svgPaths.p3253bc80} fill="var(--fill-0, #FFA380)" fillRule="evenodd" id="4" />
            </svg>
          </div>
          <div className="absolute inset-[0_43.81%_0_43.21%]" data-name="3">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5146 10">
              <path clipRule="evenodd" d={svgPaths.p3253bc80} fill="var(--fill-0, #FFA380)" fillRule="evenodd" id="4" />
            </svg>
          </div>
          <div className="absolute inset-[0_66.03%_0_20.99%]" data-name="2">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5146 10">
              <path clipRule="evenodd" d={svgPaths.p3253bc80} fill="var(--fill-0, #FFA380)" fillRule="evenodd" id="4" />
            </svg>
          </div>
          <div className="absolute inset-[0_87.02%_0_0]" data-name="1">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5146 10">
              <path clipRule="evenodd" d={svgPaths.p3253bc80} fill="var(--fill-0, #F69371)" fillRule="evenodd" id="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Copy + Star Reviews">
        <p className="font-['Simplon_Norm:Regular',sans-serif] h-[210px] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[14px] tracking-[0.28px] w-[334px]">This is amazing. I really tried everything else, every professional brand, and spent $100’s per bottle, but Prose is REAL ingredients and absolutely no damage. My hair is smooth, with no frizz, and it’s way beyond any hydration I’ve ever gotten from any other shampoo. I’m speechless right now. I’m just mad at myself that I didn’t try this sooner and wasted so much money on different brands. Prose, you saved my hair, my confidence has been through the roof. I can’t thank you enough!!</p>
      </div>
    </div>
  );
}