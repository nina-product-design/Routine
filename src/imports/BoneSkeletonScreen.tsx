import svgPaths from "./svg-4o4jw43b9p";

function Banner() {
  return (
    <div className="bg-[#323429] content-stretch flex h-[40px] items-center justify-center px-[7px] py-[5px] relative shrink-0 w-[375px]" data-name="banner">
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap">Love your first order (or it’s on us)</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute inset-[1.52%_1.19%_4.2%_1.19%]" data-name="arrow">
      <div className="absolute inset-[-3.79%_-2.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5714 14.199">
          <g id="arrow">
            <path d={svgPaths.p7ea0a80} id="Stroke 2" stroke="var(--stroke-0, #161716)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0.5 7.09943H18.0714" id="Stroke 4" stroke="var(--stroke-0, #161716)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[0.5px] h-[17.999px] left-0 w-[62px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0001 17.9995">
        <g id="Group">
          <path d={svgPaths.p17b85140} fill="var(--fill-0, #323429)" id="Vector" />
          <path d={svgPaths.p2b3a1500} fill="var(--fill-0, #323429)" id="Vector_2" />
        </g>
      </svg>
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
    <div className="h-[22px] overflow-clip relative shrink-0 w-[62px]" data-name="Prose.logo.RGB.Noir 1">
      <Layer />
      <div className="absolute bottom-[0.5px] h-[17.888px] left-0 w-[57.183px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[115px] items-center relative shrink-0 w-full" data-name="row">
      <div className="h-[14px] relative shrink-0 w-[18px]" data-name="UI controls/Arrow">
        <Arrow />
      </div>
      <ProseLogoRgbNoir />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border-[#b9c2a6] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Row />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Navigation">
      <div className="backdrop-blur-[8px] bg-white content-stretch flex flex-col h-[60px] items-center pb-[10px] relative shrink-0 w-[375px]" data-name="Browser UI">
        <div className="h-[50px] relative shrink-0 w-[375px]" data-name="Status bar/mini">
          <div className="absolute h-[13px] right-[11px] top-[21px] w-[68px]" data-name="Status/mini">
            <div className="absolute h-[11.333px] right-[0.34px] top-[0.67px] w-[22.998px]" data-name="Battery/mini">
              <div className="absolute inset-[0_10.15%_0_0]" data-name="Border">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.663 11.3333">
                  <path d={svgPaths.p33461d00} id="Border" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
                </svg>
              </div>
              <div className="absolute inset-[32.35%_0_32.35%_94.23%]" data-name="Cap">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
                  <path d={svgPaths.p32d253c0} fill="var(--fill-0, black)" fillOpacity="0.4" id="Cap" />
                </svg>
              </div>
              <div className="absolute bg-black inset-[17.65%_18.86%_17.65%_8.7%] rounded-[1.333px]" data-name="Capacity" />
            </div>
            <div className="absolute h-[10.966px] right-[28.73px] top-[0.66px] w-[15.272px]" data-name="Wifi">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
                <path d={svgPaths.p3d78f640} fill="var(--fill-0, black)" id="Wifi" />
              </svg>
            </div>
            <div className="absolute h-[10.667px] right-[49.34px] top-px w-[17px]" data-name="Cellular">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
                <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular" />
              </svg>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] left-[43px] not-italic text-[15px] text-black text-center top-[27.75px] tracking-[-0.28px] whitespace-nowrap">
            <p className="leading-[normal]">9:41</p>
          </div>
        </div>
      </div>
      <Banner />
      <Container />
    </div>
  );
}

function Graident() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(234,234,234,0)] gap-[2px] h-[92px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(234,234,234,0)] top-0 via-1/2 via-[#f2f2f2] w-[100px]" data-name="graident" />;
}

function Graident1() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(234,234,234,0)] gap-[2px] h-[92px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(234,234,234,0)] top-0 via-1/2 via-[#f2f2f2] w-[100px]" data-name="graident" />;
}

function MSummaryTab() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[375px]" data-name="M-Summary tab">
      <div className="bg-[#f0f0f0] flex-[1_0_0] h-[24px] min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="bone">
        <Graident />
      </div>
      <div className="bg-[#f0f0f0] h-[24px] overflow-clip relative rounded-[4px] shrink-0 w-[66px]" data-name="bone">
        <Graident1 />
      </div>
    </div>
  );
}

