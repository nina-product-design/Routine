import imgThumbnails from "figma:asset/cb9dce9698ca4a4a33657c067546783f1f7c5b3a.png";

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="product info">
      <p className="relative shrink-0 text-[#323429] text-[14px] tracking-[0.28px] w-full">Boar Bristle Brush</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">8.75” x 2.5” x 1.5”</p>
      <p className="relative shrink-0 text-[#6c6c6c] text-[12px] tracking-[0.24px] w-full">One-time purchase</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="price">
      <p className="font-['Simplon_Norm:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">$72.00</p>
    </div>
  );
}

function PriceStack() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="price stack">
      <Price />
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <ProductDetails />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Product Selections">
        <Qyt />
        <Monogram />
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
          <img alt="" className="absolute h-[121.8%] left-[-17.63%] max-w-none top-[-10.4%] w-[135.27%]" src={imgThumbnails} />
        </div>
      </div>
      <Content />
    </div>
  );
}

export default function CartCards() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[24px] relative size-full" data-name="cart cards">
      <Product />
    </div>
  );
}