import svgPaths from "./svg-2v3l6hopxe";
import imgImage12 from "figma:asset/9a0f1af7fa14dd4e72ad9cd85a2b569e25329f2c.png";
import imgThumbnails from "figma:asset/5d630ba1673a424b863cec5709fad96c1b8ca39f.png";
import imgThumbnails1 from "figma:asset/4b2dc005157447681d1b83064526355b473b26ba.png";
import imgThumbnails2 from "figma:asset/b59e329e095792d0c450eb55149a54b82b0e30b3.png";
import imgThumbnails3 from "figma:asset/cb9dce9698ca4a4a33657c067546783f1f7c5b3a.png";
import imgThumbnails4 from "figma:asset/be516515f12a38475186feceb608b91fff23889a.png";
import imgImage from "figma:asset/01d9d0b7a7f4805527a2c0af4e1f812dd51d506f.png";
import imgImage1 from "figma:asset/86dc126b68c1c52bcfc5f0f3b4799ab3a5f082e7.png";
import imgImage2 from "figma:asset/b8dea7311feecbdbaa1e7608594418310c8b5e36.png";

function CartItemCount() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Cart Item Count">
      <p className="relative shrink-0">5</p>
      <p className="relative shrink-0">items</p>
    </div>
  );
}

function CartHeader() {
  return (
    <div className="content-stretch flex font-['Inter',sans-serif] font-medium gap-[8px] items-center leading-[1.5] not-italic relative shrink-0 text-[20px] text-black w-[202.5px] whitespace-nowrap" data-name="Cart Header">
      <p className="relative shrink-0">Cart:</p>
      <CartItemCount />
    </div>
  );
}

function CloseContainer() {
  return (
    <div className="relative shrink-0 size-[23.15px]" data-name="close container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.15 23.15">
        <g id="close container">
          <path d={svgPaths.p28ba7000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Icons">
      <CloseContainer />
    </div>
  );
}

function GiftInfo() {
  return (
    <div className="bg-[#e2d9c2] h-[27px] relative shrink-0 w-full" data-name="Gift Info">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[216px] py-[9px] relative size-full">
          <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161716] text-[0px] text-[12px] text-center tracking-[0.96px] uppercase whitespace-nowrap">
            <span className="leading-[1.2]">{`Subscribe to `}</span>
            <span className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2]">1 more item</span>
            <span className="leading-[1.2]">{` to unlock`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] items-start leading-[1.5] min-h-px min-w-px not-italic relative text-[#6c6c6c]">
      <p className="relative shrink-0 text-[14px] tracking-[0.28px] w-full">Free Toiletry Bag</p>
      <p className="relative shrink-0 text-[12px] tracking-[0.24px] w-full">Your travel-friendly toiletry bag — in 100% recycled cotton canvas ($30 value).</p>
    </div>
  );
}

function FreeGift() {
  return (
    <div className="relative shrink-0 w-full" data-name="free gift">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[56px]" data-name="image 12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[111.54%] left-[-0.19%] max-w-none top-[-3.85%] w-[100.38%]" src={imgImage12} />
            </div>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[16px] tracking-[0.32px] whitespace-nowrap">Your Routine</p>
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] tracking-[0.28px] whitespace-nowrap">Edit</p>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="product info">
      <p className="relative shrink-0 text-[#323429] text-[14px] tracking-[0.28px] w-full">Custom Shampoo</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">8.5 fl oz</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">Auto-delivers every 4 weeks (recommended)</p>
    </div>
  );
}

function Price() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="price">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$14.00</p>
    </div>
  );
}

function BasePrice() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="base price">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] line-through not-italic relative shrink-0 text-[#6c6c6c] text-[14px] text-right tracking-[0.28px] whitespace-nowrap">$35.00</p>
    </div>
  );
}

function PriceStack() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="price stack">
      <Price />
      <BasePrice />
    </div>
  );
}

function ProductDetails() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="product details">
      <ProductInfo />
      <PriceStack />
    </div>
  );
}

