import svgPaths from "./svg-v59w0vx39v";
import imgProseCustomShampoo from "figma:asset/26794102a1b0acdbbfc3e928a0ea62a0390bf96f.png";
import imgProseIngredientFermentedRiceWater from "figma:asset/e2fc75eabda0289ba58737891c0aa548f4bc6408.png";
import imgProseIngredientOatKernelOil from "figma:asset/0a7dcab57280db1bd8a745ce2e1a41baf92eeea4.png";
import imgProseIngredientOatKernelOil1 from "figma:asset/0913a3956f96191cadd2899f0350dc1488eea659.png";
import imgProseIngredientOatKernelOil2 from "figma:asset/f76dbda92b80b8e170780be44fab645d4216f166.png";
import imgImage from "figma:asset/429129889bcdacbd724e9ef5b630cdd3edf4a556.png";
import imgImage1 from "figma:asset/0f4e4ba9adf2a517c048e58e8cad5a242a4de652.png";
import { imgVector } from "./svg-5x5hw";

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

function ProseLogo() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-[62px]" data-name="Prose logo">
      <Layer />
      <div className="absolute bottom-[0.5px] h-[17.888px] left-0 w-[57.183px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[#f69371] content-stretch flex flex-col items-center justify-center left-0 pt-[2px] rounded-[44px] size-[16px] top-0" data-name="Container" />;
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Icons">
      <div className="h-[22px] relative shrink-0 w-[24.444px]" data-name="Icon/Bag">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4444 22">
          <g id="Bag states">
            <path d={svgPaths.p1f34900} fill="var(--fill-0, #323429)" id="Vector" />
            <path d={svgPaths.pef2c440} fill="var(--fill-0, #323429)" id="Vector_2" />
          </g>
        </svg>
        <div className="absolute inset-[0_1.82%_27.27%_32.73%]" data-name="Navigation/D/Navigation/D/Cart items">
          <Container />
        </div>
      </div>
      <div className="h-[22px] relative shrink-0 w-[21px]" data-name="UI controls/Account">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
          <path d={svgPaths.p39953400} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function LogoAndIcons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[194px]" data-name="Logo and Icons">
      <ProseLogo />
      <Icons />
    </div>
  );
}

