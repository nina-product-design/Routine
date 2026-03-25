interface CartFooterProps {
  itemCount: number;
  discountedTotal: number;
  originalTotal: number;
  hasDiscount: boolean;
  discountMessage: string | null;
  onCheckout?: () => void;
}

export default function CartFooter({
  itemCount,
  discountedTotal,
  originalTotal,
  hasDiscount,
  discountMessage,
  onCheckout,
}: CartFooterProps) {
  return (
    <div className="bg-white flex flex-col gap-[12px] items-center justify-center pb-[24px] pt-[8px] rounded-t-[10px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.1)] w-full">
      <div className="w-full px-[24px] flex flex-col gap-[16px]">
        {/* Order Summary */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-[#323429]" style={{ fontWeight: 500 }}>
              Today's Total (pre-tax)
            </p>
            {hasDiscount ? (
              <div className="flex gap-[8px] items-center leading-[1.5] text-[16px] whitespace-nowrap">
                <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-[#6c6c6c] line-through tracking-[0.32px]">
                  ${originalTotal.toFixed(2)}
                </p>
                <div className="bg-[#ecff92] p-[4px] rounded-[6px]">
                  <p className="font-['Simplon_Norm',sans-serif] font-medium text-[16px] text-[#161716]">
                    ${discountedTotal.toFixed(2)}
                  </p>
                </div>
              </div>
            ) : (
              <p className="font-['Simplon_Norm',sans-serif] font-medium text-[16px] text-[#323429]">
                ${discountedTotal.toFixed(2)}
              </p>
            )}
          </div>
          {discountMessage && (
            <p className="font-['Simplon_Norm',sans-serif] italic text-[10px] text-[#323429] tracking-[0.2px]">
              {discountMessage}
            </p>
          )}
        </div>

        {/* CTA */}
        <button
          className="bg-[#f69371] w-full rounded-[60px] flex items-center justify-center cursor-pointer px-[32px] py-[14px]"
          onClick={onCheckout}
        >
          <p className="font-['Simplon_Mono',monospace] font-medium text-[12px] text-[#323429] text-center tracking-[0.96px] uppercase">
            CHECKOUT ({itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"})
          </p>
        </button>
      </div>
    </div>
  );
}