function SiAddDuotone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function SiAddDuotone1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18M12 18V6" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function Qyt() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0" data-name="QYT">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <SiAddDuotone />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px] w-[24px]">1</p>
        <SiAddDuotone1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b9c2a6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <ProductDetails />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Product Selections">
        <Qyt />
        <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c] text-[12px] text-right tracking-[0.24px] underline">Remove</p>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end py-[24px] relative shrink-0 w-full" data-name="Product">
      <div aria-hidden="true" className="absolute border-[#a6a6a6] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[93px] items-center relative shrink-0 w-[67px]" data-name="Thumbnails">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[137.2%] left-[-24.05%] max-w-none top-[-15.04%] w-[149.94%]" src={imgThumbnails} />
        </div>
      </div>
      <Content1 />
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="product info">
      <p className="relative shrink-0 text-[#323429] text-[14px] tracking-[0.28px] w-full">Custom Conditioner</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">8.5 fl oz</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">Auto-delivers every 4 weeks (recommended)</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="price">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$14.00</p>
    </div>
  );
}

function BasePrice1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="base price">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] line-through not-italic relative shrink-0 text-[#6c6c6c] text-[14px] text-right tracking-[0.28px] whitespace-nowrap">$35.00</p>
    </div>
  );
}

function PriceStack1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="price stack">
      <Price1 />
      <BasePrice1 />
    </div>
  );
}

function ProductDetails1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="product details">
      <ProductInfo1 />
      <PriceStack1 />
    </div>
  );
}

function SiAddDuotone2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function SiAddDuotone3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18M12 18V6" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function Qyt1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0" data-name="QYT">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <SiAddDuotone2 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px] w-[24px]">1</p>
        <SiAddDuotone3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b9c2a6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <ProductDetails1 />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Product Selections">
        <Qyt1 />
        <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c] text-[12px] text-right tracking-[0.24px] underline">Remove</p>
      </div>
    </div>
  );
}

function Product1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end py-[24px] relative shrink-0 w-full" data-name="Product">
      <div aria-hidden="true" className="absolute border-[#a6a6a6] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[93px] items-center relative shrink-0 w-[67px]" data-name="Thumbnails">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[136.64%] left-[-24.93%] max-w-none top-[-14.8%] w-[152.15%]" src={imgThumbnails1} />
        </div>
      </div>
      <Content2 />
    </div>
  );
}

function ProductInfo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="product info">
      <p className="relative shrink-0 text-[#323429] text-[14px] tracking-[0.28px] w-full">Scalp Mask</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">8.5 fl oz</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">One-time purchase</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="price">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$45.00</p>
    </div>
  );
}

function PriceStack2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="price stack">
      <Price2 />
    </div>
  );
}

function ProductDetails2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="product details">
      <ProductInfo2 />
      <PriceStack2 />
    </div>
  );
}

function SiAddDuotone4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function SiAddDuotone5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18M12 18V6" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function Qyt2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0" data-name="QYT">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <SiAddDuotone4 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px] w-[24px]">1</p>
        <SiAddDuotone5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b9c2a6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <ProductDetails2 />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Product Selections">
        <Qyt2 />
        <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c] text-[12px] text-right tracking-[0.24px] underline">Remove</p>
      </div>
    </div>
  );
}

function Product2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end py-[24px] relative shrink-0 w-full" data-name="Product">
      <div aria-hidden="true" className="absolute border-[#a6a6a6] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[93px] items-center relative shrink-0 w-[67px]" data-name="Thumbnails">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[112.12%] left-[-12.06%] max-w-none top-[4.6%] w-[124.48%]" src={imgThumbnails2} />
        </div>
      </div>
      <Content3 />
    </div>
  );
}

function ProductInfo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="product info">
      <p className="relative shrink-0 text-[#323429] text-[14px] tracking-[0.28px] w-full">Boar Bristle Brush</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">8.75” x 2.5” x 1.5”</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">One-time purchase</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="price">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$72.00</p>
    </div>
  );
}

function PriceStack3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="price stack">
      <Price3 />
    </div>
  );
}

function ProductDetails3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="product details">
      <ProductInfo3 />
      <PriceStack3 />
    </div>
  );
}