function TopNav() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[375px]" data-name="top nav">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="UI controls/Hamburger">
        <div className="absolute bottom-full left-0 right-0 top-0">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
              <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="1" y2="1" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
              <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="1" y2="1" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-full">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
              <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <LogoAndIcons />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="navigation">
      <div className="backdrop-blur-[8px] bg-white content-stretch flex flex-col items-center pb-[10px] relative shrink-0" data-name="Browser UI">
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
      <TopNav />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[14.398px] relative shrink-0 w-full" data-name="header">
      <div className="content-stretch flex flex-col items-start pl-[24px] relative size-full">
        <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">Your results are in, Maggie</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[-14.29%_-45.63%_-14.81%_-44.3%]" data-name="Group">
      <div className="absolute inset-[-14.29%_42.42%_34.5%_-44.3%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.633px_3.43px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4513 19.1491">
          <path clipRule="evenodd" d={svgPaths.p37caf3c0} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.2%_-45.63%_-14.81%_43.05%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.333px_-9.168px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6188 18.3851">
          <path clipRule="evenodd" d={svgPaths.p3d0b9a70} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p39bf6f00} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
      <MaskGroup />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[rgba(241,236,224,0.6)] relative rounded-[16777200px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[6px] relative">
        <Container3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[237.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon />
        <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[14px] whitespace-nowrap">Reduced damage</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[179.5px] relative rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] shrink-0 w-[273.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">
        <Container2 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-[221px]">Protective polymers and botanical oils work together to shield strands from heat, UV, and environmental stress — minimizing breakage over time.</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[5.992px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56555 5.99219">
        <path clipRule="evenodd" d={svgPaths.p6683380} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.899px] items-start left-[1.76px] top-[-0.01px] w-[5.566px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[6.898px] left-[14.38px] top-[13.41px] w-[5.57px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[5.992px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.31793 5.99219">
        <path clipRule="evenodd" d={svgPaths.p18955800} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[7.154px] items-start left-[-0.02px] top-[1.86px] w-[6.318px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[7.156px] left-[4.09px] top-[13.36px] w-[6.32px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[5.992px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.51996 5.99219">
        <path clipRule="evenodd" d={svgPaths.pf551100} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.342px] items-start left-[0.55px] top-[-0.01px] w-[4.52px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[6.344px] left-[3.7px] top-[5.12px] w-[4.523px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[5.992px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.10229 5.99219">
        <path clipRule="evenodd" d={svgPaths.p3006ec80} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.673px] items-start left-[-0.02px] top-[0.8px] w-[5.102px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[6.672px] left-[14.77px] top-[5.06px] w-[5.102px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p3359a200} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[24px] top-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[11.586px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.10156 11.5859">
        <path clipRule="evenodd" d={svgPaths.p22904500} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.586px] items-start left-[8.26px] top-[6.37px] w-[7.102px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[rgba(241,236,224,0.6)] relative rounded-[16777200px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[6px] relative">
        <Container6 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36px] relative shrink-0 w-[237.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon1 />
        <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[14px] whitespace-nowrap">Stronger growth</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[179.5px] relative rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] shrink-0 w-[273.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">
        <Container5 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-[221px]">Scalp-stimulating actives and strengthening proteins target the root to promote thicker, more resilient growth from day one.</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <div className="absolute inset-[1.07%]" data-name="Vector">
        <div className="absolute inset-[-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24.0001">
            <path d={svgPaths.p23d57380} id="Vector" stroke="var(--stroke-0, #323429)" strokeWidth="0.514498" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[57.17%_51.41%_24.25%_34.3%]" data-name="Vector">
        <div className="absolute inset-[-1.01%_-1.22%_-5.69%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.72907 4.75793">
            <path d={svgPaths.p177ec800} id="Vector" stroke="var(--stroke-0, #323429)" strokeWidth="0.514498" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.15%_27.11%_15.68%_27.15%]" data-name="Vector">
        <div className="absolute inset-[-2.24%_-2.34%_-1.6%_-2.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4905 16.739">
            <path d={svgPaths.p1e7cd700} id="Vector" stroke="var(--stroke-0, #323429)" strokeWidth="0.514498" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[rgba(241,236,224,0.6)] relative rounded-[16777200px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[6px] relative">
        <Container19 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[36px] relative shrink-0 w-[237.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon2 />
        <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[14px] whitespace-nowrap">Improved hydration</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[179.5px] relative rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] shrink-0 w-[273.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">
        <Container18 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-[221px]">{`Deep-penetrating humectants and moisture-locking emollients restore your hair's natural water balance without weighing it down.`}</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p39bf6f00} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
      <div className="absolute inset-[15.97%_24.5%_24.79%_27.4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5443 14.2192">
          <path clipRule="evenodd" d={svgPaths.pa326d00} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.3%_38.42%_15.97%_28.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96917 13.1345">
          <path clipRule="evenodd" d={svgPaths.p24611c70} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[rgba(241,236,224,0.6)] relative rounded-[16777200px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[6px] relative">
        <Container22 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[36px] relative shrink-0 w-[237.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon3 />
        <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[14px] whitespace-nowrap">Silky softness</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[179.5px] relative rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] shrink-0 w-[273.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">
        <Container21 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-[221px]">Cuticle-smoothing agents and lightweight oils coat each strand to reduce roughness and leave hair feeling touchably soft.</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p39bf6f00} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
      </svg>
      <div className="absolute inset-[31.82%_31.06%_13.52%_14.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1188">
          <path clipRule="evenodd" d={svgPaths.p290c7300} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.43%_13.34%_30.91%_32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1189">
          <path clipRule="evenodd" d={svgPaths.p1a9f2200} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.11%_31.38%_31.23%_13.95%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1188">
          <path clipRule="evenodd" d={svgPaths.p26dc3dd0} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.49%_13.67%_13.84%_31.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1188">
          <path clipRule="evenodd" d={svgPaths.p26dc3dd0} fill="var(--fill-0, #323429)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[rgba(241,236,224,0.6)] relative rounded-[16777200px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[6px] relative">
        <Container25 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[36px] relative shrink-0 w-[237.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon4 />
        <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[14px] whitespace-nowrap">Less irritation</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[179.5px] relative rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] shrink-0 w-[273.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">
        <Container24 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-[221px]">Calming botanicals and gentle exfoliants soothe sensitive scalps, reducing redness and discomfort without stripping natural oils.</p>
      </div>
    </div>
  );
}

function Container26() {
  return <div className="h-[179.5px] shrink-0 w-[14px]" data-name="Container" />;
}

function HScrollContainer() {
  return (
    <div className="content-stretch flex gap-[10px] h-[180px] items-start relative shrink-0 w-full" data-name="h-scroll container">
      <Container1 />
      <Container4 />
      <Container17 />
      <Container20 />
      <Container23 />
      <Container26 />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[179.5px] relative shrink-0 w-full" data-name="div">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] relative size-full">
          <HScrollContainer />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return <div className="bg-[#323429] h-[6px] rounded-[16777200px] shrink-0 w-[16px]" data-name="button" />;
}

function Button1() {
  return <div className="bg-[#d1cdc4] rounded-[16777200px] shrink-0 size-[6px]" data-name="button" />;
}

function Button2() {
  return <div className="bg-[#d1cdc4] rounded-[16777200px] shrink-0 size-[6px]" data-name="button" />;
}

function Button3() {
  return <div className="bg-[#d1cdc4] rounded-[16777200px] shrink-0 size-[6px]" data-name="button" />;
}

function Button4() {
  return <div className="bg-[#d1cdc4] rounded-[16777200px] shrink-0 size-[6px]" data-name="button" />;
}

function Div1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center justify-center relative shrink-0 w-full" data-name="div">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function GoalCarosuel() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[197.5px] items-start relative shrink-0 w-full" data-name="goal carosuel">
      <Div />
      <Div1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['Saol_Text:Light',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#323429] text-[40px] tracking-[-1.2px] whitespace-pre-wrap">
        {`Meet your `}
        <br aria-hidden="true" />
        custom formulas
      </p>
    </div>
  );
}

function Subheader() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="subheader">
      <p className="flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c] text-[14px] tracking-[0.28px]">Made to order just for you, based on your unique hair, goals, and lifestyle.</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Container">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] whitespace-nowrap">60% off first subscription order + free shipping</p>
    </div>
  );
}

function ReccomendedTag() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center left-[8px] px-[12px] py-[4px] rounded-[20px] top-[8px]" data-name="reccomended tag">
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] whitespace-nowrap">Recommended</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0.17%_0.17%_0]" data-name="Group">
      <div className="absolute inset-[-5.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3935 13.3934">
          <g id="Group">
            <path d={svgPaths.pbfcab60} id="Line 4" stroke="var(--stroke-0, #323429)" strokeLinecap="square" />
            <path d={svgPaths.p39b19100} id="Line 4_2" stroke="var(--stroke-0, #323429)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CloseButton() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Close button">
      <Group2 />
    </div>
  );
}

function ProductImage() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="product image">
      <div className="absolute h-[220px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[327px]" data-name="Prose-custom-shampoo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
          <img alt="" className="absolute h-[115.42%] left-[-19.56%] max-w-none top-[-5.44%] w-[139.73%]" src={imgProseCustomShampoo} />
        </div>
      </div>
      <ReccomendedTag />
      <div className="absolute left-[287px] size-[32px] top-[8px]" data-name="close">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" data-figma-bg-blur-radius="4" fill="var(--fill-0, white)" id="Ellipse 287" opacity="0.5" r="16" />
          <defs>
            <clipPath id="bgblur_0_8_1486_clip_path" transform="translate(4 4)">
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
        </svg>
        <CloseButton />
      </div>
    </div>
  );
}

function SizeLink() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] gap-[24px] items-start leading-[1.5] relative shrink-0 text-[12px] tracking-[0.24px] whitespace-nowrap" data-name="size & link">
      <p className="relative shrink-0">8.5 fl oz</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 underline">See full details</p>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#4d523c] w-full" data-name="Product info">
      <p className="font-['Saol_Text:Light',sans-serif] leading-[1.1] min-w-full relative shrink-0 text-[32px] tracking-[-0.96px] w-[min-content]">Maggie’s Shampoo</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">A gentle, sulfate-free cleanser that maintains the natural balance of your scalp, without color washout.</p>
      <SizeLink />
    </div>
  );
}

function GoalPills() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-[271.133px]" data-name="goal pills">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="goal pill">
        <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Improved Hydration</p>
      </div>
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="goal pill">
        <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Reduced Damage</p>
      </div>
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="goal pill">
        <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">Silky Softness</p>
      </div>
    </div>
  );
}

function TargetedGoals() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Targeted goals">
      <p className="font-['DM_Mono:Medium',sans-serif] leading-[14.4px] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">YOUR TARGETED CONCERNS</p>
      <GoalPills />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
      <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">Fermented Rice Water</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Tamed Frizz</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Fermented-Rice-Water">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientFermentedRiceWater} />
      </div>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
      <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">{`Oat Lipid & Sunflower Seed Extract`}</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Color Care</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Oat-Kernel-Oil">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientOatKernelOil} />
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
      <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">{`Licorice & Panthenol`}</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Scalp Comfort</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Oat-Kernel-Oil">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientOatKernelOil1} />
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] w-[223px]">
      <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 w-full">Professional Polymer</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] relative shrink-0 tracking-[0.24px] w-full">Curl Definition</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Prose-Ingredient-Oat-Kernel-Oil">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProseIngredientOatKernelOil2} />
      </div>
      <Frame3 />
    </div>
  );
}

