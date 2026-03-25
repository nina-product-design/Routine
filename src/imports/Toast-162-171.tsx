import svgPaths from "./svg-fgsse4rfna";
import imgImg from "figma:asset/68c1e817389a29e91993b7411c2563fe549abc6e.png";

function Container1() {
  return <div className="size-[28px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[296px] rounded-[20px] top-[16.7px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[28px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[9.994px] relative shrink-0 w-[11.999px]" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9988 9.9937">
        <g clipPath="url(#clip0_94_115)" id="svg">
          <path d={svgPaths.pa0b2ae0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49905" />
        </g>
        <defs>
          <clipPath id="clip0_94_115">
            <rect fill="white" height="9.9937" width="11.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center pr-[0.011px] relative rounded-[22782700px] shrink-0 size-[23.998px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Span() {
  return (
    <div className="h-[19.605px] relative shrink-0 w-[232.009px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Simplon_Norm:Medium',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] text-white top-[0.36px] tracking-[0.28px] whitespace-nowrap">Added to Cart: Maggie’s Shampoo</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[0.997px] h-[37.397px] items-start justify-center relative shrink-0 w-[232.009px]" data-name="Container">
      <Span />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[31.169px] relative rounded-[4px] w-[31.17px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImg} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[12px] w-[309.171px]">
      <Frame />
      <div className="flex h-[31.17px] items-center justify-center relative shrink-0 w-[31.169px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Img />
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="bg-[#323429] h-[61.394px] relative rounded-[12px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] shrink-0 w-full" data-name="div">
      <Container />
      <Frame1 />
    </div>
  );
}

export default function Toast() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Toast">
      <Div />
    </div>
  );
}