function SiAddDuotone6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function SiAddDuotone7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18M12 18V6" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function Qyt3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0" data-name="QYT">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <SiAddDuotone6 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px] w-[24px]">1</p>
        <SiAddDuotone7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b9c2a6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Monogram() {
  return (
    <div className="h-[40px] relative rounded-[20px] shrink-0 w-[80px]" data-name="monogram">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px] w-[24px]">ELS</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9c2a6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <ProductDetails3 />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Product Selections">
        <Qyt3 />
        <Monogram />
        <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c] text-[12px] text-right tracking-[0.24px] underline">Remove</p>
      </div>
    </div>
  );
}

function Product3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end py-[24px] relative shrink-0 w-full" data-name="Product">
      <div aria-hidden="true" className="absolute border-[#a6a6a6] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[93px] items-center relative shrink-0 w-[67px]" data-name="Thumbnails">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.8%] left-[-17.63%] max-w-none top-[-10.4%] w-[135.27%]" src={imgThumbnails3} />
        </div>
      </div>
      <Content4 />
    </div>
  );
}

function ProductInfo4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="product info">
      <p className="relative shrink-0 text-[#323429] text-[14px] tracking-[0.28px] w-full">Maggie’s Hair Towel</p>
      <p className="relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-full">23” x 37” in</p>
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex flex-col items-end px-[4px] relative shrink-0" data-name="price">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$34.00</p>
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="top row">
      <ProductInfo4 />
      <Price4 />
    </div>
  );
}

function SiAddDuotone8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function SiAddDuotone9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:add-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:add-duotone">
          <path d="M6 12H18M12 18V6" id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function Qyt4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0" data-name="QYT">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <SiAddDuotone8 />
        <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px] w-[24px]">1</p>
        <SiAddDuotone9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b9c2a6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <TopRow />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="selections">
        <Qyt4 />
        <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#4d523c] text-[12px] text-right tracking-[0.24px] underline">Remove</p>
      </div>
    </div>
  );
}

function Product4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end py-[24px] relative shrink-0 w-full" data-name="Product">
      <div aria-hidden="true" className="absolute border-[#a6a6a6] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[93px] items-center relative shrink-0 w-[67px]" data-name="Thumbnails">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.61%] left-[-16.45%] max-w-none top-[-15.96%] w-[129.49%]" src={imgThumbnails4} />
        </div>
      </div>
      <Content5 />
    </div>
  );
}

function ProductInfo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="product info">
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[16px] tracking-[0.32px] whitespace-nowrap">You deleted Alexandria’s Custom Shampoo</p>
    </div>
  );
}

function TopRow1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="top row">
      <ProductInfo5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <TopRow1 />
    </div>
  );
}

function Product5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end py-[24px] relative shrink-0 w-full" data-name="Product">
      <Content6 />
      <div className="h-[21px] relative shrink-0 w-[327px]" data-name="CTA">
        <p className="absolute decoration-solid font-['Simplon_Norm:Regular',sans-serif] inset-0 leading-[1.5] not-italic text-[#323429] text-[14px] text-center tracking-[0.28px] underline">Undo</p>
      </div>
    </div>
  );
}

function Undo() {
  return (
    <div className="bg-[#f9f7f2] content-stretch flex flex-col h-[97px] items-start px-[24px] relative shrink-0 w-[375px]" data-name="undo">
      <Product5 />
    </div>
  );
}

function HairTowel() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="hair towel">
      <div className="bg-white content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[375px]" data-name="Product">
        <Product4 />
      </div>
      <Undo />
    </div>
  );
}

function Header1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="header">
      <div className="bg-[#ecff92] col-1 h-[12px] mix-blend-multiply ml-[106.5px] mt-[11px] row-1 w-[167px]" />
      <p className="col-1 font-['Simplon_Norm:Regular',sans-serif] ml-0 mt-0 not-italic relative row-1 text-[#323429] text-[16px] text-center tracking-[0.32px] w-[327px]">
        <span className="leading-[1.5] text-[#161716]">You’re getting</span>
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