function Ingridents() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[279px]" data-name="ingridents">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function IngridentList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[279px]" data-name="ingrident list">
      <p className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.96px] uppercase w-[min-content]">your KEY INGREDIENTS</p>
      <Ingridents />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#4d523c] text-[12px] w-full">
      <p className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] relative shrink-0 tracking-[0.96px] uppercase w-full">YOUR PREFERENCES</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] relative shrink-0 tracking-[0.24px] w-full">Fragrance free.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Contents() {
  return (
    <div className="relative shrink-0 w-full" data-name="contents">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
        <ProductInfo />
        <TargetedGoals />
        <IngridentList />
        <Frame10 />
      </div>
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c]" data-name="product info">
      <p className="relative shrink-0 text-[12px] tracking-[0.24px] w-[192px]">Every 4 weeks (recommended)</p>
      <p className="min-w-full relative shrink-0 text-[10px] tracking-[0.2px] w-[min-content]">60% off first subscription order</p>
    </div>
  );
}

function Highlight() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="highlight">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$14.00</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] line-through not-italic relative shrink-0 text-[#6c6c6c] text-[10px] text-right tracking-[0.2px] whitespace-nowrap">$35.00</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="price">
      <Highlight />
      <Frame12 />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="top row">
      <ProductInfo1 />
      <Price />
      <div className="flex h-[36px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[36px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                <line id="Line 32" stroke="var(--stroke-0, #E2D9C2)" x2="36" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="relative size-[7px]" data-name="/">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <path d="M7.5 0.5V7.5H0.5" id="/" stroke="var(--stroke-0, #323429)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[8px] px-[4px] top-[-8px]">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[10px] whitespace-nowrap">Added to cart</p>
    </div>
  );
}

