import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-v59w0vx39v";
import { imgVector } from "../../imports/svg-5x5hw";
import { motion, AnimatePresence } from "motion/react";
import { RoutineProductCard, RoutineProductCardAccessory } from "../components/routine-product-card";
import { productCatalog } from "../data/product-catalog";
import { useDragScroll } from "../hooks/useDragScroll";
import HowItWorks from "../../imports/HowItWorks-155-115";
import RoutineFooter from "../components/routine-footer";
import { useCart } from "../context/cart-context";
import QuickViewModal from "../components/quick-view-modal";
import CartDrawer from "../components/cart-drawer";
import type { CatalogProduct } from "../data/product-catalog";
import { RoutineToastContainer, useRoutineToast } from "../components/routine-toast";

// ─── SVG Icon Components
function ProseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[22px] overflow-clip relative shrink-0 w-[62px] ${className}`}>
      <div className="absolute bottom-[0.5px] h-[17.999px] left-0 w-[62px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0001 17.9995">
          <g>
            <path d={svgPaths.p17b85140} fill="#323429" />
            <path d={svgPaths.p2b3a1500} fill="#323429" />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-[0.5px] h-[17.888px] left-0 w-[57.183px]">
        <svg className="absolute block size-full hidden" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881" data-name="logo">
          <path d={svgPaths.p135e4b00} fill="#323429" />
        </svg>
      </div>
    </div>
  );
}

function HamburgerIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px] flex flex-col justify-between cursor-pointer">
      <div className="h-[2px] w-full bg-[#323429] rounded-full" />
      <div className="h-[2px] w-full bg-[#323429] rounded-full" />
      <div className="h-[2px] w-full bg-[#323429] rounded-full" />
    </div>
  );
}

function BagIcon({ count }: { count: number }) {
  return (
    <div className="h-[22px] relative shrink-0 w-[24.444px] cursor-pointer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4444 22">
        <path d={svgPaths.p1f34900} fill="#323429" />
        <path d={svgPaths.pef2c440} fill="#323429" />
      </svg>
      {count > 0 && (
        <div className="absolute right-0 top-0 bg-[#f69371] rounded-full size-[16px] flex items-center justify-center">
          <span className="font-['Simplon Norm','Inter',sans-serif] text-white text-[9px] font-medium">{count}</span>
        </div>
      )}
    </div>
  );
}

function AccountIcon() {
  return (
    <div className="h-[22px] relative shrink-0 w-[21px] cursor-pointer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
        <path d={svgPaths.p39953400} fill="#323429" />
      </svg>
    </div>
  );
}

// ─── Goal Card Icons ──────────────────────────────────────
function ShieldIcon() {
  return (
    <div className="size-[24px] overflow-clip relative">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p39bf6f00} fill="#323429" fillRule="evenodd" />
      </svg>
      <div className="absolute inset-[-14.29%_42.42%_34.5%_-44.3%]" style={{ maskImage: `url('${imgVector}')`, WebkitMaskImage: `url('${imgVector}')`, maskSize: '24px 24px', WebkitMaskSize: '24px 24px', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: '10.633px 3.43px', WebkitMaskPosition: '10.633px 3.43px' }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4513 19.1491">
          <path clipRule="evenodd" d={svgPaths.p37caf3c0} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute inset-[38.2%_-45.63%_-14.81%_43.05%]" style={{ maskImage: `url('${imgVector}')`, WebkitMaskImage: `url('${imgVector}')`, maskSize: '24px 24px', WebkitMaskSize: '24px 24px', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: '-10.333px -9.168px', WebkitMaskPosition: '-10.333px -9.168px' }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6188 18.3851">
          <path clipRule="evenodd" d={svgPaths.p3d0b9a70} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function GrowthIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p3359a200} fill="#323429" fillRule="evenodd" />
      </svg>
      <div className="absolute h-[6.898px] left-[14.38px] top-[13.41px] w-[5.57px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56555 5.99219">
          <path clipRule="evenodd" d={svgPaths.p6683380} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute h-[7.156px] left-[4.09px] top-[13.36px] w-[6.32px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.31793 5.99219">
          <path clipRule="evenodd" d={svgPaths.p18955800} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute h-[6.344px] left-[3.7px] top-[5.12px] w-[4.523px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.51996 5.99219">
          <path clipRule="evenodd" d={svgPaths.pf551100} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute h-[6.672px] left-[14.77px] top-[5.06px] w-[5.102px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.10229 5.99219">
          <path clipRule="evenodd" d={svgPaths.p3006ec80} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute left-[8.26px] top-[6.37px] h-[11.586px] w-[7.102px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.10156 11.5859">
          <path clipRule="evenodd" d={svgPaths.p22904500} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function DropletIcon() {
  return (
    <div className="size-[24px] overflow-clip relative">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p23d57380} stroke="#323429" strokeWidth="0.514498" />
      </svg>
      <div className="absolute inset-[57.17%_51.41%_24.25%_34.3%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.72907 4.75793">
          <path d={svgPaths.p177ec800} stroke="#323429" strokeWidth="0.514498" />
        </svg>
      </div>
      <div className="absolute inset-[17.15%_27.11%_15.68%_27.15%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4905 16.739">
          <path d={svgPaths.p1e7cd700} stroke="#323429" strokeWidth="0.514498" />
        </svg>
      </div>
    </div>
  );
}

function LeafIcon() {
  return (
    <div className="size-[24px] overflow-clip relative">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p39bf6f00} fill="#323429" fillRule="evenodd" />
      </svg>
      <div className="absolute inset-[15.97%_24.5%_24.79%_27.4%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5443 14.2192">
          <path clipRule="evenodd" d={svgPaths.pa326d00} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute inset-[29.3%_38.42%_15.97%_28.37%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96917 13.1345">
          <path clipRule="evenodd" d={svgPaths.p24611c70} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function SparkleIcon() {
  return (
    <div className="size-[24px] overflow-clip relative">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p39bf6f00} fill="#323429" fillRule="evenodd" />
      </svg>
      <div className="absolute inset-[31.82%_31.06%_13.52%_14.28%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1188">
          <path clipRule="evenodd" d={svgPaths.p290c7300} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute inset-[14.43%_13.34%_30.91%_32%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1189">
          <path clipRule="evenodd" d={svgPaths.p1a9f2200} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute inset-[14.11%_31.38%_31.23%_13.95%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1188">
          <path clipRule="evenodd" d={svgPaths.p26dc3dd0} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute inset-[31.49%_13.67%_13.84%_31.67%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1188 13.1188">
          <path clipRule="evenodd" d={svgPaths.p26dc3dd0} fill="#323429" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── Goal Carousel ───────────────────────────────────────
const goalCards = [
  {
    icon: "shield",
    title: "Reduced damage",
    description: "Your curl pattern makes strands prone to breakage — so we selected protective polymers and botanical oils to shield hair from heat, UV, and daily stress before damage compounds.",
  },
  {
    icon: "growth",
    title: "Stronger growth",
    description: "Damage often starts at the scalp. Your formula includes scalp-stimulating actives and strengthening proteins chosen to build thicker, more resilient curls from root to tip.",
  },
  {
    icon: "droplet",
    title: "Improved hydration",
    description: "Dry, curly hair struggles to retain moisture. We chose deep-penetrating humectants and moisture-locking emollients to restore your hair's natural balance — without weighing curls down.",
  },
  {
    icon: "leaf",
    title: "Silky softness",
    description: "Damaged curls tend to feel rough and coarse. Your custom blend includes cuticle-smoothing agents and lightweight oils to coat each strand and restore the soft, defined texture you're after.",
  },
  {
    icon: "sparkle",
    title: "Less irritation",
    description: "A compromised scalp can slow your progress. We included calming botanicals and gentle exfoliants to address sensitivity, reduce redness, and keep your scalp balanced throughout your routine.",
  },
];

function GoalIcon({ type }: { type: string }) {
  switch (type) {
    case "shield": return <ShieldIcon />;
    case "growth": return <GrowthIcon />;
    case "droplet": return <DropletIcon />;
    case "leaf": return <LeafIcon />;
    case "sparkle": return <SparkleIcon />;
    default: return null;
  }
}

function GoalCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Enable click-and-drag scrolling
  useDragScroll(scrollRef);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 274 + 10;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, goalCards.length - 1));
  }, []);

  return (
    <div className="flex flex-col gap-[4px] w-full">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto w-full scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-[10px]">
          {goalCards.map((card) => (
            <div
              key={card.title}
              className="snap-start bg-white/70 rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] shrink-0 w-[274px] p-[16px] flex flex-col gap-[10px]"
            >
              <div className="flex gap-[10px] items-center">
                <div className="bg-[rgba(241,236,224,0.6)] rounded-full p-[6px]">
                  <GoalIcon type={card.icon} />
                </div>
                <p className="font-['Simplon Norm','Inter',sans-serif] font-medium text-[#323429] font-[Simplon_Norm] text-[16px]">{card.title}</p>
              </div>
              <p className="font-['Simplon Norm','Inter',sans-serif] text-[#4d523c] tracking-[0.24px] leading-[1.5] w-[221px] font-[Simplon_Norm] text-[14px]">{card.description}</p>
            </div>
          ))}
          <div className="shrink-0 w-[16px]" aria-hidden />
        </div>
      </div>
      <div className="flex gap-[6px] items-center justify-center h-[18px]">
        {goalCards.map((card, i) => (
          <div
            key={card.title}
            className={`rounded-full shrink-0 transition-all duration-300 ${i === activeIndex ? "bg-[#323429] w-[16px] h-[6px]" : "bg-[#d1cdc4] size-[6px]"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────
function TopNav({ cartCount, onBagClick }: { cartCount: number; onBagClick: () => void }) {
  return (
    <div className="bg-white flex items-center justify-between px-[24px] py-[16px] w-full sticky top-0 z-50">
      <HamburgerIcon />
      <div className="flex items-center justify-end w-[194px]">
        <ProseLogo className="hidden" />
        <div className="flex gap-[16px] items-start">
          <div onClick={onBagClick}>
            <BagIcon count={cartCount} />
          </div>
          <AccountIcon />
        </div>
      </div>
    </div>
  );
}

// ─── Main Home Page ───────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const {
    routineCartIds,
    upsellIds,
    dismissingIds,
    productFrequencies,
    handleAddToRoutine,
    handleDismissFromRoutine,
    handleFrequencyChange,
    getCurrentPrice,
  } = useCart();

  // Toast state
  const { toasts, showToast, dismissToast } = useRoutineToast();

  // Ref for upsell carousel scroll container
  const upsellScrollRef = useRef<HTMLDivElement>(null);

  // Enable click-and-drag scrolling for upsell carousel
  useDragScroll(upsellScrollRef);

  // Ref map for routine card elements (for scroll-to on add)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // Track the ID of the most recently added card (to scroll to)
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  // Track newly added IDs (instant appear, no expand animation)
  const newlyAddedIds = useRef<Set<string>>(new Set());

  // Quick View Modal state
  const [quickViewProduct, setQuickViewProduct] = useState<CatalogProduct | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Cart Drawer state
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const handleOpenQuickView = useCallback((productId: string) => {
    const product = productCatalog[productId];
    if (product) {
      setQuickViewProduct(product);
      setIsQuickViewOpen(true);
    }
  }, []);

  const handleCloseQuickView = useCallback(() => {
    setIsQuickViewOpen(false);
  }, []);

  // Scroll to newly added card once it renders
  useEffect(() => {
    if (!pendingScrollId) return;
    const el = cardRefs.current[pendingScrollId];
    if (el) {
      const scrollId = pendingScrollId;
      const timer = setTimeout(() => {
        const target = cardRefs.current[scrollId];
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 24;
          const start = window.scrollY;
          const distance = top - start;
          const duration = 600;
          let startTime: number | null = null;

          const easeInOut = (t: number) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + distance * easeInOut(progress));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
        newlyAddedIds.current.delete(scrollId);
        setPendingScrollId(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pendingScrollId, routineCartIds]);

  // Wrap handleAddToRoutine to track new IDs
  const handleAddWithTracking = useCallback((id: string) => {
    newlyAddedIds.current.add(id);
    handleAddToRoutine(id);
    setPendingScrollId(id);
    // Show "Added" toast
    const product = productCatalog[id];
    if (product) {
      showToast("added", product.routineName, product.carouselImage);
    }
  }, [handleAddToRoutine, showToast]);

  // Wrap handleDismissFromRoutine to show "Removed" toast
  const handleDismissWithToast = useCallback((id: string) => {
    const product = productCatalog[id];
    if (product) {
      showToast("removed", product.routineName, product.carouselImage);
    }
    handleDismissFromRoutine(id);
  }, [handleDismissFromRoutine, showToast]);

  // Calculate routine products
  const routineProducts = routineCartIds.map((id) => productCatalog[id]).filter(Boolean);
  const totalItems = routineProducts.length;

  // Auto-scroll ref for initial animation
  const pageRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="bg-[#f9f7f2] flex flex-col items-center min-h-screen w-[375px] mx-auto relative overflow-hidden">
      {/* Top Navigation */}
      <TopNav cartCount={totalItems} onBagClick={() => setIsCartDrawerOpen(true)} />

      {/* Scrollable content */}
      <div ref={pageRef} className="flex flex-col w-full pb-[140px] overflow-x-hidden">
        {/* Page Header */}
        <motion.div
          key="page-header"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-[8px] px-[24px] py-[24px] w-full"
        >
          <p className="font-['Saol Text',serif] text-[32px] text-[#323429] tracking-[-0.96px] leading-[1.1] font-normal">Meet your custom formulas, Maggie</p>
          <p className="font-['Simplon Norm','Inter',sans-serif] text-[14px] text-[#4d523c] tracking-[0.28px] leading-[1.5]">Crafted from hundreds of variables guided by your consultation.</p>
          {routineCartIds.some((id) => productFrequencies[id] && productFrequencies[id] !== "buy-once") && (
            <div className="bg-[#ecff92] px-[8px] py-[4px] rounded-[6px] self-start">
              <p className="font-['Simplon Mono','JetBrains Mono',monospace] font-medium text-[#323429] text-[13px]">
                60% off your order + free shipping
              </p>
            </div>
          )}
        </motion.div>

        {/* Routine Cart */}
        <div className="flex flex-col gap-[16px]">
          <AnimatePresence>
            {routineCartIds.map((id) => {
              const product = productCatalog[id];
              if (!product) return null;
              const isDismissing = dismissingIds.has(id);
              return (
                <motion.div
                  key={id}
                  ref={(el: HTMLDivElement | null) => { cardRefs.current[id] = el; }}
                  initial={newlyAddedIds.current.has(id) ? { opacity: 1, height: "auto" } : { opacity: 0, height: "auto" }}
                  animate={isDismissing ? { opacity: 0, height: 0 } : { opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex justify-center px-[24px] overflow-hidden"
                >
                  {product.cardType === "full" ? (
                    <RoutineProductCard
                      productName={product.routineName}
                      productImage={product.routineImage}
                      description={product.description as string}
                      size={product.size}
                      badge={product.badge}
                      concerns={product.concerns || []}
                      ingredients={product.ingredients || []}
                      preferences={product.preferences || "Fragrance free."}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      frequency={productFrequencies[id] || "4-weeks"}
                      discountLabel={product.discountLabel || "60% off first subscription order"}
                      onDismiss={() => handleDismissWithToast(id)}
                      onFrequencyChange={(freq) => handleFrequencyChange(id, freq)}
                      onQuickView={() => handleOpenQuickView(id)}
                    />
                  ) : (
                    <RoutineProductCardAccessory
                      productName={product.routineName}
                      productImage={product.routineImage}
                      description={product.description}
                      size={product.size}
                      badge={product.badge}
                      price={product.originalPrice}
                      onDismiss={() => handleDismissWithToast(id)}
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Empty State Message */}
          {routineCartIds.length === 0 && (
            <div className="w-full px-[24px] py-[32px] flex items-center justify-center">
              <p className="font-['Simplon Norm','Inter',sans-serif] text-[14px] text-[#4d523c] tracking-[0.28px] leading-[1.5] text-center">
                Your routine is empty. Add products from below to get started!
              </p>
            </div>
          )}
        </div>

        {/* Upsell Carousel */}
        {upsellIds.length > 0 && (
          <div className="flex flex-col gap-[12px] py-[48px] w-full">
            <div className="pl-[24px]">
              <p className="font-['Simplon Mono','JetBrains Mono',monospace] font-medium text-[14px] text-[#323429] tracking-[1.12px] uppercase font-[Simplon_Mono]">ADD TO YOUR ROUTINE</p>
            </div>
            <div
              ref={upsellScrollRef}
              className="overflow-x-auto w-full scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex gap-[12px] pl-[24px] pr-[24px]">
                {[...upsellIds].sort((a, b) => {
                  const productA = productCatalog[a];
                  const productB = productCatalog[b];
                  
                  // Define category priority order
                  const getCategoryPriority = (product: any) => {
                    if (product.category === "haircare" && product.isRecommended) return 0;
                    if (product.category === "haircare") return 1;
                    if (product.category === "accessory") return 2;
                    if (product.category === "brush") return 3;
                    if (product.category === "candles") return 4;
                    if (product.category === "supplements") return 5;
                    return 6;
                  };
                  
                  const priorityA = getCategoryPriority(productA);
                  const priorityB = getCategoryPriority(productB);
                  
                  // Sort by category priority first
                  if (priorityA !== priorityB) {
                    return priorityA - priorityB;
                  }
                  
                  // Then sort by productName within the same category
                  return (productA?.productName || "").localeCompare(productB?.productName || "");
                }).map((id) => {
                  const product = productCatalog[id];
                  if (!product) return null;
                  return (
                    <div key={id} className="flex flex-col gap-[8px] shrink-0 w-[175.5px]">
                      <div
                        className={`h-[222.75px] rounded-[10px] overflow-hidden relative${product.category === "haircare" ? " cursor-pointer" : ""}`}
                        onClick={product.category === "haircare" ? () => handleOpenQuickView(id) : undefined}
                      >
                        <img alt={product.carouselName} className="absolute inset-0 object-cover size-full" src={product.carouselImage} />
                        {(product.upsellTag || product.isRecommended) && (
                          <div className="absolute left-[13px] top-[12px] backdrop-blur-[2px] bg-white/50 px-[12px] py-[4px] rounded-[20px]">
                            <p className="font-['Simplon Norm','Inter',sans-serif] text-[12px] text-[#4d523c] tracking-[0.24px] leading-[1.5] whitespace-nowrap">{product.isRecommended ? "Recommended" : product.upsellTag}</p>
                          </div>
                        )}
                      </div>
                      <p className="font-['Simplon Norm','Inter',sans-serif] font-medium text-[14px] text-[#4d523c] leading-[1.5] h-[42px] font-[Simplon_Norm]">{product.carouselName}</p>
                      <div className="flex items-center justify-between w-full">
                        <button
                          onClick={() => handleAddWithTracking(id)}
                          className="cursor-pointer shrink-0"
                        >
                          <div className="flex h-[44px] items-center justify-center px-[32px] py-[16px] rounded-[60px] w-[88px] bg-[#323429]">
                            <p className="font-['Simplon Mono','JetBrains Mono',monospace] font-medium text-[12px] text-white text-center tracking-[0.96px] uppercase font-[Simplon_Mono]">ADD</p>
                          </div>
                        </button>
                        <div className="flex flex-col items-end pr-[8px]">
                          <p className="font-['Simplon Norm','Inter',sans-serif] font-medium text-[14px] text-[#4d523c] font-[Simplon_Norm]">${product.price.toFixed(2)}</p>
                          {product.price < product.originalPrice && (
                            <p className="font-['Simplon Norm','Inter',sans-serif] text-[12px] text-[#6c6c6c] line-through tracking-[0.24px] font-[Simplon_Norm]">${product.originalPrice.toFixed(2)}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* How It Works Section */}
        <HowItWorks className="w-full" />
      </div>

      {/* Sticky Footer */}
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] z-50"
      >
        <RoutineFooter
          cartItems={routineProducts.map((p) => {
            const selectedFrequency = productFrequencies[p.id] || "4-weeks";
            const currentPrice = getCurrentPrice(p.id, p.originalPrice, p.price);
            return {
              id: p.id,
              name: p.routineName,
              image: p.routineImage,
              price: currentPrice,
              originalPrice: p.originalPrice,
              frequency: selectedFrequency
            };
          })}
          onContinueToCart={() => setIsCartDrawerOpen(true)}
          onRemoveItem={handleDismissWithToast}
        />
      </motion.div>

      {/* Toast Container - fixed at top */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[375px] z-[60] pointer-events-none pt-[16px] px-[16px] box-border">
        <RoutineToastContainer
          toasts={toasts}
          onDismiss={dismissToast}
        />
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        onCheckout={() => {
          setIsCartDrawerOpen(false);
          navigate("/checkout");
        }}
      />
    </div>
  );
}