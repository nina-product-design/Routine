import { useState } from "react";
import { useNavigate } from "react-router";
import { productCatalog } from "../data/product-catalog";
import svgPaths from "../../imports/svg-2v3l6hopxe";
import { useCart } from "../context/cart-context";
import { cartImageDataMap } from "../data/cart-card-assets";
import imgToiletryBag from "figma:asset/9a0f1af7fa14dd4e72ad9cd85a2b569e25329f2c.png";
import imgProseProducts from "figma:asset/f065ce6884812a19ea915c647498674a16334e77.png";
import SubscriptionInfo from "../components/subscription-info";
import CartCard from "../components/cart-card";
import Upsell from "../components/upsell";
import CartOrderSummary from "../components/cart-order-summary";
import CartFooter from "../components/cart-footer";

// ─── Helper Functions ─────────────────────────────────────
function getFrequencyText(frequency: string, productId?: string): string {
  if (frequency === "buy-once") return "One-time purchase";
  const weeksMatch = frequency.match(/(\d+)/);
  if (weeksMatch) {
    const weeks = weeksMatch[1];
    // Check if this frequency matches the product's catalog-recommended frequency
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
function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <svg className="size-[24px]" fill="none" viewBox="0 0 23.15 23.15">
        <path d={svgPaths.p28ba7000} fill="black" />
      </svg>
    </button>
  );
}

// ─── Main Cart Page ───────────────────────────────────────
export default function Cart() {
  const navigate = useNavigate();
  const {
    routineCartIds,
    productFrequencies,
    handleDismissFromRoutine,
    getCurrentPrice,
  } = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(routineCartIds.map((id) => [id, 1]))
  );

  // Calculate subscription count (includes quantities)
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

  // Determine the discount message
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
    <div className="bg-white flex flex-col items-center h-screen w-[375px] mx-auto relative overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
          <CloseIcon onClick={() => navigate("/routine")} />
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
                onClick={() => navigate("/routine")}
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
              // State 1: Not eligible yet - show progress banner + gift details
              <div className="bg-[#f9f7f2] flex flex-col items-center overflow-clip rounded-[10px]">
                <div className="bg-[#e2d9c2] h-[27px] w-full flex items-center justify-center">
                  <p className="font-['Simplon_Mono',monospace] text-[12px] text-[#161716] text-center tracking-[0.96px] uppercase leading-[1.2]">
                    <span>Subscribe to </span>
                    <span className="font-['Simplon_Mono',monospace] font-medium">{3 - subscriptionCount} more product{3 - subscriptionCount !== 1 ? 's' : ''}</span>
                    <span> for your free gift</span>
                  </p>
                </div>
                <div className="flex gap-[8px] items-center p-[12px] w-full bg-[#f9f7f2]">
                  <div className="size-[56px] shrink-0 rounded-[6px] overflow-hidden">
                    <img src={imgToiletryBag} alt="Free Toiletry Bag" className="size-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#6c6c6c] tracking-[0.28px] leading-[1.5]">Free Toiletry Bag</p>
                    <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5]">Your travel-friendly toiletry bag — in 100% recycled cotton canvas ($30 value).</p>
                  </div>
                </div>
              </div>
            ) : (
              // State 2: Eligible - show compact green badge
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
              <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] tracking-[0.28px] leading-[1.5] cursor-pointer underline" onClick={() => navigate("/routine")}>Edit</p>
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
              onCheckout={() => navigate("/checkout")}
            />
          </div>
        </>
      )}
    </div>
  );
}