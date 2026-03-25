import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { productCatalog } from "../data/product-catalog";
import { cartImageDataMap } from "../data/cart-card-assets";
import { useCart } from "../context/cart-context";
import svgPaths from "../../imports/svg-2v3l6hopxe";
import imgToiletryBag from "figma:asset/9a0f1af7fa14dd4e72ad9cd85a2b569e25329f2c.png";
import imgProseProducts from "figma:asset/f065ce6884812a19ea915c647498674a16334e77.png";
import SubscriptionInfo from "./subscription-info";
import CartCard from "./cart-card";
import Upsell from "./upsell";
import CartOrderSummary from "./cart-order-summary";
import CartFooter from "./cart-footer";

// ─── Types ────────────────────────────────────────────────
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout?: () => void;
}

// ─── Helper Functions ─────────────────────────────────────
function getFrequencyText(frequency: string, productId?: string): string {
  if (frequency === "buy-once") return "One-time purchase";
  const weeksMatch = frequency.match(/(\d+)/);
  if (weeksMatch) {
    const weeks = weeksMatch[1];
    let isRecommended = false;
    if (productId) {
      const product = productCatalog[productId];
      if (product?.frequency) {
        const catalogMatch = product.frequency.match(/(\d+)/);
        isRecommended = !!catalogMatch && catalogMatch[1] === weeks;
      }
    }
    return `Auto-ships every ${weeks} weeks${isRecommended ? " (recommended)" : ""}`;
  }
  return "One-time purchase";
}

