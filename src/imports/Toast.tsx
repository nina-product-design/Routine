import svgPaths from "./svg-989d84iiel";
import imgToast from "figma:asset/68c1e817389a29e91993b7411c2563fe549abc6e.png";

export default function Toast() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Toast">
      <div className="bg-[#323429] h-[61.394px] relative rounded-[12px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] shrink-0 w-full" data-name="div">
        <div className="absolute content-stretch flex items-center justify-center left-[296px] rounded-[20px] top-[16.7px]" data-name="Container">
          <div className="flex items-center justify-center relative shrink-0 size-[28px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="size-[28px]" data-name="Container" />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[12px] w-[309.171px]">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center pr-[0.011px] relative rounded-[22782700px] shrink-0 size-[23.998px]" data-name="Container">
              <div className="relative shrink-0 size-[9.393px]" data-name="UI controls/Close">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute inset-[0_0.17%_0.17%_0]" data-name="Group">
                    <div className="absolute inset-[-8.85%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0371 11.0371">
                        <g id="Group">
                          <path d={svgPaths.p23b30680} id="Line 4" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.17411" />
                          <path d={svgPaths.p277a550} id="Line 4_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.17411" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[0.997px] h-[37.397px] items-start justify-center relative shrink-0 w-[232.009px]" data-name="Container">
              <div className="h-[19.605px] relative shrink-0 w-[232.009px]" data-name="span">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Simplon_Norm:Medium',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] text-white top-[0.36px] tracking-[0.28px] whitespace-nowrap">Removed: Maggie’s Shampoo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[31.17px] items-center justify-center relative shrink-0 w-[31.169px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-[31.169px] relative rounded-[20px] w-[31.17px]" data-name="img">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgToast} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}