interface CartOrderSummaryProps {
  itemCount: number;
  subtotal: number;
  savings: number;
  hasDiscount: boolean;
  total: number;
  hasSubscription: boolean;
}

export default function CartOrderSummary({
  itemCount,
  subtotal,
  savings,
  hasDiscount,
  total,
  hasSubscription,
}: CartOrderSummaryProps) {
  const shippingCost = hasSubscription ? 0 : 6.95;
  const todaysTotal = total + shippingCost;
  return (
    <div className="flex flex-col pt-[12px] px-[24px] w-full">
      {/* Subtotal */}
      <div className="flex items-center gap-[8px] pr-[4px] pt-[8px]">
        <p className="flex-1 font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] tracking-[0.28px] leading-[1.5]">
          Subtotal ({itemCount} items)
        </p>
        <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] leading-[1.5] text-right whitespace-nowrap">
          ${subtotal.toFixed(2)}
        </p>
      </div>

      {/* Savings */}
      {hasDiscount && (
        <div className="flex items-center gap-[8px] pr-[4px] pt-[12px]">
          <p className="flex-1 font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] tracking-[0.28px] leading-[1.5]">
            Total savings (60% off)
          </p>
          <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] leading-[1.5] text-right whitespace-nowrap">
            -${savings.toFixed(2)}
          </p>
        </div>
      )}

      {/* Shipping */}
      <div className="flex items-center gap-[8px] pr-[4px] pt-[12px]">
        <p className="flex-1 font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] tracking-[0.28px] leading-[1.5]">
          Shipping
        </p>
        <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] leading-[1.5] text-right whitespace-nowrap">
          {hasSubscription ? "FREE" : "$6.95"}
        </p>
      </div>

      {/* Taxes */}
      <div className="flex items-center gap-[8px] pr-[4px] pt-[12px]">
        <p className="flex-1 font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] tracking-[0.28px] leading-[1.5]">
          Taxes
        </p>
        <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] leading-[1.5] text-right whitespace-nowrap italic">
          Calculated at checkout
        </p>
      </div>

      {/* Today's Total */}
      <div className="relative flex items-center gap-[8px] pt-[12px] pb-[8px] mt-[12px]">
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 border-t border-[#6c6c6c]"
          style={{ borderTopWidth: "0.5px" }}
        />
        <p className="flex-1 font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">
          Today's total (pre-tax)
        </p>
        <div className="bg-[#ecff92] rounded-[4px] px-[4px] flex items-center justify-center">
          <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5] text-right whitespace-nowrap">
            ${todaysTotal.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div className="flex items-center justify-center pt-[8px] pb-[48px]">
        <p className="font-['Simplon_Mono',monospace] text-[10px] text-[#6c6c6c] tracking-[0.8px] leading-[1.2] uppercase text-center whitespace-nowrap">
          {`LOVE YOUR FIRST ORDER (OR IT'S ON US)`}
        </p>
      </div>
    </div>
  );
}