function ReccomendedProducts() {
  return (
    <div className="relative shrink-0 w-full" data-name="reccomended products">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] relative w-full">
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[24px] relative rounded-[10px] shrink-0 w-[327px]" data-name="Routine Product Card">
            <ProductImage />
            <Contents />
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative rounded-[10px] shrink-0 w-[295px]" data-name="Added to cart">
              <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <TopRow />
              <Frame16 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#323429] text-[14px] tracking-[1.12px] uppercase w-full">add to your routine</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header">
      <Frame5 />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col h-[222.75px] items-start justify-end px-[13px] py-[12px] relative rounded-[10px] shrink-0 w-[175.5px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end leading-[1.5] not-italic pr-[8px] relative w-full whitespace-nowrap">
          <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 text-[#4d523c] text-[14px]">$12.80</p>
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Norm:Regular',sans-serif] line-through relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px]">$32.00</p>
        </div>
      </div>
    </div>
  );
}

function Bototm() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bototm">
      <button className="content-stretch cursor-pointer flex items-start relative shrink-0" data-name="Button">
        <div className="bg-[#323429] content-stretch flex h-[44px] items-center justify-center max-w-[492px] px-[32px] py-[16px] relative rounded-[60px] shrink-0 w-[88px]" data-name="Buttons">
          <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">ADD</p>
        </div>
      </button>
      <Frame13 />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex flex-col h-[222.75px] items-start justify-end px-[13px] py-[12px] relative rounded-[10px] shrink-0 w-[175.5px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1} />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end leading-[1.5] not-italic pr-[8px] relative w-full whitespace-nowrap">
          <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 text-[#4d523c] text-[14px]">$12.80</p>
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Norm:Regular',sans-serif] line-through relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px]">$32.00</p>
        </div>
      </div>
    </div>
  );
}