function Graident2() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(226,217,194,0)] gap-[2px] h-[92px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(226,217,194,0)] top-0 via-1/2 via-[#e3dac3] w-[100px]" data-name="graident" />;
}

function Graident3() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(226,217,194,0)] gap-[2px] h-[92px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(226,217,194,0)] top-0 via-1/2 via-[#e3dac3] w-[100px]" data-name="graident" />;
}

function Graident4() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(226,217,194,0)] gap-[2px] h-[92px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(226,217,194,0)] top-0 via-1/2 via-[#e3dac3] w-[100px]" data-name="graident" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="bg-[#e2d9c2] h-[32px] overflow-clip relative rounded-[4px] shrink-0 w-[43px]" data-name="bone">
        <Graident3 />
      </div>
      <div className="bg-[#e2d9c2] flex-[1_0_0] h-[32px] min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="bone">
        <Graident4 />
      </div>
    </div>
  );
}

function ReduceReuse() {
  return (
    <div className="bg-[#f1ece0] content-stretch flex flex-col gap-[12px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[375px]" data-name="Reduce & Reuse">
      <div className="bg-[#e2d9c2] h-[32px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bone">
        <Graident2 />
      </div>
      <Frame5 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="header">
      <Navigation />
      <MSummaryTab />
      <ReduceReuse />
    </div>
  );
}

function Graident5() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(241,236,224,0)] gap-[2px] h-[248px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(241,236,224,0)] top-0 via-1/2 via-[#f7f3e8] w-[100px]" data-name="graident" />;
}

function Graident6() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(241,236,224,0)] gap-[2px] h-[248px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(241,236,224,0)] top-0 via-1/2 via-[#f7f3e8] w-[100px]" data-name="graident" />;
}

function Graident7() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(241,236,224,0)] gap-[2px] h-[248px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(241,236,224,0)] top-0 via-1/2 via-[#f7f3e8] w-[100px]" data-name="graident" />;
}

function Graident8() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(241,236,224,0)] gap-[2px] h-[248px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(241,236,224,0)] top-0 via-1/2 via-[#f7f3e8] w-[100px]" data-name="graident" />;
}

function Graident9() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(241,236,224,0)] gap-[2px] h-[248px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(241,236,224,0)] top-0 via-1/2 via-[#f7f3e8] w-[100px]" data-name="graident" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="bg-[#f1ece0] h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bone">
        <Graident6 />
      </div>
      <div className="bg-[#f1ece0] h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bone">
        <Graident7 />
      </div>
      <div className="bg-[#f1ece0] h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bone">
        <Graident8 />
      </div>
      <div className="bg-[#f1ece0] h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bone">
        <Graident9 />
      </div>
    </div>
  );
}

function Graident10() {
  return <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(241,236,224,0)] gap-[2px] h-[248px] items-center left-[-180px] px-[16px] py-[8px] rounded-[4px] to-[91.191%] to-[rgba(241,236,224,0)] top-0 via-1/2 via-[#f7f3e8] w-[100px]" data-name="graident" />;
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[327px]" data-name="Copy">
      <Frame1 />
      <div className="bg-[#f1ece0] h-[236px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bone">
        <Graident10 />
      </div>
    </div>
  );
}

function MPersonalDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="M - Personal details">
      <div className="bg-[#f1ece0] h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bone">
        <Graident5 />
      </div>
      <Copy />
    </div>
  );
}

function Frame3() {
  return <div className="h-0 shrink-0 w-[315px]" />;
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Main content">
      <p className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-white tracking-[0.96px] uppercase whitespace-nowrap">continue to shipping</p>
    </div>
  );
}

function Express() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Express">
      <Frame3 />
      <div className="bg-[#4d523c] h-[48px] relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <MPersonalDetails />
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[327px]" data-name="M - Checkout CTA">
        <Express />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0">
      <Header />
      <Frame4 />
    </div>
  );
}

function Contents() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0" data-name="Contents">
      <Frame />
    </div>
  );
}

export default function BoneSkeletonScreen() {
  return (
    <div className="bg-[#f9f7f2] relative size-full" data-name="bone skeleton screen">
      <Contents />
    </div>
  );
}