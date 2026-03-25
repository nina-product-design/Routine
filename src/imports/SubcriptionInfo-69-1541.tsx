import svgPaths from "./svg-ogzi61f88i";

function Header() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="header">
      <div className="bg-[#ecff92] col-1 h-[12px] mix-blend-multiply ml-[134.5px] mt-[11px] row-1 w-[192px]" />
      <p className="col-1 font-['Simplon_Norm:Regular',sans-serif] ml-0 mt-0 not-italic relative row-1 text-[#323429] text-[16px] text-center tracking-[0.32px] w-[327px]">
        <span className="leading-[1.5] text-[#161716]">Subscribe today to get</span>
        <span className="leading-[1.5] text-black">{` `}</span>
        <span className="leading-[1.5]">{`60% off your first order `}</span>
        <span className="leading-[1.5]">plus additional subscription perks.</span>
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[16.539px] left-0 top-[2.15px] w-[19.18px]">
      <div className="absolute inset-[0_0_-5.54%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1805 17.4548">
          <g id="Group 26850">
            <line id="Line 5" stroke="var(--stroke-0, #323429)" strokeWidth="0.916099" x1="19.1804" y1="16.9967" y2="16.9967" />
            <path d={svgPaths.p2e768300} id="Rectangle 1147" stroke="var(--stroke-0, #323429)" strokeWidth="0.916099" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative rounded-[30.87px] shrink-0 size-[21px]" data-name="Icons">
      <Group2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center justify-center pb-[7px] pl-[7px] pr-[6px] pt-[6px] relative rounded-[17px] shrink-0 size-[34px]" data-name="icon">
      <Icons />
    </div>
  );
}

function CancelAnytime() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0" data-name="cancel anytime">
      <Icon />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">Cancel anytime</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#ecff92] content-stretch flex flex-col items-center justify-center pb-[14px] pl-[7px] pr-[6px] pt-[13px] relative rounded-[17px] shrink-0 size-[34px]" data-name="icon">
      <div className="flex flex-col font-['Simplon_Norm:Regular',sans-serif] h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[#323429] text-[0px] text-center w-[21px]">
        <p className="text-[12px]">
          <span className="leading-[6.174px]">1</span>
          <span className="leading-[6.174px] tracking-[-0.1715px]">5</span>
          <span className="leading-[6.174px]">%</span>
        </p>
      </div>
    </div>
  );
}

function FutureOrders() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0" data-name="future orders">
      <Icon1 />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-black text-center tracking-[0.24px] whitespace-nowrap">15% off future orders</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="column 1">
      <CancelAnytime />
      <FutureOrders />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[14.246px] left-0 top-[5px] w-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 14.2458">
        <g id="Group 4">
          <rect height="13.4458" id="Rectangle 1" stroke="var(--stroke-0, #323429)" strokeWidth="0.8" width="17.4977" x="6.10231" y="0.4" />
          <rect height="5.00385" id="Rectangle 2" stroke="var(--stroke-0, #323429)" strokeWidth="0.8" width="3.99225" x="13.0729" y="0.4" />
          <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="0.8" x1="3.56981" x2="3.49674e-08" y1="6.94461" y2="6.94461" />
          <line id="Line 7" stroke="var(--stroke-0, #323429)" strokeWidth="0.8" x1="9.62339" x2="1.78153" y1="9.89766" y2="9.89766" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[5px]">
      <Group />
    </div>
  );
}

function FreeShipping1() {
  return (
    <div className="absolute left-0 rounded-[30.87px] size-[24px] top-0" data-name="Free shipping">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <FreeShipping1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center justify-center pl-[5px] pr-[6px] py-[5px] relative rounded-[17px] shrink-0 size-[34px]" data-name="icon">
      <div className="relative shrink-0 size-[24px]" data-name="Icons">
        <Group5 />
      </div>
    </div>
  );
}

function FreeShipping() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0" data-name="free shipping">
      <Icon2 />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">Free shipping</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[19.746px] left-[2.25px] top-[2.25px] w-[19.796px]">
      <div className="absolute inset-[-1.95%_-7.5%_-1.95%_-8.46%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9576 20.5147">
          <g id="Group 26856">
            <path d={svgPaths.p1de95a00} id="Ellipse 6" stroke="var(--stroke-0, #323429)" strokeLinejoin="round" strokeWidth="0.7687" />
            <path d={svgPaths.p31f70800} fill="var(--stroke-0, #323429)" id="Arrow 2" />
            <path d={svgPaths.p9ed9a00} fill="var(--stroke-0, #323429)" id="Arrow 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center justify-center pb-[8px] pl-[6px] pr-[8px] pt-[5px] relative rounded-[17px] shrink-0 size-[34px]" data-name="icon">
      <div className="relative rounded-[30.87px] shrink-0 size-[21px]" data-name="Icons">
        <Group3 />
      </div>
    </div>
  );
}

function Refills() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0" data-name="refills">
      <Icon3 />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">Flexible refills</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="column 2">
      <FreeShipping />
      <Refills />
    </div>
  );
}

function Props() {
  return (
    <div className="relative shrink-0 w-full" data-name="props">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center justify-center px-[24px] relative w-full">
          <Column />
          <Column1 />
        </div>
      </div>
    </div>
  );
}

export default function SubcriptionInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full" data-name="subcription info">
      <Header />
      <Props />
    </div>
  );
}