function Bototm1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bototm">
      <button className="content-stretch cursor-pointer flex items-start relative shrink-0" data-name="Button">
        <div className="bg-[#323429] content-stretch flex h-[44px] items-center justify-center max-w-[492px] px-[32px] py-[16px] relative rounded-[60px] shrink-0 w-[88px]" data-name="Buttons">
          <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">ADD</p>
        </div>
      </button>
      <Frame14 />
    </div>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col h-[222.75px] items-start justify-end px-[13px] py-[12px] relative rounded-[10px] shrink-0 w-[175.5px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1} />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end leading-[1.5] not-italic pr-[8px] relative w-full whitespace-nowrap">
          <p className="font-['Simplon_Norm:Medium',sans-serif] relative shrink-0 text-[#4d523c] text-[14px]">$12.80</p>
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Norm:Regular',sans-serif] line-through relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px]">$32.00</p>
        </div>
      </div>
    </div>
  );
}

function Bototm2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bototm">
      <button className="content-stretch cursor-pointer flex items-start relative shrink-0" data-name="Button">
        <div className="bg-[#323429] content-stretch flex h-[44px] items-center justify-center max-w-[492px] px-[32px] py-[16px] relative rounded-[60px] shrink-0 w-[88px]" data-name="Buttons">
          <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">ADD</p>
        </div>
      </button>
      <Frame15 />
    </div>
  );
}

function Scroll() {
  return (
    <div className="h-[325px] overflow-x-auto overflow-y-clip relative shrink-0 w-[351px]" data-name="scroll">
      <div className="absolute content-stretch flex gap-[12px] items-start left-0 top-0" data-name="carousel">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[175.5px]" data-name="card">
          <Image />
          <p className="font-['Simplon_Norm:Medium',sans-serif] h-[42px] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] w-[175.5px]">Alexandria’s Curl Cream</p>
          <Bototm />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[175.5px]" data-name="card">
          <Image1 />
          <p className="font-['Simplon_Norm:Medium',sans-serif] h-[42px] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] w-[175.5px]">Alexandria’s Dry Shampoo</p>
          <Bototm1 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[175.5px]" data-name="card">
          <Image2 />
          <p className="font-['Simplon_Norm:Medium',sans-serif] h-[42px] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] w-[175.5px]">Alexandria’s Boar Brush</p>
          <Bototm2 />
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="bg-[#f9f7f2] content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="page">
      <div className="bg-[#f1ece0] content-stretch flex flex-col gap-[16px] items-start py-[24px] relative shrink-0 w-[375px]" data-name="quiz summary">
        <Header />
        <GoalCarosuel />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative shrink-0 w-[375px]" data-name="page header">
        <Title />
        <Subheader />
        <Container27 />
      </div>
      <ReccomendedProducts />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[24px] py-[48px] relative shrink-0" data-name="product carosuel">
        <Header1 />
        <Scroll />
      </div>
    </div>
  );
}

function Group3() {
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

function Layer1() {
  return (
    <div className="absolute bottom-[0.5px] contents left-0" data-name="Layer 1">
      <Group3 />
    </div>
  );
}

function ProseLogo1() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-[62px]" data-name="Prose logo">
      <Layer1 />
      <div className="absolute bottom-[0.5px] h-[17.888px] left-0 w-[57.183px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#f69371] content-stretch flex flex-col items-center justify-center left-0 pt-[2px] rounded-[44px] size-[16px] top-0" data-name="Container" />;
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Icons">
      <div className="h-[22px] relative shrink-0 w-[24.444px]" data-name="Icon/Bag">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4444 22">
          <g id="Bag states">
            <path d={svgPaths.p1f34900} fill="var(--fill-0, #323429)" id="Vector" />
            <path d={svgPaths.pef2c440} fill="var(--fill-0, #323429)" id="Vector_2" />
          </g>
        </svg>
        <div className="absolute inset-[0_1.82%_27.27%_32.73%]" data-name="Navigation/D/Navigation/D/Cart items">
          <Container28 />
        </div>
      </div>
      <div className="h-[22px] relative shrink-0 w-[21px]" data-name="UI controls/Account">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
          <path d={svgPaths.p39953400} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function LogoAndIcons1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[194px]" data-name="Logo and Icons">
      <ProseLogo1 />
      <Icons1 />
    </div>
  );
}

