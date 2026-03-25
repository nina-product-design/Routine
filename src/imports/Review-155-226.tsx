import svgPaths from "./svg-4kjasif1ts";

export default function Review({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px]"} data-name="Review">
      <div aria-hidden="true" className="absolute border border-[#f1ece0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Name and Feedback Date">
        <div className="content-stretch flex flex-col font-['Simplon_Norm:Regular',sans-serif] items-start justify-center leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-full">
          <p className="h-[19px] relative shrink-0 w-full">Kathy S.</p>
          <p className="h-[19px] relative shrink-0 w-full">New York, NY</p>
          <p className="relative shrink-0 text-right whitespace-nowrap">03/02/26</p>
        </div>
        <div className="h-[13.951px] relative shrink-0 w-[89.343px]" data-name="Icon/Stars">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.3427 13.9506">
            <g id="Icon/Stars">
              <path clipRule="evenodd" d={svgPaths.p20128100} fill="var(--fill-0, #4D523C)" fillRule="evenodd" id="1" />
              <path clipRule="evenodd" d={svgPaths.p29f51b80} fill="var(--fill-0, #4D523C)" fillRule="evenodd" id="2" />
              <path clipRule="evenodd" d={svgPaths.p1080b7c0} fill="var(--fill-0, #4D523C)" fillRule="evenodd" id="3" />
              <path clipRule="evenodd" d={svgPaths.p5c56e70} fill="var(--fill-0, #4D523C)" fillRule="evenodd" id="4" />
              <path clipRule="evenodd" d={svgPaths.p350b6772} fill="var(--fill-0, #4D523C)" fillRule="evenodd" id="5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Copy + Star Reviews">
        <p className="font-['Simplon_Norm:Regular',sans-serif] h-[210px] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] w-[334px]">This is amazing. I really tried everything else, every professional brand, and spent $100’s per bottle, but Prose is REAL ingredients and absolutely no damage. My hair is smooth, with no frizz, and it’s way beyond any hydration I’ve ever gotten from any other shampoo. I’m speechless right now. I’m just mad at myself that I didn’t try this sooner and wasted so much money on different brands. Prose, you saved my hair, my confidence has been through the roof. I can’t thank you enough!!</p>
      </div>
    </div>
  );
}