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
              className="overflow-hidden"
              onClick={() => setExpanded(false)}
            >
              <div className="flex flex-col gap-[4px] pb-[16px]">
                {/* GWP Tracker */}
                {subscriptionCount < 3 ? (
                  // Not eligible yet - show SomeSub or NonSub variant
                  <div className="bg-[#f9f7f2] flex flex-col items-center overflow-clip rounded-[10px] mb-[12px]">
                    <div className="bg-[#e2d9c2] h-[27px] w-full flex items-center justify-center">
                      <p className="font-['Simplon_Mono',monospace] text-[10px] text-[#161716] text-center tracking-[0.8px] uppercase leading-[1.2]">
                        Subscribe to 3 products for your free gift
                      </p>
                    </div>
                    <div className="flex gap-[16px] items-center px-[16px] py-[8px] w-full">
                      <div className="opacity-50 shrink-0 size-[56px] relative">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img src={imgImage12} alt="Free Toiletry Bag" className="absolute h-[111.54%] left-[-0.19%] max-w-none top-[-3.85%] w-[100.38%]" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px] items-start">
                        <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px] leading-[1.5] w-full">
                          <span className="font-medium">{`You have subscribed to ${subscriptionCount} of 3 items `}</span>
                          <span className="text-[#6c6c6c]">
                            <br />
                            FREE Toiletry bag - $30 value
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // State 2: Eligible - show compact green badge only
                  <div className="bg-[#ecff92] flex items-center justify-center overflow-clip rounded-[4px] h-[27px] mb-[12px]">
                    <p className="font-['Simplon_Mono',monospace] text-[12px] text-[#161716] text-center tracking-[0.96px] uppercase leading-[1.2]">
                      <span>We've</span>
                      <span className="font-['Simplon_Mono',monospace] font-medium"> added your free gift</span>
                      <span> to cart!</span>
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