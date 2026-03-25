function GoalPill() {
  return (
    <div className="bg-[#fcded3] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#f69371] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Reduced Damage</p>
    </div>
  );
}

function GoalPill1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#bbacc2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Silky Softness</p>
    </div>
  );
}

function GoalPill2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#b9c2a6] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Stronger Growth</p>
    </div>
  );
}

function GoalPill3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Less Irritation</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <GoalPill />
      <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="blue pill">
        <div aria-hidden="true" className="absolute border border-[#a2c6d1] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] text-left tracking-[0.24px] whitespace-nowrap">Improved Hydration</p>
      </button>
      <GoalPill1 />
      <GoalPill2 />
      <GoalPill3 />
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
      <div className="flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#323429] text-[12px] tracking-[0.24px]">
        <p className="leading-[1.5]">Very Damaged</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-black tracking-[0.28px]">{`We'll strengthen your hair and help repair what we can by adding ingredients to your products that help with hair health, fiber repair, and nourishment.`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[8px] relative shrink-0">
      <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4d523c] text-[10px] tracking-[0.8px] uppercase whitespace-nowrap">Based on:</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <Frame3 />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] whitespace-nowrap">You heat-style 3–4x/week</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] whitespace-nowrap">Your hair is color-treated</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[16px] relative w-full">
          <Frame />
          <Frame1 />
          <Container />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <Card />
    </div>
  );
}

export default function RichText() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full" data-name="rich text">
      <p className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#323429] text-[14px] tracking-[1.12px] uppercase w-full">Your routine addresses</p>
      <Frame4 />
      <List />
    </div>
  );
}