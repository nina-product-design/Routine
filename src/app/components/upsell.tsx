// ─── Upsell Carousel Component ────────────────────────────
// Horizontally scrollable product carousel for the cart page,
// showing products not currently in the routine.

import { useRef } from "react";
import { productCatalog } from "../data/product-catalog";
import { useCart } from "../context/cart-context";

export default function Upsell() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { upsellIds, removedFromRoutineIds, handleAddToRoutine } = useCart();

  // Priority sorting:
  // 1. Hair towel
  // 2. Recommended products that were removed from routine
  // 3. Brushes
  // 4. Candles
  // 5. Remaining haircare
  const sortedUpsellIds = [...upsellIds].sort((a, b) => {
    const getCategoryPriority = (id: string) => {
      const product = productCatalog[id];
      if (!product) return 99;
      // Hair towel always first
      if (id === "hair-towel") return 0;
      // Recommended products removed from routine
      if (removedFromRoutineIds.has(id) && product.isRecommended) return 1;
      // Brushes
      if (product.category === "brush") return 2;
      // Candles
      if (product.category === "candles") return 3;
      // Remaining haircare
      if (product.category === "haircare") return 4;
      // Everything else
      return 5;
    };

    const priorityA = getCategoryPriority(a);
    const priorityB = getCategoryPriority(b);

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    const productA = productCatalog[a];
    const productB = productCatalog[b];
    return (productA?.carouselName || "").localeCompare(productB?.carouselName || "");
  });

  // Show only 4 products at a time
  const visibleIds = sortedUpsellIds.slice(0, 4);

  if (visibleIds.length === 0) return null;

  return (
    <div className="flex flex-col gap-[12px] py-[24px] w-full">
      <div className="pl-[24px]">
        <p className="font-['Simplon_Mono',monospace] font-medium text-[14px] text-[#323429] tracking-[1.12px] uppercase">
          YOU MIGHT ALSO LIKE
        </p>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto w-full scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-[12px] pl-[24px] pr-[24px]">
          {visibleIds.map((id) => {
            const product = productCatalog[id];
            if (!product) return null;
            return (
              <div key={id} className="flex flex-col gap-[8px] shrink-0 w-[175.5px]">
                <div className="h-[222.75px] rounded-[10px] overflow-hidden relative">
                  <img
                    alt={product.carouselName}
                    className="absolute inset-0 object-cover size-full"
                    src={product.carouselImage}
                  />
                  {(product.upsellTag || product.isRecommended) && (
                    <div className="absolute left-[13px] top-[12px] backdrop-blur-[2px] bg-white/50 px-[12px] py-[4px] rounded-[20px]">
                      <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#4d523c] tracking-[0.24px] leading-[1.5] whitespace-nowrap">
                        {product.isRecommended ? "Recommended" : product.upsellTag}
                      </p>
                    </div>
                  )}
                </div>
                <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#4d523c] leading-[1.5] h-[42px]">
                  {product.carouselName}
                </p>
                <div className="flex items-center justify-between w-full">
                  <button
                    onClick={() => handleAddToRoutine(id)}
                    className="cursor-pointer shrink-0"
                  >
                    <div className="flex h-[44px] items-center justify-center px-[32px] py-[16px] rounded-[60px] w-[88px] bg-[#323429]">
                      <p className="font-['Simplon_Mono',monospace] font-medium text-[12px] text-white text-center tracking-[0.96px] uppercase">
                        ADD
                      </p>
                    </div>
                  </button>
                  <div className="flex flex-col items-end pr-[8px]">
                    <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#4d523c]">
                      ${product.price.toFixed(2)}
                    </p>
                    {product.price < product.originalPrice && (
                      <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] line-through tracking-[0.24px]">
                        ${product.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}