// ─── Icon Components ──────────────────────────────────────
function CloseIcon() {
  return (
    <svg className="size-[24px]" fill="none" viewBox="0 0 23.15 23.15">
      <path d={svgPaths.p28ba7000} fill="black" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function CartDrawer({
  isOpen,
  onClose,
  onCheckout,
}: CartDrawerProps) {
  const {
    routineCartIds,
    productFrequencies,
    handleDismissFromRoutine,
    getCurrentPrice,
  } = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(routineCartIds.map((id) => [id, 1]))
  );

  // Calculate subscription count (includes quantities — matches cart page)
  const subscriptionCount = routineCartIds.reduce((count, id) => {
    const product = productCatalog[id];
    const frequency = productFrequencies[id] || "4-weeks";
    if (frequency !== "buy-once" && product) {
      return count + (quantities[id] || 1);
    }
    return count;
  }, 0);

  // Calculate totals
  const subtotal = routineCartIds.reduce((sum, id) => {
    const product = productCatalog[id];
    if (!product) return sum;
    const currentPrice = getCurrentPrice(id, product.originalPrice, product.price);
    const qty = quantities[id] || 1;
    return sum + currentPrice * qty;
  }, 0);

  const originalSubtotal = routineCartIds.reduce((sum, id) => {
    const product = productCatalog[id];
    if (!product) return sum;
    const qty = quantities[id] || 1;
    return sum + product.originalPrice * qty;
  }, 0);

  const savings = originalSubtotal - subtotal;
  const hasDiscount = savings > 0;

  const hasSubscription = routineCartIds.some(
    (id) => productFrequencies[id] && productFrequencies[id] !== "buy-once"
  );
  const shippingCost = hasSubscription ? 0 : 6.95;
  const todaysTotal = subtotal + shippingCost;

  const hasFreeGift = subscriptionCount >= 3;
  const discountMessage = hasFreeGift
    ? "60% off + free shipping + free gift applied!"
    : hasSubscription
    ? "60% off + free shipping applied!"
    : null;

  const handleIncrement = (id: string) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id: string) => {
    const currentQty = quantities[id] || 1;
    if (currentQty <= 1) {
      handleRemove(id);
    } else {
      setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
    }
  };

  const handleRemove = (id: string) => {
    handleDismissFromRoutine(id);
    setQuantities((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - scoped to the 375px app container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={onClose}
            className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-black/40 z-[100]"
          />

          {/* Drawer clip container - constrains slide animation to 375px */}
          <div className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-[375px] z-[101] overflow-hidden pointer-events-none">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 bottom-0 left-0 w-[375px] bg-white overflow-y-auto overflow-x-hidden scrollbar-hide pointer-events-auto flex flex-col"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white z-10 border-b border-[#eaeaea] w-full">
                <div className="flex items-center justify-between px-[24px] py-[16px]">
                  <div className="flex gap-[8px] items-center">
                    <p className="font-['Simplon_Norm',sans-serif] font-medium text-[20px] text-black leading-[1.5]">Cart:</p>
                    <div className="flex gap-[4px] items-center">
                      <p className="font-['Simplon_Norm',sans-serif] font-medium text-[20px] text-black leading-[1.5]">{routineCartIds.length}</p>
                      <p className="font-['Simplon_Norm',sans-serif] font-medium text-[20px] text-black leading-[1.5]">items</p>
                    </div>
                  </div>
                  <button onClick={onClose} className="cursor-pointer">
                    <CloseIcon />
                  </button>
                </div>
              </div>

              {routineCartIds.length === 0 ? (
                <>
                  {/* Empty State: Italic Header */}
                  <div className="flex flex-col h-[80px] items-center justify-center px-[24px] py-[16px] w-full">
                    <p className="font-['Saol Text',serif] italic font-light text-[20px] text-black tracking-[0.4px] leading-[1.5]">It looks a bit empty here.</p>
                  </div>

                  {/* Empty State: Subscription Promo */}
                  <div className="flex flex-col items-start w-full">
                    {/* Product Image */}
                    <div className="relative w-full h-[241px] overflow-hidden">
                      <img
                        alt="Prose hair care products"
                        className="absolute h-[138%] left-0 max-w-none top-[-18%] w-full object-cover"
                        src={imgProseProducts}
                      />
                    </div>

                    {/* Text + CTA */}
                    <div className="bg-white flex flex-col gap-[24px] items-center justify-center p-[24px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-['Simplon_Mono','JetBrains_Mono',monospace] font-medium text-[12px] text-[#161716] tracking-[0.96px] uppercase leading-[1.2] w-full">Made just for you</p>
                        <p className="font-['Saol Text',serif] text-[20px] text-[#161716] tracking-[-0.6px] leading-[1.1] w-full">
                          Start your custom journey and get 60% off<span className="text-[13px]">*</span> + free shipping when you subscribe.
                        </p>
                      </div>
                      <button
                        onClick={onClose}
                        className="bg-[#f69371] h-[44px] w-full max-w-[492px] rounded-[60px] cursor-pointer flex items-center justify-center"
                      >
                        <p className="font-['Simplon_Mono','JetBrains_Mono',monospace] font-medium text-[12px] text-[#323429] text-center tracking-[0.96px] uppercase leading-[1.2]">Shop your routine</p>
                      </button>
                      <p className="font-['Simplon_Norm','Inter',sans-serif] italic text-[10px] text-[#6c6c6c] tracking-[0.2px] leading-[1.5] w-full">*offer only valid for first subscription, 15% off reoccurring</p>
                    </div>
                  </div>

                  {/* Upsell Carousel */}
                  <Upsell />
                </>
              ) : (
                <>
                  {/* GWP Tracker */}
                  <div className="px-[24px] pt-[16px] w-full">
                    {subscriptionCount < 3 ? (
                      <div className="bg-[#f9f7f2] flex flex-col items-center overflow-clip rounded-[10px]">
                        <div className="bg-[#e2d9c2] h-[27px] w-full flex items-center justify-center">
                          <p className="font-['Simplon_Mono',monospace] text-[10px] text-[#161716] text-center tracking-[0.8px] uppercase leading-[1.2]">
                            Subscribe to 3 products for your free gift
                          </p>
                        </div>
                        <div className="flex gap-[16px] items-center px-[16px] py-[8px] w-full">
                          <div className="opacity-50 shrink-0 size-[56px] relative">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img src={imgToiletryBag} alt="Free Toiletry Bag" className="absolute h-[111.54%] left-[-0.19%] max-w-none top-[-3.85%] w-[100.38%]" />
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
                      <div className="bg-[#ecff92] flex items-center justify-center overflow-clip rounded-[4px] h-[27px]">
                        <p className="font-['Simplon_Mono',monospace] text-[12px] text-[#161716] text-center tracking-[0.96px] uppercase leading-[1.2]">
                          <span>We've</span>
                          <span className="font-['Simplon_Mono',monospace] font-medium"> added your free gift</span>
                          <span> to cart!</span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Your Routine Section */}
                  <div className="px-[24px] w-full">
                    {routineCartIds.length > 0 && (
                      <div className="flex items-center justify-between py-[16px] border-b border-[#eaeaea]">
                        <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-[#161716] tracking-[0.32px] leading-[1.5]">Your Routine</p>
                        <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] tracking-[0.28px] leading-[1.5] cursor-pointer underline" onClick={onClose}>Edit</p>
                      </div>
                    )}

                    {/* Product List */}
                    <div className="flex flex-col">
                      {/* Free Gift Item - Shows when eligible */}
                      {subscriptionCount >= 3 && (
                        <CartCard
                          variant="gift"
                          image={imgToiletryBag}
                          name="Toiletry Bag"
                          subtitle="Your travel-friendly toiletry bag — in 100% recycled cotton canvas ($30 value)."
                          originalPrice={30}
                        />
                      )}

                      {routineCartIds.map((id) => {
                        const product = productCatalog[id];
                        if (!product) return null;

                        const frequency = productFrequencies[id] || "4-weeks";
                        const currentPrice = getCurrentPrice(id, product.originalPrice, product.price);
                        const qty = quantities[id] || 1;
                        const isDiscounted = currentPrice < product.originalPrice;
                        const imageData = cartImageDataMap[id];

                        return (
                          <CartCard
                            key={id}
                            image={imageData?.src || product.routineImage}
                            imageStyle={imageData?.style}
                            name={product.routineName}
                            subtitle={product.size}
                            description={getFrequencyText(frequency, id)}
                            currentPrice={currentPrice}
                            originalPrice={product.originalPrice}
                            isDiscounted={isDiscounted}
                            quantity={qty}
                            monogram={product.category === "brush" ? "ELS" : undefined}
                            onIncrement={() => handleIncrement(id)}
                            onDecrement={() => handleDecrement(id)}
                            onRemove={() => handleRemove(id)}
                          />
                        );
                      })}
                    </div>

                    {/* Perks Section */}
                    {routineCartIds.length > 0 && (
                      <SubscriptionInfo
                        variant={
                          routineCartIds.some(
                            (id) => productFrequencies[id] && productFrequencies[id] !== "buy-once"
                          )
                            ? "gettingPerks"
                            : "subscribeToday"
                        }
                      />
                    )}
                  </div>

                  {/* Upsell Carousel */}
                  <Upsell />

                  {/* Order Summary */}
                  <CartOrderSummary
                    itemCount={routineCartIds.length}
                    subtotal={subtotal}
                    savings={savings}
                    hasDiscount={hasDiscount}
                    total={subtotal}
                    hasSubscription={hasSubscription}
                  />

                  {/* Sticky Checkout Footer */}
                  <div className="sticky bottom-0 w-full z-50 bg-white">
                    <CartFooter
                      itemCount={routineCartIds.length}
                      discountedTotal={todaysTotal}
                      originalTotal={originalSubtotal + shippingCost}
                      hasDiscount={hasDiscount}
                      discountMessage={discountMessage}
                      onCheckout={onCheckout}
                    />
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}