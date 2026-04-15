function OrderSummaryLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[156px]" data-name="Order Summary Label">
      <p className="font-['Inter',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[16px] w-full">Today's Total (pre-tax)</p>
    </div>
  );
}

function Strikethorugh() {
  return (
    <div className="content-stretch flex font-['Inter',sans-serif] items-center line-through relative shrink-0 text-[#6c6c6c] tracking-[0.32px]" data-name="strikethorugh">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">150</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">.00</p>
    </div>
  );
}

function DiscountedPriceDetails() {
  return (
    <div className="bg-[#ecff92] content-stretch flex font-['Inter',sans-serif] font-medium items-center justify-center p-[4px] relative rounded-[6px] shrink-0 text-[#161716] text-right" data-name="Discounted Price Details">
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
      <p className="font-['Inter',sans-serif] italic leading-[1.5] relative shrink-0 text-[#323429] text-[10px] tracking-[0.2px] whitespace-pre">{`60% off + free shipping  applied!`}</p>
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
                <p className="flex-[1_0_0] font-['Simplon Mono',monospace] font-medium leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-center text-white tracking-[0.96px] uppercase">continue to cart (4 items)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoutineFooter() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center justify-center pb-[24px] pt-[8px] relative rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.1)] size-full" data-name="Routine footer">
      <div className="bg-[#eaeaea] h-[4px] rounded-[4px] shrink-0 w-[42px]" data-name="home" />
      <Content />
    </div>
  );
}