function Icons1() {
  return (
    <div className="relative rounded-[30.87px] shrink-0 size-[21px]" data-name="Icons">
      <Group2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#ecff92] content-stretch flex items-center justify-center pb-[7px] pl-[7px] pr-[6px] pt-[6px] relative rounded-[17px] shrink-0 size-[34px]" data-name="icon">
      <Icons1 />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#323429] text-[14px] tracking-[1.12px] uppercase w-full">You might also like</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header">
      <Frame1 />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col h-[222.75px] items-start px-[13px] py-[12px] relative rounded-[10px] shrink-0 w-[175.5px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage} />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <div className="bg-[#323429] content-stretch flex h-[44px] items-center justify-center max-w-[492px] px-[32px] py-[16px] relative rounded-[60px] shrink-0 w-[88px]" data-name="Buttons">
        <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">ADD</p>
      </div>
    </div>
  );
}

function Price5() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] whitespace-nowrap" data-name="price">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">72</p>
      <p className="relative shrink-0">.00</p>
    </div>
  );
}

function Prices() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="prices">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[8px] relative w-full">
          <Price5 />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bottom">
      <Button />
      <Prices />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex flex-col h-[222.75px] items-start px-[13px] py-[12px] relative rounded-[10px] shrink-0 w-[175.5px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-[136.19%] left-[-7.14%] max-w-none top-[-9.59%] w-[114.27%]" src={imgImage1} />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <div className="bg-[#323429] content-stretch flex h-[44px] items-center justify-center max-w-[492px] px-[32px] py-[16px] relative rounded-[60px] shrink-0 w-[88px]" data-name="Buttons">
        <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">ADD</p>
      </div>
    </div>
  );
}

function Price6() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-start relative shrink-0 text-[#4d523c] text-[14px]" data-name="price">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">19</p>
      <p className="relative shrink-0">.60</p>
    </div>
  );
}

function Strikethrough() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-start relative shrink-0 text-[#6c6c6c] text-[12px] text-center tracking-[0.24px]" data-name="strikethrough">
      <p className="[text-decoration-skip-ink:none] decoration-solid line-through relative shrink-0">$</p>
      <p className="relative shrink-0">49</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid line-through relative shrink-0">.00</p>
    </div>
  );
}

function Prices1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="prices">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end leading-[1.5] not-italic pr-[8px] relative w-full whitespace-nowrap">
          <Price6 />
          <Strikethrough />
        </div>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bottom">
      <Button1 />
      <Prices1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col h-[222.75px] items-start px-[13px] py-[12px] relative rounded-[10px] shrink-0 w-[175.5px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage2} />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <div className="bg-[#323429] content-stretch flex h-[44px] items-center justify-center max-w-[492px] px-[32px] py-[16px] relative rounded-[60px] shrink-0 w-[88px]" data-name="Buttons">
        <p className="flex-[1_0_0] font-['Simplon_Mono:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">ADD</p>
      </div>
    </div>
  );
}

function Price7() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] whitespace-nowrap" data-name="price">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">52</p>
      <p className="relative shrink-0">.00</p>
    </div>
  );
}

function Prices2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="prices">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[8px] relative w-full">
          <Price7 />
        </div>
      </div>
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bottom">
      <Button2 />
      <Prices2 />
    </div>
  );
}

function Scroll() {
  return (
    <div className="h-[325px] overflow-x-auto overflow-y-clip relative shrink-0 w-[351px]" data-name="scroll">
      <div className="absolute content-stretch flex gap-[12px] items-start left-0 pr-[12px] top-0" data-name="carousel">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[175.5px]" data-name="card base">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="product cards">
            <Image />
          </div>
          <p className="font-['Simplon_Norm:Medium',sans-serif] h-[42px] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] w-[175.5px]">Boar Brush</p>
          <Bottom />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[175.5px]" data-name="card base">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="product cards">
            <Image1 />
          </div>
          <p className="font-['Simplon_Norm:Medium',sans-serif] h-[42px] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] w-[175.5px]">Custom Hair Oil</p>
          <Bottom1 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[175.5px]" data-name="card base">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="product cards">
            <Image2 />
          </div>
          <p className="font-['Simplon_Norm:Medium',sans-serif] h-[42px] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[14px] w-[175.5px]">Corsica Candle</p>
          <Bottom2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-right whitespace-nowrap">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">150</p>
      <p className="relative shrink-0">.00</p>
    </div>
  );
}