function Nav() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex items-center justify-between left-0 px-[24px] py-[16px] right-0 top-[calc(50%+23.5px)]" data-name="Nav">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="UI controls/Hamburger">
        <div className="absolute bottom-full left-0 right-0 top-0">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
              <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="1" y2="1" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
              <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="1" y2="1" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-full">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
              <line id="Line 6" stroke="var(--stroke-0, #323429)" strokeWidth="2" x2="20" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <LogoAndIcons1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[0.57px] contents left-0" data-name="Group">
      <div className="absolute bottom-[0.57px] h-[17.888px] left-0 w-[57.183px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[15.3px] h-[3.272px] left-[58.74px] w-[3.26px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.25988 3.27193">
          <path d={svgPaths.p6631540} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute bottom-[0.57px] contents left-0" data-name="Layer 1">
      <Group4 />
    </div>
  );
}

function ProseLogoRgbNoir() {
  return (
    <div className="absolute inset-[64.49%_41.6%_10.18%_41.87%] overflow-clip" data-name="Prose.logo.RGB.Noir 1">
      <Layer2 />
      <div className="absolute bottom-[0.57px] h-[17.888px] left-0 w-[57.183px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="var(--fill-0, #323429)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="absolute h-[95px] left-[-6916px] opacity-0 top-[31px] w-[375px]" data-name="mobile-nav">
      <div className="absolute inset-[0_0_53.94%_0]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-0 border-[#979797] border-solid inset-0 pointer-events-none" />
      </div>
      <Nav />
      <ProseLogoRgbNoir />
      <p className="[text-decoration-skip-ink:none] absolute decoration-solid font-['Simplon_Norm:Regular',sans-serif] inset-[10.36%_6.4%_64.3%_6.4%] leading-[22px] not-italic text-[12px] text-center text-white tracking-[0.5px] underline">Get 50% off haircare + free gift, or try skincare on Prose</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="contents pointer-events-auto sticky top-0">
      <MobileNav />
    </div>
  );
}

function OrderSummaryLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[156px]" data-name="Order Summary Label">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[16px] w-full">Today’s Total (pre-tax)</p>
    </div>
  );
}

function Strikethorugh() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center line-through relative shrink-0 text-[#6c6c6c] tracking-[0.32px]" data-name="strikethorugh">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">150</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">.00</p>
    </div>
  );
}

function DiscountedPriceDetails() {
  return (
    <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center p-[4px] relative rounded-[6px] shrink-0 text-[#161716] text-right" data-name="Discounted Price Details">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">108</p>
      <p className="relative shrink-0">.00</p>
    </div>
  );
}

function OrderSummaryPriceDetails() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[1.5] not-italic relative shrink-0 text-[16px] whitespace-nowrap" data-name="Order Summary Price Details">
      <Strikethorugh />
      <DiscountedPriceDetails />
    </div>
  );
}

function OrderSummaryPrice() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[139px]" data-name="Order Summary Price">
      <OrderSummaryPriceDetails />
    </div>
  );
}

function OrderSummaryRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[327px]" data-name="Order Summary Row">
      <OrderSummaryLabel />
      <OrderSummaryPrice />
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Order Summary">
      <OrderSummaryRow />
      <p className="font-['Simplon_Norm:Italic',sans-serif] italic leading-[1.5] relative shrink-0 text-[#323429] text-[10px] tracking-[0.2px] whitespace-pre">{`60% off + free shipping  applied!`}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative w-full">
        <OrderSummary />
        <div className="content-stretch flex h-[42px] items-start relative shrink-0" data-name="Cart Footer CTA">
          <div className="bg-[#323429] min-w-[327px] relative rounded-[60px] self-stretch shrink-0 w-[327px]" data-name="Buttons">
            <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[32px] py-[14px] relative size-full">
                <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">continue to cart (4 items)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoutineDefault() {
  return (
    <div className="bg-[#f9f7f2] content-stretch flex flex-col items-center relative size-full" data-name="Routine—Default">
      <Navigation />
      <Page />
      <div className="absolute bottom-0 h-[2102.8984375px] left-[-6916px] pointer-events-none top-[31px]">
        <Group5 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-center justify-center pb-[24px] pt-[8px] relative rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[375px]" data-name="Routine footer">
        <div className="bg-[#eaeaea] h-[4px] rounded-[4px] shrink-0 w-[42px]" data-name="home" />
        <Content />
      </div>
    </div>
  );
}