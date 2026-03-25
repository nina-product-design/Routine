import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Icon Components ──────────────────────────────────────
function MinusIcon() {
  return (
    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
      <path d="M6 12H18" stroke="#6C6C6C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
      <path d="M6 12H18M12 18V6" stroke="#6C6C6C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────
export type CartCardVariant = "product" | "gift";

interface CartCardBaseProps {
  image: string;
  imageStyle?: {
    height: string;
    left: string;
    top: string;
    width: string;
  };
  name: string;
  subtitle: string;
  description: string;
  tag?: string | null;
}

interface CartCardProductProps extends CartCardBaseProps {
  variant?: "product";
  currentPrice: number;
  originalPrice: number;
  isDiscounted: boolean;
  quantity: number;
  monogram?: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

interface CartCardGiftProps extends CartCardBaseProps {
  variant: "gift";
  originalPrice: number;
  description?: string;
}

type CartCardProps = CartCardProductProps | CartCardGiftProps;

// ─── Component ────────────────────────────────────────────
export default function CartCard(props: CartCardProps) {
  const { image, name, subtitle, description } = props;
  const isGift = props.variant === "gift";
  const [isRemoving, setIsRemoving] = useState(false);

  // Auto-confirm removal after overlay slides in (500ms animation + 200ms delay)
  useEffect(() => {
    if (!isRemoving) return;
    const timer = setTimeout(() => {
      if (!isGift) {
        (props as CartCardProductProps).onRemove();
      }
    }, 700); // 500ms animation + 200ms delay
    return () => clearTimeout(timer);
  }, [isRemoving]);

  const handleRemoveClick = () => {
    setIsRemoving(true);
  };

  const handleUndo = () => {
    setIsRemoving(false);
  };

  return (
    <div className="relative overflow-hidden border-b border-[#a6a6a6]/50">
      {/* Product card content — slides out left when removing */}
      <motion.div
        animate={{ x: isRemoving ? "-100%" : "0%" }}
        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
        className="flex gap-[16px] py-[24px]"
      >
        {/* Product Image */}
        <div className="w-[67px] h-[93px] shrink-0 overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="absolute max-w-none"
            style={props.imageStyle || (isGift ? { width: "100%", height: "100%", top: "0", left: "0", objectFit: "contain" as const } : { height: "137.2%", left: "-24.05%", top: "-15.04%", width: "149.94%" })}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-[12px] min-w-0">
          {/* Info & Price */}
          <div className="flex gap-[4px] items-start justify-between">
            <div className="flex-1 flex flex-col gap-[4px]">
              <div className="flex items-center gap-[8px]">
                <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#323429] tracking-[0.28px] leading-[1.5]">{name}</p>
                {props.tag && (
                  <span className="backdrop-blur-[2px] bg-white/50 px-[8px] py-[1px] rounded-[20px] font-['Simplon_Norm',sans-serif] text-[10px] text-[#4d523c] tracking-[0.2px] leading-[1.5] whitespace-nowrap">
                    {props.tag}
                  </span>
                )}
              </div>
              <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5]">{subtitle}</p>
              {!isGift && (
                <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5]">{description}</p>
              )}
              {!isGift && (props as CartCardProductProps).monogram !== undefined && (
                <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5]">
                  Monogram your brush — 1-3 uppercase characters, optional.
                </p>
              )}
            </div>
            <div className="flex flex-col items-end shrink-0">
              {isGift ? (
                <>
                  <div className="bg-[#ecff92] px-[4px] rounded-[4px]">
                    <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">FREE</p>
                  </div>
                </>
              ) : props.isDiscounted ? (
                <>
                  <div className="bg-[#ecff92] px-[4px] rounded-[4px]">
                    <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">${(props.currentPrice * props.quantity).toFixed(2)}</p>
                  </div>
                  <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#6c6c6c] tracking-[0.28px] leading-[1.5] line-through">${(props.originalPrice * props.quantity).toFixed(2)}</p>
                </>
              ) : (
                <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">${(props.currentPrice * props.quantity).toFixed(2)}</p>
              )}
            </div>
          </div>

          {/* Quantity Controls & Remove — only for product variant */}
          {!isGift && (() => {
            const p = props as CartCardProductProps;
            return (
              <>
                <div className="flex gap-[8px] items-center">
                  <div className="bg-white h-[40px] rounded-[20px] border-[0.5px] border-[#b9c2a6] flex items-center justify-center px-[12px] gap-[4px]">
                    <button onClick={() => { if (p.quantity <= 1) { handleRemoveClick(); } else { p.onDecrement(); } }} className="cursor-pointer">
                      <MinusIcon />
                    </button>
                    <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5] w-[24px] text-center">{p.quantity}</p>
                    <button onClick={p.onIncrement} className="cursor-pointer">
                      <PlusIcon />
                    </button>
                  </div>
                  {p.monogram && (
                    <div className="h-[40px] w-[80px] rounded-[20px] border-[0.5px] border-[#b9c2a6] flex items-center justify-center px-[8px]">
                      <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5] text-center">{p.monogram}</p>
                    </div>
                  )}
                  <button
                    onClick={handleRemoveClick}
                    className="flex-1 font-['Simplon_Norm',sans-serif] text-[12px] text-[#4d523c] tracking-[0.24px] leading-[1.5] text-right underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      </motion.div>

      {/* Item Removed overlay — slides in from right simultaneously */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isRemoving ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#f9f7f2] flex flex-col items-center justify-center px-[24px]"
      >
        <div className="flex flex-col gap-[4px] w-full">
          <p className="font-['Simplon_Norm',sans-serif] text-[16px] text-[#323429] text-center tracking-[0.32px] leading-[1.5] w-full">
            You deleted {name}
          </p>
        </div>
      </motion.div>
    </div>
  );
}