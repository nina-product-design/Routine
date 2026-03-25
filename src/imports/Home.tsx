import svgPaths from "./svg-lv79i6b9oj";

function Hamburger() {
  return (
    <div className="absolute inset-[62.11%_88.27%_21.05%_6.4%]" data-name="hamburger">
      <div className="absolute inset-[-12.5%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <g id="hamburger">
            <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="1" y2="1" />
            <line id="Line 7" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="9" y2="9" />
            <line id="Line 8" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="17" y2="17" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[0.5px] contents left-0" data-name="Group">
      <div className="absolute bottom-[0.5px] h-[17.888px] left-0 w-[57.183px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[15.23px] h-[3.272px] left-[58.74px] w-[3.26px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.25988 3.27193">
          <path d={svgPaths.p6631540} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute bottom-[0.5px] contents left-0" data-name="Layer 1">
      <Group />
    </div>
  );
}

function ProseLogoRgbNoir() {
  return (
    <div className="absolute inset-[58.95%_41.6%_17.89%_41.87%] overflow-clip" data-name="Prose.logo.RGB.Noir 1">
      <Layer />
      <div className="absolute bottom-[0.5px] h-[17.888px] left-0 w-[57.183px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return <div className="absolute contents inset-[57.89%_5.33%_20%_88.53%]" />;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="h-[95px] relative shrink-0 w-full" data-name="Navigation">
        <div className="absolute bg-[#323429] inset-[0_0_57.89%_0]" data-name="Rectangle" />
        <div className="absolute bg-white inset-[42.11%_0_0_0] shadow-[0px_2px_3px_0px_rgba(234,234,234,0.5)]" data-name="Rectangle Copy" />
        <Hamburger />
        <p className="absolute font-['Simplon_Norm:Regular',sans-serif] inset-[9.47%_6.4%_67.37%_6.4%] leading-[0] not-italic text-[0px] text-[12px] text-center text-white tracking-[0.24px] underline">
          <span className="decoration-solid leading-[1.5]">{`500k 5-star Prose product reviews on Review & Refine`}</span>
          <span className="decoration-solid leading-[1.5]">®</span>
        </p>
        <ProseLogoRgbNoir />
        <button className="absolute block cursor-pointer font-['Simplon_Norm:Regular',sans-serif] inset-[57.89%_82.13%_20%_5.6%] leading-[0] not-italic text-[#323429] text-[14px] text-left tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[1.5]">← Back</p>
        </button>
        <Group1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Highlight() {
  return (
    <div className="bg-gradient-to-t content-stretch flex from-[#fcded3] from-[51.428%] items-center justify-center relative shrink-0 to-[#f9f7f2] to-[51.429%]" data-name="highlight">
      <p className="font-['Saol_Text:Light',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#323429] text-[32px] tracking-[-0.96px] whitespace-nowrap">Hair Goals,</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Highlight />
      <p className="font-['Saol_Text:Light',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#323429] text-[32px] tracking-[-0.96px] whitespace-nowrap">Maggie</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="copy">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="headline">
        <p className="font-['Saol_Text:Light',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[#323429] text-[32px] tracking-[-0.96px] w-[min-content]">{`Formulated for your `}</p>
        <Frame3 />
      </div>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] tracking-[0.28px] w-full">All Prose haircare products are free of parabens, mineral oils, sulfates, GMOs, and animal cruelty. All Prose supplements contain gluten-free wheat.</p>
    </div>
  );
}

function RichText() {
  return (
    <div className="relative shrink-0 w-full" data-name="rich text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Copy />
      </div>
    </div>
  );
}

function GoalPill() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#f69371] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Reduced Damage</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[17px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
        <g id="Group 27347">
          <path d="M0 9H16" id="Vector 617" stroke="var(--stroke-0, #4D523C)" />
          <path d="M8 17L8 -3.7749e-08" id="Vector 618" stroke="var(--stroke-0, #4D523C)" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <GoalPill />
      <Group2 />
    </div>
  );
}

