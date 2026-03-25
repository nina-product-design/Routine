import svgPaths from "./svg-4ieabqkopk";
import imgImage6 from "figma:asset/14f4d70c6e174fd3d79a35a42dd28ab7549e0915.png";
import { imgImage5 } from "./svg-nciih";

function OrderSummary() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[164px]" data-name="Order summary">
      <p className="font-['Simplon_Mono:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#161716] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">order summary (6)</p>
      <div className="h-[3.6px] relative shrink-0 w-[7.2px]" data-name="/">
        <div className="absolute inset-[-13.89%_-6.94%_-19.64%_-6.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19963 4.80692">
            <path d={svgPaths.p20033800} id="/" stroke="var(--stroke-0, #323429)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Totals() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end leading-none not-italic relative shrink-0 text-[12px] text-right tracking-[0.96px] uppercase w-[124px] whitespace-nowrap" data-name="Totals">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Mono:Regular',sans-serif] line-through relative shrink-0 text-[#6c6c6c]">$199.00</p>
      <p className="font-['Simplon_Mono:Medium',sans-serif] relative shrink-0 text-[#161716]">$127.60</p>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex items-start justify-between py-[4px] relative shrink-0 w-[327px]" data-name="Details">
      <OrderSummary />
      <Totals />
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[327px]" data-name="Copy">
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161716] text-[0px] text-[12px] tracking-[0.24px] w-[319px]">
        <span className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5]">Reduce and reuse</span>
        <span className="leading-[1.5]">{` — Only your first subscription order includes pumps/droppers to reduce waste.`}</span>
      </p>
    </div>
  );
}

function CheckBoxes() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="check boxes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="check boxes">
          <rect fill="var(--fill-0, white)" height="27.5" width="27.5" x="0.25" y="0.25" />
          <rect height="27.5" stroke="var(--stroke-0, #A6A6A6)" strokeWidth="0.5" width="27.5" x="0.25" y="0.25" />
          <g id="Rectangle" />
        </g>
      </svg>
    </div>
  );
}

function Selection() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[327px]" data-name="Selection">
      <CheckBoxes />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[10px] tracking-[0.2px] w-[278px]">Check this box if you need pumps/droppers added to your future subscription orders.</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Navigation">
      <div className="bg-white content-stretch flex flex-col items-center py-[16px] relative shrink-0 w-[375px]" data-name="M-Summary tab">
        <Details />
      </div>
      <div className="bg-[#f1ece0] content-stretch flex flex-col gap-[12px] items-center justify-center py-[16px] relative shrink-0 w-[375px]" data-name="Reduce & Reuse">
        <Copy />
        <Selection />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="H6">
      <p className="font-['Saol_Text:Light',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#161716] text-[20px] tracking-[-0.6px] w-[314px]">Account details</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative">
      <p className="relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] w-full">First name*</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[16px] tracking-[0.32px] w-full">Maggie</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[16px] py-[8px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative">
      <p className="relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] w-full">Last name*</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[16px] tracking-[0.32px] w-full">Michaux</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[16px] py-[8px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative">
      <p className="relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] w-full">Email*</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[16px] tracking-[0.32px] w-full">maggiemich@gmail.com</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[16px] py-[8px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#6c6c6c] text-[16px] tracking-[0.32px] w-[min-content]">Phone numer*</p>
      <div className="absolute h-[17.894px] left-[266px] top-[3px] w-[29px]" data-name="Icon/Flag">
        <div className="absolute inset-[-50.3%_-82.05%_-56.48%_-58.62%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[17px_9px] mask-size-[29px_17.894px]" data-name="image 5" style={{ maskImage: `url('${imgImage5}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[16px] py-[8px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Input fields">
        <Frame1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Input fields">
        <Frame2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Input fields">
        <Frame4 />
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-[327px]" data-name="Input fields">
        <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-1px] pointer-events-none shadow-[2px_2px_3px_0px_#eaeaea]" />
        <Frame6 />
      </div>
    </div>
  );
}

function Selection1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Selection">
      <div className="bg-white relative shrink-0 size-[28px]" data-name="check boxes">
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none shadow-[2px_2px_3px_0px_#eaeaea]" />
      </div>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] w-[270px]">Text me with order updates</p>
    </div>
  );
}

function Selection2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Selection">
      <div className="bg-white relative shrink-0 size-[28px]" data-name="check boxes">
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0.5px] border-solid inset-0 pointer-events-none shadow-[2px_2px_3px_0px_#eaeaea]" />
      </div>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[12px] tracking-[0.24px] w-[270px]">Text me with news and offers</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Selection1 />
      <Selection2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6c6c6c] text-[0px] text-[12px] tracking-[0.24px] w-[314px]">
        <span className="leading-[1.5]">{`By checking the box(es) below and entering your phone number above, you consent to receive recurring account-related text messages (such as order and shipping confirmation, or error alerts) and/or marketing text messages (such as ads, promotions, and special offers) from Prose from time to time at the number provided, including messages sent using an automatic telephone dialing system. You further agree to our `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] underline">Terms of Use</span>
        <span className="leading-[1.5]">{`. Consent is not a condition of any purchase. You can opt-out at any time by replying STOP to any one of our messages or by logging into your Prose account and visiting your communication settings in your `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] underline">Account Details</span>
        <span className="leading-[1.5]">{`. Message and data rates may apply. Message frequency varies. Visit our `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] underline">Privacy Policy</span>
        <span className="leading-[1.5]">{` for more information.`}</span>
      </p>
      <Frame10 />
    </div>
  );
}

function Copy1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[327px]" data-name="Copy">
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Frame13() {
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
      <Frame13 />
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="M - Personal details">
        <H />
        <Copy1 />
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[327px]" data-name="M - Checkout CTA">
        <Express />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0">
      <Navigation />
      <Frame14 />
    </div>
  );
}

function Contents() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[146px]" data-name="Contents">
      <Frame8 />
    </div>
  );
}

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

function Navigation1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0" data-name="Navigation">
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

export default function Checkout() {
  return (
    <div className="bg-[#f9f7f2] relative size-full" data-name="checkout">
      <Contents />
      <Navigation1 />
    </div>
  );
}