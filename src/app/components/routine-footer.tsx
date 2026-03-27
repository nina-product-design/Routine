import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgImage12 from "figma:asset/9a0f1af7fa14dd4e72ad9cd85a2b569e25329f2c.png";
import imgToiletryBag from "figma:asset/e87de096b8d731479f6a3293f72b7a5cf0254f46.png";

interface RoutineFooterProps {
  cartItems: { id: string; name: string; image: string; price: number; originalPrice: number; frequency: string }[];
  onContinueToCart: () => void;
  onRemoveItem?: (id: string) => void;
}

export default function RoutineFooter({ cartItems, onContinueToCart, onRemoveItem }: RoutineFooterProps) {
  const [expanded, setExpanded] = useState(false);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const totalItems = cartItems.length;
  const discountedTotal = cartItems.reduce((sum, p) => sum + p.price, 0);
  const originalTotal = cartItems.reduce((sum, p) => sum + p.originalPrice, 0);

  // Subscription items = items where price < originalPrice (i.e. 60% off applied)
  const subscriptionCount = cartItems.filter((p) => p.price < p.originalPrice).length;
  const hasDiscount = subscriptionCount >= 1;
  const hasFreeGift = subscriptionCount >= 3;

  // Determine the discount message
  const discountMessage = hasFreeGift
    ? "60% off + free shipping + free gift applied!"
    : hasDiscount
    ? "60% off + free shipping applied!"
    : null;

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 30; // minimum distance to trigger swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped up - expand
        setExpanded(true);
      } else {
        // Swiped down - collapse
        setExpanded(false);
      }
    }

    // Reset
    touchStartY.current = 0;
    touchEndY.current = 0;
  };

  return (
    <div
      className="bg-white flex flex-col gap-[12px] items-center justify-center pb-[24px] pt-[8px] rounded-t-[10px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.1)] w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Drag handle – tap to expand/collapse */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center justify-center w-full pt-[2px] pb-[2px] cursor-pointer bg-transparent border-none"
        aria-label={expanded ? "Collapse cart" : "Expand cart"}
      >
        <div className="bg-[#eaeaea] h-[4px] rounded-[4px] w-[42px]" />
      </button>

      <div className="w-full px-[24px] flex flex-col gap-[16px]">
        {/* Expanded item list */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-x-visible overflow-y-clip"
              onClick={() => setExpanded(false)}
            >
              <div className="flex flex-col gap-[4px] pb-[16px]">
                {/* GWP Tracker */}
                {subscriptionCount < 3 ? (
                  // Not eligible yet - dark banner with progress dots + gift preview
                  <div className="bg-[#f9f7f2] flex flex-col items-center overflow-clip mb-[12px] -mx-[24px]">
                    <div className="bg-[#4d523c] h-[40px] w-full flex items-center justify-center gap-[8px] px-[16px]">
                      <p className="font-['Simplon_Norm',sans-serif] font-medium text-[12px] text-white tracking-[0.24px] leading-[1.2] whitespace-nowrap">
                        Subscribe to <span className="font-bold">{3 - subscriptionCount} more item{3 - subscriptionCount !== 1 ? 's' : ''}</span> to get your free gift
                      </p>
                      <div className="flex gap-[4px] items-center shrink-0">
                        {[1, 2, 3].map((step) => (
                          <div
                            key={step}
                            className={`size-[16px] rounded-full flex items-center justify-center text-[10px] font-['Simplon_Norm',sans-serif] font-medium leading-none ${
                              step <= subscriptionCount
                                ? "bg-[#ecff92] text-[#161716]"
                                : "border border-white/50 text-white/50"
                            }`}
                          >
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-[12px] items-center px-[24px] py-[12px] w-full">
                      <div className="w-[64px] h-[64px] shrink-0 rounded-[6px] overflow-hidden relative">
                        <img src={imgImage12} alt="Free Toiletry Bag" className="size-full object-cover" />
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[18px] flex items-center justify-center" style={{ backgroundColor: 'rgba(249, 247, 242, 0.75)' }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.3202 11.0399H15.3602V9.11993C15.3602 7.24793 13.8722 5.75993 12.0002 5.75993C10.1282 5.75993 8.64018 7.24793 8.64018 9.11993V11.0399H7.68018V9.11993C7.68018 6.71993 9.60018 4.79993 12.0002 4.79993C14.4002 4.79993 16.3202 6.71993 16.3202 9.11993V11.0399Z" fill="#161716"/>
                            <path d="M15.8402 19.2002H8.16021C7.34421 19.2002 6.72021 18.5762 6.72021 17.7602V12.0002C6.72021 11.1842 7.34421 10.5602 8.16021 10.5602H15.8402C16.6562 10.5602 17.2802 11.1842 17.2802 12.0002V17.7602C17.2802 18.5762 16.6562 19.2002 15.8402 19.2002ZM8.16021 11.5202C7.87221 11.5202 7.68021 11.7122 7.68021 12.0002V17.7602C7.68021 18.0482 7.87221 18.2402 8.16021 18.2402H15.8402C16.1282 18.2402 16.3202 18.0482 16.3202 17.7602V12.0002C16.3202 11.7122 16.1282 11.5202 15.8402 11.5202H8.16021Z" fill="#161716"/>
                            <path d="M11.9996 14.4C12.5297 14.4 12.9596 13.9702 12.9596 13.44C12.9596 12.9098 12.5297 12.48 11.9996 12.48C11.4694 12.48 11.0396 12.9098 11.0396 13.44C11.0396 13.9702 11.4694 14.4 11.9996 14.4Z" fill="#161716"/>
                            <path d="M12.2398 13.4398H11.7598L11.2798 16.3198H12.7198L12.2398 13.4398Z" fill="#161716"/>
                          </svg>
                        </div>
                      </div>
                      <p className="flex-1 font-['Simplon_Norm',sans-serif] italic text-[10px] text-[#6c6c6c] tracking-[0.2px] leading-[1.5]">
                        FREE travel-friendly toiletry bag — 100% recycled cotton ($30 value)
                      </p>
                    </div>
                  </div>
                ) : (
                  // State 2: Eligible - compact green banner
                  <div className="bg-[#ecff92] flex items-center justify-center overflow-clip rounded-[4px] h-[40px] mb-[12px]">
                    <p className="font-['Simplon_Norm',sans-serif] font-medium text-[12px] text-[#161716] text-center tracking-[0.24px] leading-[1.2]">
                      We've added your free gift to cart!
                    </p>
                  </div>
                )}
                
                <p className="font-['Simplon_Mono',monospace] font-medium text-[12px] text-[#323429] tracking-[0.96px] uppercase pb-[8px]">
                  IN YOUR CART
                </p>
                
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-[24px] gap-[8px]">
                    <p className="font-['Saol Text',serif] italic text-[16px] text-[#6c6c6c] tracking-[0.32px] leading-[1.5]">
                      Your cart is empty
                    </p>
                    <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5]">
                      Add items from your routine to get started.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Free Gift Item - Shows when eligible */}
                    {hasFreeGift && (
                      <div className="flex items-center gap-[12px] py-[6px] group">
                        {/* Thumbnail */}
                        <div className="size-[40px] rounded-[6px] overflow-hidden shrink-0 bg-[#f1ece0]">
                          <img src={imgImage12} alt="Toiletry Bag" className="size-full object-cover" />
                        </div>
                        {/* Name */}
                        <div className="flex flex-col flex-1 gap-[2px]">
                          <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#323429]">Toiletry Bag</p>
                        </div>
                        {/* FREE Price */}
                        <div className="flex gap-[8px] items-start shrink-0">
                          <div className="bg-[#ecff92] px-[4px] py-[1px] rounded-[4px]">
                            <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#161716]">
                              FREE
                            </p>
                          </div>
                          {/* Spacer to match X button width */}
                          <div className="w-[20px]" />
                        </div>
                      </div>
                    )}
                    
                    {cartItems.map((item) => {
                      const isDiscounted = item.price < item.originalPrice;
                      // Format frequency text
                      let frequencyText = "One-time purchase";
                      if (item.frequency !== "buy-once") {
                        const weeksMatch = item.frequency.match(/(\d+)/);
                        if (weeksMatch) {
                          frequencyText = `Auto-ships ${weeksMatch[1]} weeks`;
                        }
                      }
                      return (
                        <div key={item.id} className="flex items-start gap-[12px] py-[6px] group">
                          {/* Thumbnail */}
                          <div className="size-[40px] rounded-[6px] overflow-hidden shrink-0 bg-[#f1ece0]">
                            <img src={item.image} alt={item.name} className="size-full object-cover" />
                          </div>
                          {/* Name & Frequency */}
                          <div className="flex flex-col flex-1 gap-[2px]">
                            <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#323429]">{item.name}</p>
                            <p className="font-['Simplon_Norm',sans-serif] text-[10px] text-[#6c6c6c] tracking-[0.2px]">{frequencyText}</p>
                          </div>
                          {/* Price & Remove Button */}
                          <div className="flex gap-[8px] items-start shrink-0">
                            <div className="flex flex-col items-end">
                              {isDiscounted ? (
                                <>
                                  <div className="bg-[#ecff92] px-[4px] py-[1px] rounded-[4px]">
                                    <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#161716]">
                                      ${item.price.toFixed(2)}
                                    </p>
                                  </div>
                                  <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] line-through tracking-[0.24px]">
                                    ${item.originalPrice.toFixed(2)}
                                  </p>
                                </>
                              ) : (
                                <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#323429]">
                                  ${item.price.toFixed(2)}
                                </p>
                              )}
                            </div>
                            {/* X Button */}
                            {onRemoveItem && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onRemoveItem(item.id);
                                }}
                                className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity p-[2px]"
                                aria-label={`Remove ${item.name}`}
                              >
                                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                                  <path d="M12 4L4 12M4 4L12 12" stroke="#323429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
              {/* Divider */}
              <div className="h-px bg-[#e0ddd6] w-full mb-[16px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Order Summary */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between cursor-pointer" 
            onClick={() => setExpanded((v) => !v)}
            onTouchEnd={(e) => {
              e.preventDefault();
              setExpanded((v) => !v);
            }}
          >
            <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-[#323429]" style={{ fontWeight: 500 }}>Today's Total (pre-tax)</p>
            {hasDiscount ? (
              <div className="flex gap-[8px] items-center leading-[1.5] text-[16px] whitespace-nowrap">
                <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-[#6c6c6c] line-through tracking-[0.32px]">${originalTotal.toFixed(2)}</p>
                <div className="bg-[#ecff92] p-[4px] rounded-[6px]">
                  <p className="font-['Simplon_Norm',sans-serif] font-medium text-[16px] text-[#161716]">${discountedTotal.toFixed(2)}</p>
                </div>
              </div>
            ) : (
              <p className="font-['Simplon_Norm',sans-serif] font-medium text-[16px] text-[#323429]">${discountedTotal.toFixed(2)}</p>
            )}
          </div>
          {discountMessage && (
            <p className="font-['Simplon_Norm',sans-serif] italic text-[10px] text-[#323429] tracking-[0.2px]">{discountMessage}</p>
          )}
        </div>

        {/* CTA */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onContinueToCart}
          className="bg-[#323429] w-full h-[42px] rounded-[60px] flex items-center justify-center cursor-pointer"
        >
          <p className="font-['Simplon_Mono',monospace] font-medium text-[12px] text-white text-center tracking-[0.96px] uppercase">
            CONTINUE TO CART ({totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"})
          </p>
        </motion.button>
      </div>
    </div>
  );
}