function Frame8() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[4px] relative shrink-0 w-full">
      <Frame8 />
      <div className="flex flex-col font-['Simplon_Norm:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323429] text-[12px] text-right tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[1.5]">Very Damaged</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-black tracking-[0.28px]">{`We'll strengthen your hair and help repair what we can by adding ingredients to your products that help with hair health, fiber repair, and nourishment.`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[4px] relative shrink-0">
      <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#a0a090] text-[10px] tracking-[0.8px] uppercase whitespace-nowrap">Based on:</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <Frame13 />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] whitespace-nowrap">You heat-style 3–4x/week</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] whitespace-nowrap">Your hair is color-treated</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[16px] relative w-full">
          <Frame7 />
          <Frame2 />
          <Frame6 />
          <Container />
        </div>
      </div>
    </div>
  );
}

function GoalPill1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#bbacc2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Reduced Sensitivity</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[17px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
        <g id="Group 27347">
          <path d="M0 9H16" id="Vector 617" stroke="var(--stroke-0, #4D523C)" />
          <path d="M8 17L8 -3.7749e-08" id="Vector 618" stroke="var(--stroke-0, #4D523C)" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <GoalPill1 />
      <Group3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[9px] relative shrink-0 w-[35px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 9">
        <g id="Frame 427320373">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #BBACC2)" id="Ellipse 268" r="4.5" />
          <circle cx="17.5" cy="4.5" fill="var(--fill-0, #BBACC2)" id="Ellipse 269" r="4.5" />
          <circle cx="30.5" cy="4.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 270" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[4px] relative shrink-0 w-full">
      <Frame10 />
      <div className="flex flex-col font-['Simplon_Norm:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323429] text-[12px] text-right tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[1.5]">Moderate Sensitivity</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-black tracking-[0.28px]">{`We'll strengthen your hair and help repair what we can by adding ingredients to your products that help with hair health, fiber repair, and nourishment.`}</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[16px] relative w-full">
          <Frame9 />
          <Frame4 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function GoalPill2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="GoalPill">
      <div aria-hidden="true" className="absolute border border-[#a2c6d1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Improved Hydration</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[17px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
        <g id="Group 27347">
          <path d="M0 9H16" id="Vector 617" stroke="var(--stroke-0, #4D523C)" />
          <path d="M8 17L8 -3.7749e-08" id="Vector 618" stroke="var(--stroke-0, #4D523C)" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <GoalPill2 />
      <Group4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[9px] relative shrink-0 w-[35px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 9">
        <g id="Frame 427320373">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #A2C6D1)" id="Ellipse 268" r="4.5" />
          <circle cx="17.5" cy="4.5" fill="var(--fill-0, #A2C6D1)" id="Ellipse 269" r="4.5" />
          <circle cx="30.5" cy="4.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 270" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[4px] relative shrink-0 w-full">
      <Frame14 />
      <div className="flex flex-col font-['Simplon_Norm:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323429] text-[12px] text-right tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[1.5]">Moderate dehydrated</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-black tracking-[0.28px]">{`We'll strengthen your hair and help repair what we can by adding ingredients to your products that help with hair health, fiber repair, and nourishment.`}</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[16px] relative w-full">
          <Frame12 />
          <Frame5 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="list">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function RichText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="rich text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <p className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#323429] text-[14px] tracking-[1.12px] uppercase w-full">Your routine addresses</p>
        <List />
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="page">
      <RichText />
      <RichText1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[24px] relative w-full">
        <div className="bg-[#323429] h-[44px] min-w-[327px] relative rounded-[60px] shrink-0 w-[327px]" data-name="Buttons">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-w-[inherit] px-[32px] py-[14px] relative size-full">
            <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">see your Custom Routine</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoutineFooter() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[16px] relative rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[375px]" data-name="RoutineFooter">
      <Container1 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f9f7f2] content-stretch flex flex-col items-start relative size-full" data-name="Home">
      <Frame1 />
      <Page />
      <RoutineFooter />
    </div>
  );
}