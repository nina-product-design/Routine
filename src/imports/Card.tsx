import svgPaths from "./svg-9evi71acmz";

function GoalPill() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#f69371] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Reduced Damage</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_179_173)" id="Icon">
          <path d={svgPaths.p1199c300} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_179_173">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.28%]" data-name="Group">
      <div className="absolute inset-[-5.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9999">
          <g id="Group">
            <path d={svgPaths.p344a0c00} id="Vector" stroke="var(--stroke-0, #323429)" strokeLinecap="square" strokeWidth="0.895957" />
            <path d={svgPaths.p1869e104} id="Vector_2" stroke="var(--stroke-0, #323429)" strokeLinecap="square" strokeWidth="0.895957" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[12px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function UiControlsCloseButton() {
  return (
    <div className="content-stretch flex items-center justify-between p-[10px] relative shrink-0 size-[32px]" data-name="UiControlsCloseButton">
      <Icon />
      <Container />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <GoalPill />
      <UiControlsCloseButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[9px] relative shrink-0 w-[35px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 9">
        <g id="Frame 427320373">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F69371)" id="Ellipse 268" r="4.5" />
          <circle cx="17.5" cy="4.5" fill="var(--fill-0, #F69371)" id="Ellipse 269" r="4.5" />
          <circle cx="30.5" cy="4.5" fill="var(--fill-0, #F69371)" id="Ellipse 270" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[4px] relative shrink-0 w-full">
      <Frame2 />
      <div className="flex flex-col font-['Simplon_Norm:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323429] text-[12px] text-right tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[1.5]">Very Damaged</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-full" data-name="body">
      <p className="flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-black tracking-[0.28px]">{`We'll strengthen your hair and help repair what we can by adding ingredients to your products that help with hair health, fiber repair, and nourishment.`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4d523c] text-[10px] tracking-[0.8px] uppercase whitespace-nowrap">Based on:</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1ece0] border-solid border-t inset-0 pointer-events-none" />
      <Frame3 />
      <ul className="block font-['Simplon_Norm:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <li className="list-disc ms-[18px]">
          <span className="leading-[1.5]">You heat-style 3–4x/week</span>
        </li>
      </ul>
      <ul className="block font-['Simplon_Norm:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <li className="list-disc ms-[18px]">
          <span className="leading-[1.5]">Your hair is color-treated</span>
        </li>
      </ul>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[12px] py-[16px] relative rounded-[10px] size-full" data-name="card">
      <Frame1 />
      <Frame />
      <Body />
      <Container1 />
    </div>
  );
}