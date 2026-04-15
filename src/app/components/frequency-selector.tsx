import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type FrequencyOption = {
  value: string;
  label: string;
  sublabel?: string;
  price: number;
  originalPrice: number;
  isRecommended?: boolean;
};

export interface FrequencySelectorProps {
  options: FrequencyOption[];
  defaultValue?: string;
  onFrequencyChange?: (frequency: string) => void;
  interactive?: boolean;
}

export function FrequencySelector({
  options,
  defaultValue,
  onFrequencyChange,
  interactive = true,
}: FrequencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]?.value
  );

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onFrequencyChange?.(value);
  };

  const handleToggle = () => {
    if (interactive) {
      setIsOpen(!isOpen);
    }
  };

  if (!selectedOption) return null;

  const isSubscription = selectedOption.price < selectedOption.originalPrice;

  return (
    <div className="w-[295px] rounded-[10px] border border-[#e2d9c2] relative">
      {/* "Added to cart" label - positioned on top of border */}
      <div className="absolute top-[-8px] left-[8px] bg-white px-[4px] z-10">
        <p className="font-['Simplon Norm',sans-serif] font-medium text-[10px] text-[#4d523c] leading-[1.5]">
          Added to cart
        </p>
      </div>

      {/* Closed State - Button */}
      <button
        onClick={handleToggle}
        disabled={!interactive}
        className={`w-full px-[12px] py-[16px] flex flex-col gap-[4px] ${
          interactive ? "cursor-pointer hover:bg-[#fafaf8]" : "cursor-default"
        } transition-colors`}
      >
        <div className="flex gap-[12px] items-center w-full">
          {/* Product Info */}
          <div className="flex flex-col gap-[4px] items-start flex-1 text-left">
            <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#4d523c] tracking-[0.24px] leading-[1.5]">
              {selectedOption.label}
            </p>
            {/* Show sublabel for subscription options */}
            {isSubscription && (
              <p className="font-['Simplon Norm',sans-serif] font-normal text-[10px] text-[#4d523c] tracking-[0.2px] leading-[1.5]">
                60% off first subscription order
              </p>
            )}
            {/* One-time purchase incentive message */}
            {selectedOption.value === "buy-once" && isSubscription === false && interactive && (
              <div className="bg-[#ecff92] px-[6px] py-[2px] rounded-[4px]">
                <p className="font-['Simplon Norm',sans-serif] text-[10px] text-[#323429] tracking-[0.2px] leading-[1.5]">
                  Get 60% when you subscribe
                </p>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-[4px] items-end shrink-0">
            {isSubscription ? (
              <>
                <div className="bg-[#ecff92] px-[4px] rounded-[4px] flex items-center justify-center">
                  <p className="font-['Simplon Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">
                    ${selectedOption.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-['Simplon Norm',sans-serif] text-[10px] text-[#6c6c6c] line-through tracking-[0.2px] leading-[1.5]">
                  ${selectedOption.originalPrice.toFixed(2)}
                </p>
              </>
            ) : (
              <p className="font-['Simplon Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">
                ${selectedOption.price.toFixed(2)}
              </p>
            )}
          </div>

          {/* Separator + Chevron - only show if interactive */}
          {interactive && (
            <>
              <div className="w-0 h-[36px] border-l border-[#e2d9c2]" />
              <motion.svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="shrink-0"
                animate={{ rotate: isOpen ? -135 : 45 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M8.5 1.5V8.5H1.5"
                  stroke="#323429"
                  strokeLinecap="round"
                />
              </motion.svg>
            </>
          )}
        </div>
      </button>

      {/* Expanded Options */}
      <AnimatePresence>
        {isOpen && interactive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#e2d9c2]"
          >
            <div className="flex flex-col">
              {options.map((option, index) => {
                const isSelected = option.value === selectedValue;
                const isOptionSubscription = option.price < option.originalPrice;

                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`w-full px-[12px] py-[12px] min-h-[56px] flex gap-[12px] items-center hover:bg-[#fafaf8] transition-colors ${
                      index !== 0 ? "border-t border-[#e2d9c2]" : ""
                    }`}
                  >
                    {/* Radio button */}
                    <div className="size-[16px] rounded-full border-2 border-[#323429] flex items-center justify-center shrink-0">
                      {isSelected && (
                        <div className="size-[8px] rounded-full bg-[#323429]" />
                      )}
                    </div>

                    {/* Option info */}
                    <div className="flex flex-col gap-[2px] items-start flex-1 text-left">
                      <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#4d523c] tracking-[0.24px] leading-[1.5]">
                        {option.label}
                      </p>
                    </div>

                    {/* Option price */}
                    <div className="flex flex-col gap-[2px] items-end shrink-0">
                      {isOptionSubscription ? (
                        <>
                          <p className="font-['Simplon Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">
                            ${option.price.toFixed(2)}
                          </p>
                          <p className="font-['Simplon Norm',sans-serif] text-[10px] text-[#6c6c6c] line-through tracking-[0.2px] leading-[1.5]">
                            ${option.originalPrice.toFixed(2)}
                          </p>
                        </>
                      ) : (
                        <p className="font-['Simplon Norm',sans-serif] font-medium text-[14px] text-[#161716] leading-[1.5]">
                          ${option.price.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}