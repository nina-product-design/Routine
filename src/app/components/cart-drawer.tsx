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

  const [monograms, setMonograms] = useState<Record<string, string>>({});

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
                  <div className="w-full">
                    {subscriptionCount < 3 ? (
                      <div className="bg-[#f9f7f2] flex flex-col items-center overflow-clip">
                        {/* Dark banner with progress dots */}
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
                        {/* Gift preview with lock overlay */}
                        <div className="flex gap-[12px] items-center px-[24px] py-[12px] w-full">
                          <div className="w-[64px] h-[64px] shrink-0 rounded-[6px] overflow-hidden relative">
                            <img src={imgToiletryBag} alt="Free Toiletry Bag" className="size-full object-cover" />
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
                      <div className="bg-[#ecff92] flex items-center justify-center overflow-clip h-[40px] w-full">
                        <p className="font-['Simplon_Norm',sans-serif] font-medium text-[12px] text-[#161716] text-center tracking-[0.24px] leading-[1.2]">
                          We've added your free gift to cart!
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
                            monogram={product.category === "brush" ? (monograms[id] ?? "") : undefined}
                            onMonogramChange={product.category === "brush" ? (val: string) => setMonograms(prev => ({ ...prev, [id]: val })) : undefined}
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