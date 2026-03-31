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
                        <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(249, 247, 242, 0.75)' }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 7C7 4.238 9.238 2 12 2C14.762 2 17 4.238 17 7V10H17.4C18.28 10 19 10.72 19 11.6V18.6C19 19.92 17.92 21 16.6 21H7.4C6.08 21 5 19.92 5 18.6V11.6C5 10.72 5.72 10 6.6 10H7V7ZM15 7V10H9V7C9 5.342 10.342 4 12 4C13.658 4 15 5.342 15 7ZM12 12.25C11.6023 12.2496 11.2164 12.3846 10.9057 12.6329C10.5951 12.8811 10.3782 13.2278 10.2909 13.6157C10.2036 14.0037 10.251 14.4098 10.4253 14.7672C10.5997 15.1246 10.8905 15.412 11.25 15.582V18C11.25 18.1989 11.329 18.3897 11.4697 18.5303C11.6103 18.671 11.8011 18.75 12 18.75C12.1989 18.75 12.3897 18.671 12.5303 18.5303C12.671 18.3897 12.75 18.1989 12.75 18V15.582C13.1095 15.412 13.4004 15.1246 13.5747 14.7672C13.749 14.4098 13.7964 14.0037 13.7091 13.6157C13.6218 13.2278 13.4049 12.8811 13.0943 12.6329C12.7836 12.3846 12.3977 12.2496 12 12.25Z" fill="black"/>
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