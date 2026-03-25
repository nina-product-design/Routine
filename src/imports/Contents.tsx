function Frame() {
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
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
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
          <Frame1 />
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

function Price() {
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
      <Price />
    </div>
  );
}

export default function Contents() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[12px] px-[24px] relative size-full" data-name="contents">
      <Subtotal />
      <Savings />
      <Shipping />
      <Taxes />
      <Total />
      <div className="content-stretch flex items-center justify-center pb-[4px] pt-[8px] relative shrink-0 w-[327px]" data-name="Checkout button">
        <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#6c6c6c] text-[10px] text-center tracking-[0.8px] uppercase whitespace-nowrap">{`LOVE YOUR FIRST ORDER (OR IT'S ON US)`}</p>
      </div>
    </div>
  );
}