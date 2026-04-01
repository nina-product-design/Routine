// ─── Routine Product Card ─────────────────────────────────
// A dynamic, reusable product card for recommended routine items.

import { useState, useEffect } from "react";

// ─── Component imports ────────────────────────────────────
import FrequencyDropdown, { FrequencyOption } from "./frequency-dropdown";
import ConcernModal from "./concern-modal";
import ScoringModal from "./scoring-modal";

// ─── SVG imports from Figma ───────────────────────────────
import svgPaths from "../../imports/svg-g4omtyf4b6";

// ─── Accessory Image Assets ───────────────────────────────
import RoutineCardAccessoryCandle1 from "figma:asset/4de6e2cf7824842c43ddfc2f29e69c151d8d461e.png";
import RoutineCardAccessoryCandle2 from "figma:asset/a35495ef749ddfc3f3d35734301cbd5365ad7656.png";
import RoutineCardAccessoryCandle3 from "figma:asset/ad1f6f4142eaf327d0f96b85993ac7f702d36872.png";
import RoutineCardAccessoryTowel from "figma:asset/2c1decd3d47ad04cea3a3fbc7e11e56f0c2e920a.png";

// ─── Brush Image Assets ───────────────────────────────────
import RoutineCardBrush from "figma:asset/775273a063d17d454771a2e7cd7b1fd4bcdf17b4.png";

// ─── Haircare Image Assets ────────────────────────────────
import RoutineCardHaircareStyleGel from "figma:asset/009c58c20b24895b6b39cb0d46aee63d6e9e959e.png";
import RoutineCardHaircareScalpSerum from "figma:asset/04239201c6dc31c95af22167e2c16cb268d0d334.png";
import RoutineCardHaircareHairMask from "figma:asset/d9eae675b15012a3cb1df8a466567a72306bb2ec.png";
import RoutineCardHaircareShampoo from "figma:asset/636d2d11de8fe29dffaba93dfc297c889c25ff2e.png";
import RoutineCardHaircareLeaveInConditioner from "figma:asset/ab830bf0e89b213ad60a82841671dd85dd2ad000.png";
import RoutineCardHaircareScalpMask from "figma:asset/7e9fee9fa0df2ef004258fdabae767cfa83296ca.png";
import RoutineCardHaircareConditioner from "figma:asset/1b107c7a632385907d2f39e36b3898a2da5b63c5.png";
import RoutineCardHaircareCurlCream from "figma:asset/aa32e21c78e38ac5a150b4302c67617d6582c71d.png";
import RoutineCardHaircareDryShampoo from "figma:asset/e086f773926840a775d266fc94000742f915449d.png";
import RoutineCardHaircareHairOil from "figma:asset/e095567ff1a071c2e92a2af4a4871fc03c4b3026.png";

// ─── Supplements Image Assets ─────────────────────────────
import RoutineCardSupplements from "figma:asset/f801d5eb67c7c949b7829b624cbd2938e6e12d24.png";

// ─── Product Categories ───────────────────────────────────
export type ProductCategory = "haircare" | "accessory" | "supplements" | "brush";

// ─── Exported Accessory Assets ────────────────────────────
export const RoutineCardAccessoryAssets = {
  candle1: RoutineCardAccessoryCandle1,
  candle2: RoutineCardAccessoryCandle2,
  candle3: RoutineCardAccessoryCandle3,
  towel: RoutineCardAccessoryTowel,
};

// ─── Exported Brush Assets ────────────────────────────────
export const RoutineCardBrushAssets = {
  brush: RoutineCardBrush,
};

// ─── Exported Haircare Assets ─────────────────────────────
export const RoutineCardHaircareAssets = {
  styleGel: RoutineCardHaircareStyleGel,
  scalpSerum: RoutineCardHaircareScalpSerum,
  hairMask: RoutineCardHaircareHairMask,
  shampoo: RoutineCardHaircareShampoo,
  leaveInConditioner: RoutineCardHaircareLeaveInConditioner,
  scalpMask: RoutineCardHaircareScalpMask,
  conditioner: RoutineCardHaircareConditioner,
  curlCream: RoutineCardHaircareCurlCream,
  dryShampoo: RoutineCardHaircareDryShampoo,
  hairOil: RoutineCardHaircareHairOil,
};