function Subtotal() {
  return (
    <div className="relative shrink-0 w-full" data-name="subtotal">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] gap-[8px] items-center leading-[1.5] not-italic pr-[4px] pt-[8px] relative text-[#161716] text-[14px] tracking-[0.28px] w-full">
          <p className="flex-[1_0_0] min-h-px min-w-px relative">Subtotal (4 items)</p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-right whitespace-nowrap">
      <p className="relative shrink-0">-$</p>
      <p className="relative shrink-0">42</p>
      <p className="relative shrink-0">.00</p>
    </div>
  );
}

function Savings() {
  return (
    <div className="relative shrink-0 w-full" data-name="savings">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] gap-[8px] items-center leading-[1.5] not-italic pr-[4px] relative text-[#161716] text-[14px] tracking-[0.28px] w-full">
          <p className="flex-[1_0_0] min-h-px min-w-px relative">Total savings [60% off)</p>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Shipping() {
  return (
    <div className="relative shrink-0 w-full" data-name="shipping">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] gap-[8px] items-center leading-[1.5] not-italic pr-[4px] relative text-[#161716] text-[14px] tracking-[0.28px] w-full">
          <p className="flex-[1_0_0] min-h-px min-w-px relative">Shipping</p>
          <p className="relative shrink-0 text-right whitespace-nowrap">FREE</p>
        </div>
      </div>
    </div>
  );
}

function Taxes() {
  return (
    <div className="relative shrink-0 w-full" data-name="taxes">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.5] pr-[4px] relative text-[#161716] text-[14px] tracking-[0.28px] w-full">
          <p className="flex-[1_0_0] font-['Simplon_Norm:Regular',sans-serif] min-h-px min-w-px not-italic relative">Taxes</p>
          <p className="font-['Simplon_Norm:Italic',sans-serif] italic relative shrink-0 text-right whitespace-nowrap">Calculated at checkout</p>
        </div>
      </div>
    </div>
  );
}

function Price8() {
  return (
    <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center leading-[1.5] not-italic px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap" data-name="price">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">108</p>
      <p className="relative shrink-0">.00</p>
    </div>
  );
}

function Total() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[12px] relative shrink-0 w-full" data-name="total">
      <div aria-hidden="true" className="absolute border-[#6c6c6c] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#161716] text-[14px]">Today’s total (pre-tax)</p>
      <Price8 />
    </div>
  );
}

function Contents() {
  return (
    <div className="relative shrink-0 w-full" data-name="contents">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[12px] px-[24px] relative w-full">
        <Subtotal />
        <Savings />
        <Shipping />
        <Taxes />
        <Total />
        <div className="content-stretch flex items-center justify-center pb-[4px] pt-[8px] relative shrink-0 w-[327px]" data-name="Checkout button">
          <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#6c6c6c] text-[10px] text-center tracking-[0.8px] uppercase whitespace-nowrap">{`LOVE YOUR FIRST ORDER (OR IT'S ON US)`}</p>
        </div>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-[375px]" data-name="summary">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <Contents />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="content">
      <div className="relative shrink-0 w-full" data-name="GWP">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center pb-[8px] pt-[16px] px-[24px] relative w-full">
            <div className="bg-[#f9f7f2] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="GWP">
              <GiftInfo />
              <FreeGift />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[375px]" data-name="reroute link container">
        <Header />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="cart cards">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Product />
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="cart cards">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Product1 />
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="cart cards">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Product2 />
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="cart cards">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Product3 />
        </div>
      </div>
      <HairTowel />
      <div className="content-stretch flex flex-col gap-[16px] items-center py-[16px] relative shrink-0 w-full" data-name="subcription info">
        <Header1 />
        <Props />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[48px] pl-[24px] pt-[24px] relative shrink-0" data-name="carousel container">
        <Header2 />
        <Scroll />
      </div>
      <Summary />
    </div>
  );
}

export default function Cart() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Cart">
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
      <div className="bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[375px]" data-name="cart header">
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
        <CartHeader />
        <Icons />
      </div>
      <Content />
    </div>
  );
}