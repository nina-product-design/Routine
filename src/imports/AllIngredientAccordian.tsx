import svgPaths from "./svg-7irlt87xuo";
import { imgAllIngredientAccordian } from "./svg-khg6r";

export default function AllIngredientAccordian() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative size-full" data-name="all ingredient accordian">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="accordian">
        <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">All ingredients</p>
        <div className="content-stretch flex flex-col h-[7px] items-start relative shrink-0 w-[12px]" data-name="div">
          <div className="h-[7px] overflow-clip relative shrink-0 w-full" data-name="svg">
            <div className="absolute contents inset-0" data-name="Clip path group">
              <div className="absolute contents inset-[4.77%_4.67%_10.45%_4.67%]" data-name="Icon">
                <div className="absolute inset-[4.77%_4.67%_10.45%_4.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.561px_-0.334px] mask-size-[12px_7px]" data-name="Vector" style={{ maskImage: `url('${imgAllIngredientAccordian}')` }}>
                  <div className="absolute inset-[-5.63%_-3.35%_-12.33%_-3.35%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6081 6.99999">
                      <path d={svgPaths.p9c0c5a0} id="Vector" stroke="var(--stroke-0, #323429)" strokeWidth="0.989006" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e2d9c2] h-[0.5px] relative shrink-0 w-full" data-name="divider">
        <div className="size-full" />
      </div>
    </div>
  );
}