// ─── Exported Supplements Assets ──────────────────────────
export const RoutineCardSupplementsAssets = {
  supplements: RoutineCardSupplements,
};

export interface Ingredient {
  name: string;
  benefit: string;
  description?: string;
  image: string;
}

// ─── Close Button Component ───────────────────────────────
function UiControlsCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative size-[32px] cursor-pointer flex items-center justify-center">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <defs>
          <filter id="bgblur_close" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>
        <circle cx="16" cy="16" fill="white" opacity="0.5" r="16" style={{ backdropFilter: "blur(4px)" }} />
      </svg>
      <div className="relative size-[12px] flex items-center justify-center">
        <svg className="block size-full" fill="none" viewBox="0 0 13.3935 13.3934">
          <g>
            <path d={svgPaths.pbfcab60} stroke="#323429" strokeLinecap="square" />
            <path d={svgPaths.p39b19100} stroke="#323429" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </button>
  );
}

// ─── Goal Pill Component ──────────────────────────────────
function GoalPill({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <div
      className={`content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px]${onClick ? " cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">{text}</p>
    </div>
  );
}

// ─── Frequency Selector Component ─────────────────────────
interface FrequencySelectorProps {
  price: number;
  originalPrice: number;
  onOpenChange?: (isOpen: boolean) => void;
  onFrequencyChange?: (frequency: string) => void;
  defaultFrequency?: string;
}

function FrequencySelector({ price, originalPrice, onOpenChange, onFrequencyChange, defaultFrequency }: FrequencySelectorProps) {
  const [selected, setSelected] = useState<FrequencyOption>((defaultFrequency as FrequencyOption) || "4-weeks");
  const [isOpen, setIsOpen] = useState(false);

  // Sync selected state when defaultFrequency prop changes
  useEffect(() => {
    if (defaultFrequency) {
      setSelected(defaultFrequency as FrequencyOption);
    }
  }, [defaultFrequency]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  const getLabelForOption = (option: FrequencyOption): string => {
    switch (option) {
      case "4-weeks": return "Every 4 weeks (recommended)";
      case "8-weeks": return "Every 8 weeks";
      case "12-weeks": return "Every 12 weeks";
      case "one-time": return "One-time purchase";
    }
  };

  const isSubscription = selected !== "one-time";
  const displayPrice = isSubscription ? price : originalPrice;

  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative w-[295px]">
      {/* Main selector button */}
      <button
        onClick={() => handleOpenChange(!isOpen)}
        className={`cursor-pointer relative shrink-0 w-full z-[2] ${isOpen ? "mb-[-1px] rounded-tl-[10px] rounded-tr-[10px]" : "rounded-[10px]"}`}
      >
        <div aria-hidden="true" className={`absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none ${isOpen ? "rounded-tl-[10px] rounded-tr-[10px]" : "rounded-[10px]"}`} />
        <div className="flex flex-col items-start justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-[16px] relative w-full">
            {/* Top row */}
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          {/* Product info */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative gap-[4px] font-['Simplon Norm','Inter',sans-serif] leading-[1.5] text-[#4d523c] text-left">
            <p className="relative shrink-0 text-[12px] text-left tracking-[0.24px] w-full">{getLabelForOption(selected)}</p>
            {isSubscription ? (
              <p className="min-w-full relative shrink-0 text-[10px] text-left tracking-[0.2px] w-[min-content]">60% off first subscription order</p>
            ) : (
              <div className="bg-[#ecff92] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
                <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px] whitespace-nowrap">Get 60% when you subscribe</p>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] relative shrink-0 whitespace-nowrap">
            <div className={`content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0 ${isSubscription ? "bg-[#ecff92]" : ""}`}>
              <p className="font-['Simplon Norm','Inter',sans-serif] font-medium relative shrink-0 text-[#161716] text-[14px]">
                ${displayPrice.toFixed(2)}
              </p>
            </div>
            {isSubscription ? (
              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                <p className="decoration-solid font-['Simplon Norm','Inter',sans-serif] leading-[1.5] line-through relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
                  ${originalPrice.toFixed(2)}
                </p>
              </div>
            ) : (
              <div className="content-stretch flex items-center justify-center px-[4px] shrink-0" />
            )}
          </div>

          {/* Divider line */}
          <div className="w-px h-[36px] bg-[#e2d9c2] shrink-0" />

              {/* Arrow icon */}
              <div className="flex items-center justify-center shrink-0">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`transition-transform ${isOpen ? "-rotate-135" : "rotate-45"}`}
                >
                  <path d="M8.5 1.5V8.5H1.5" stroke="#323429" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Added to cart label */}
            <div className="absolute bg-white content-stretch flex items-center justify-center left-[8px] px-[4px] top-[-8px]">
              <p className="font-['Simplon Norm','Inter',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4d523c] text-[10px] whitespace-nowrap">
                Added to cart
              </p>
            </div>
          </div>
        </div>
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div className="content-stretch flex flex-col items-start mb-[-1px] overflow-clip pb-px relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full z-[1]">
          <FrequencyDropdown
            selected={selected}
            onSelect={(option) => {
              setSelected(option);
              handleOpenChange(false);
              // Map "one-time" to "buy-once" for consistency with cart context
              const mappedFrequency = option === "one-time" ? "buy-once" : option;
              onFrequencyChange?.(mappedFrequency);
            }}
            price={price}
            originalPrice={originalPrice}
          />
        </div>
      )}
    </div>
  );
}

// ─── Added to Cart Component ──────────────────────────────
type AddedToCartProps = {
  type: "subscription" | "buy-once";
  price: number;
  originalPrice: number;
};

function AddedToCart({ type, price, originalPrice }: AddedToCartProps) {
  const isSubscription = type === "subscription";
  
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative rounded-[10px] w-[295px]">
      <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative gap-[4px] font-['Simplon Norm','Inter',sans-serif] leading-[1.5] text-[#4d523c]">
          <p className="relative shrink-0 text-[12px] tracking-[0.24px] w-full">
            {isSubscription ? "Every 4 weeks (recommended)" : "One-time purchase"}
          </p>
          {isSubscription && (
            <p className="min-w-full relative shrink-0 text-[10px] tracking-[0.2px] w-[min-content]">60% off first order</p>
          )}
          {!isSubscription && (
            <div className="bg-[#ecff92] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
              <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px] whitespace-nowrap">Get 60% when you subscribe</p>
            </div>
          )}
        </div>
        <div className="content-stretch flex flex-col relative shrink-0 gap-[4px] items-end">
          <div className={`content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0 ${isSubscription ? "bg-[#ecff92]" : ""}`}>
            <p className="font-['Simplon Norm','Inter',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">${price.toFixed(2)}</p>
          </div>
          {isSubscription && (
            <div className="content-stretch flex items-center justify-center px-[4px] shrink-0 relative">
              <p className="decoration-solid font-['Simplon Norm','Inter',sans-serif] leading-[1.5] line-through relative shrink-0 text-[#6c6c6c] text-[10px] text-right tracking-[0.2px] whitespace-nowrap">${originalPrice.toFixed(2)}</p>
            </div>
          )}
        </div>
        <div className="flex h-[36px] items-center justify-center relative shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[36px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line stroke="#E2D9C2" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[9.899px]">
          <div className="flex-none rotate-45">
            <div className="relative size-[7px]">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <path d="M7.5 0.5V7.5H0.5" stroke="#323429" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[8px] px-[4px] top-[-8px]">
        <p className="font-['Simplon Norm','Inter',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4d523c] text-[10px] whitespace-nowrap">Added to cart</p>
      </div>
    </div>
  );
}

// ─── Added to Cart Accessory Component ────────────────────
function AddedToCartAccessory({ price }: { price: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative rounded-[10px] w-[295px]">
      <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] w-full">One-time purchase</p>
        </div>
        <div className="content-stretch flex flex-col relative shrink-0 items-center justify-center">
          <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
            <p className="font-['Simplon Norm','Inter',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap">${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[8px] px-[4px] top-[-8px]">
        <p className="font-['Simplon Norm','Inter',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#4d523c] text-[10px] whitespace-nowrap">Added to cart</p>
      </div>
    </div>
  );
}

// ─── Main Routine Product Card (Haircare/Subscription) ───
export interface RoutineProductCardProps {
  productName: string;
  productImage: string;
  description: string;
  size: string;
  badge?: string;
  concerns: string[];
  ingredients: { name: string; image: string; benefit: string }[];
  preferences: string;
  price: number;
  originalPrice: number;
  frequency?: string;
  discountLabel?: string;
  onDismiss: () => void;
  onFrequencyChange?: (frequency: string) => void;
  onDetailsClick?: () => void;
  onQuickView?: () => void;
}

export function RoutineProductCard({
  productName,
  productImage,
  description,
  size,
  badge,
  concerns,
  ingredients,
  preferences,
  price,
  originalPrice,
  frequency = "Every 4 weeks (recommended)",
  onDismiss,
  onQuickView,
  onFrequencyChange,
}: RoutineProductCardProps) {
  // Determine if this is a subscription or buy-once
  const isSubscription = frequency !== "One-time purchase" && frequency !== "Buy Once";
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);
  const [activeConcern, setActiveConcern] = useState<string | null>(null);
  const [isScoringOpen, setIsScoringOpen] = useState(false);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative rounded-[10px] w-[327px] pb-[24px]">
      {/* Product Image */}
      <div className="h-[220px] relative shrink-0 w-full">
        <div className="absolute h-[220px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[327px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
            <img alt={productName} className="absolute h-full w-full object-cover" src={productImage} />
          </div>
        </div>
        {badge && (
          <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center left-[8px] px-[12px] py-[4px] rounded-[20px] top-[8px]">
            <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] whitespace-nowrap">{badge}</p>
          </div>
        )}
        <div className="absolute right-[8px] top-[8px]">
          <UiControlsCloseButton onClick={onDismiss} />
        </div>
      </div>

      {/* Contents */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
          {/* Product Info */}
          <div className="content-stretch flex flex-col gap-[8px] items-start text-[#4d523c] relative shrink-0 w-full">
            <p className="font-['Saol Text',serif] font-light leading-[1.1] min-w-full relative shrink-0 text-[32px] tracking-[-0.96px] w-[min-content]">{productName}</p>
            <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content] line-clamp-2">{description}</p>
            <div className="content-stretch flex font-['Simplon Norm','Inter',sans-serif] gap-[24px] items-start leading-[1.5] relative shrink-0 text-[12px] tracking-[0.24px] whitespace-nowrap">
              <p className="relative shrink-0">{size}</p>
              {onQuickView && (
                <button 
                  onClick={onQuickView} 
                  className="relative shrink-0 underline text-[12px] cursor-pointer"
                >
                  See full details
                </button>
              )}
            </div>
          </div>

          {/* Targeted Concerns */}
          {concerns && concerns.length > 0 && (
            <button
              onClick={() => setIsScoringOpen(true)}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full cursor-pointer text-left"
            >
              <p className="font-['Simplon Mono','JetBrains Mono',monospace] font-medium leading-[14.4px] relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">THIS PRODUCT TARGETS</p>
              <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0">
                {concerns.map((concern, i) => (
                  <GoalPill key={i} text={concern} onClick={() => setIsScoringOpen(true)} />
                ))}
              </div>
            </button>
          )}

          {/* Key Ingredients */}
          {ingredients && ingredients.length > 0 && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Simplon Mono','JetBrains Mono',monospace] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.96px] uppercase w-[min-content]">your KEY INGREDIENTS</p>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                {ingredients.map((ingredient, i) => (
                  <div key={i} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <div className="h-[40px] relative shrink-0 w-[32px]">
                      <img alt={ingredient.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ingredient.image} />
                    </div>
                    <div className="content-stretch flex flex-col items-start leading-[1.5] relative shrink-0 text-[#4d523c] text-[12px] flex-1">
                      <p className="font-['Simplon Norm','Inter',sans-serif] font-medium relative shrink-0 w-full">{ingredient.name}</p>
                      <p className="font-['Simplon Norm','Inter',sans-serif] relative shrink-0 tracking-[0.24px] w-full">{ingredient.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences */}
          {preferences && (
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[8px] items-start text-[#4d523c] text-[12px] relative shrink-0 w-full">
                  <p className="font-['Simplon Mono','JetBrains Mono',monospace] font-medium leading-[1.2] relative shrink-0 tracking-[0.96px] uppercase w-full">YOUR PREFERENCES</p>
                  <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 tracking-[0.24px] w-full">{preferences}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Frequency Selector */}
      <FrequencySelector 
        price={price}
        originalPrice={originalPrice}
        onOpenChange={setIsFrequencyOpen}
        onFrequencyChange={onFrequencyChange}
        defaultFrequency={
          frequency === "buy-once" || frequency === "One-time purchase" || frequency === "Buy Once" ? "one-time"
          : frequency?.includes("12") ? "12-weeks"
          : frequency?.includes("8") ? "8-weeks"
          : "4-weeks"
        }
      />

      {/* Concern Detail Modal */}
      <ConcernModal
        concern={activeConcern}
        isOpen={activeConcern !== null}
        onClose={() => setActiveConcern(null)}
      />

      {/* Scoring Modal */}
      <ScoringModal
        isOpen={isScoringOpen}
        onClose={() => setIsScoringOpen(false)}
        productName={productName}
        concerns={concerns}
        ingredients={ingredients}
      />
    </div>
  );
}

// ─── Accessory Product Card ───────────────────────────────
export interface RoutineProductCardAccessoryProps {
  productName: string;
  productImage: string;
  description: string | string[];
  size: string;
  badge?: string;
  price: number;
  onDismiss: () => void;
}

export function RoutineProductCardAccessory({
  productName,
  productImage,
  description,
  size,
  badge,
  price,
  onDismiss,
}: RoutineProductCardAccessoryProps) {
  // Handle both string and array descriptions
  const descriptionText = Array.isArray(description) ? description.join('\n\n') : description;

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[24px] relative rounded-[10px] w-[327px]">
      {/* Product Image */}
      <div className="h-[220px] relative shrink-0 w-full">
        <div className="absolute h-[220px] left-0 top-0 w-[327px]">
          <img alt={productName} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-tl-[10px] rounded-tr-[10px]" src={productImage} />
        </div>
        {badge && (
          <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center left-[8px] px-[12px] py-[4px] rounded-[20px] top-[8px]">
            <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] whitespace-nowrap">{badge}</p>
          </div>
        )}
        <div className="absolute right-[8px] top-[8px]">
          <UiControlsCloseButton onClick={onDismiss} />
        </div>
      </div>

      {/* Contents */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
          {/* Product Info */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Saol Text',serif] font-light leading-[1.1] min-w-full relative shrink-0 text-[#4d523c] text-[32px] tracking-[-0.96px] w-[min-content]">{productName}</p>
            <div className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#4d523c] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
              {descriptionText}
            </div>
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
              <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] whitespace-nowrap">{size}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Added to Cart */}
      <AddedToCartAccessory price={price} />
    </div>
  );
}