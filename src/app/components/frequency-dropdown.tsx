// ─── Frequency Dropdown Component ─────────────────────────
// Dropdown list for subscription frequency selection

import { useState } from "react";

export type FrequencyOption = "4-weeks" | "8-weeks" | "12-weeks" | "one-time";

export interface FrequencyDropdownProps {
  selected: FrequencyOption;
  onSelect: (option: FrequencyOption) => void;
  price: number;
  originalPrice: number;
}

interface DropdownRowProps {
  label: string;
  value: FrequencyOption;
  price: number;
  originalPrice?: number;
  isSelected: boolean;
  isLast?: boolean;
  onClick: () => void;
}

function RadioButton({ checked }: { checked: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g>
            <circle cx="10.5" cy="10.5" fill="white" r="10" stroke={checked ? "#323429" : "#A6A6A6"} />
            {checked && <circle cx="10.5" cy="10.5" fill="#4D523C" r="7.5" />}
          </g>
        </svg>
      </div>
    </div>
  );
}

function DropdownRow({ label, value, price, originalPrice, isSelected, isLast, onClick }: DropdownRowProps) {
  const isSubscription = value !== "one-time";

  return (
    <div className={`bg-white mb-[-1px] relative shrink-0 w-full ${isLast ? "rounded-bl-[10px] rounded-br-[10px]" : ""}`} data-name="Dropdown row">
      <div
        aria-hidden="true"
        className={`absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none ${
          isLast ? "rounded-bl-[10px] rounded-br-[10px]" : ""
        }`}
      />
      <button onClick={onClick} className="flex flex-row items-center size-full cursor-pointer hover:bg-[#f9f9f9] transition-colors">
        <div className={`content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full ${!isSubscription ? "min-h-[71px]" : ""}`}>
          {/* Radio Button */}
          <RadioButton checked={isSelected} />

          {/* Text */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative text-left" data-name="Text">
            <p className="font-['Simplon_Norm',sans-serif] leading-[1.5] relative shrink-0 text-[#323429] text-[12px] text-left tracking-[0.24px] w-full">
              {label}
            </p>
          </div>

          {/* Price */}
          <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] relative shrink-0 text-right whitespace-nowrap" data-name="price">
            {/* Highlighted Price */}
            <div className={`content-stretch flex font-['Simplon_Norm',sans-serif] font-medium items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px] ${
              isSubscription ? "bg-[#ecff92]" : ""
            }`} data-name="highlight">
              <p className="relative shrink-0">$</p>
              <p className="relative shrink-0">{price.toFixed(2)}</p>
            </div>

            {/* Original Price (strikethrough) */}
            {isSubscription && originalPrice ? (
              <div className="content-stretch flex font-['Simplon_Norm',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
                <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
                <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">{originalPrice.toFixed(2)}</p>
              </div>
            ) : null}
          </div>
        </div>
      </button>
    </div>
  );
}

export default function FrequencyDropdown({ selected, onSelect, price, originalPrice }: FrequencyDropdownProps) {
  const options = [
    { value: "4-weeks" as FrequencyOption, label: "Every 4 weeks [recommended]" },
    { value: "8-weeks" as FrequencyOption, label: "Every 8 weeks" },
    { value: "12-weeks" as FrequencyOption, label: "Every 12 weeks" },
    { value: "one-time" as FrequencyOption, label: "One-time purchase" },
  ];

  return (
    <>
      {options.map((option, index) => (
        <DropdownRow
          key={option.value}
          label={option.label}
          value={option.value}
          price={option.value === "one-time" ? originalPrice : price}
          originalPrice={option.value !== "one-time" ? originalPrice : undefined}
          isSelected={selected === option.value}
          isLast={index === options.length - 1}
          onClick={() => onSelect(option.value)}
        />
      ))}
    </>
  );
}