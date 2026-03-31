// ─── Concern Detail Modal ─────────────────────────────────
// Popup that appears when a user taps a targeted concern pill.

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Concern Data ─────────────────────────────────────────

export interface BasedOnFactor {
  label: string;
  icon: "heat" | "sun" | "calendar" | "stressed" | "head" | "drop";
  value: string;
}

export interface ConcernDetail {
  label: string;
  severityDots: number; // 1–5, filled dots out of 5
  severityLabel: string;
  percent: number;
  color: string;
  description: string;
  basedOn: BasedOnFactor[];
}

export const concernDataMap: Record<string, ConcernDetail> = {
  "Damage": {
    label: "Damage",
    severityDots: 3,
    severityLabel: "High",
    percent: 88,
    color: "#f69371",
    description:
      "With multiple high-impact stressors with little recovery time in between, your custom formula will prioritize fiber repair and protection.",
    basedOn: [
      { label: "Heat treatment", icon: "heat", value: "High" },
      { label: "Environment", icon: "sun", value: "Harsh UV" },
      { label: "Coloring", icon: "calendar", value: "Weekly" },
    ],
  },
  "Dryness": {
    label: "Dryness",
    severityDots: 3,
    severityLabel: "High",
    percent: 82,
    color: "#f69371",
    description:
      "With multiple high-impact stressors with little recovery time in between, your custom formula will prioritize fiber repair and protection.",
    basedOn: [
      { label: "Heat treatment", icon: "heat", value: "High" },
      { label: "Environment", icon: "sun", value: "Harsh UV" },
      { label: "Coloring", icon: "calendar", value: "Weekly" },
    ],
  },
  "Stressors": {
    label: "Stressors",
    severityDots: 2,
    severityLabel: "Medium",
    percent: 58,
    color: "#EABF6F",
    description:
      "With multiple high-impact stressors with little recovery time in between, your custom formula will prioritize fiber repair and protection.",
    basedOn: [
      { label: "Stress level", icon: "stressed", value: "Sometimes" },
      { label: "Environment", icon: "sun", value: "High UV" },
      { label: "Washing", icon: "calendar", value: "2-3 times a week" },
    ],
  },
  "Oiliness": {
    label: "Oiliness",
    severityDots: 1,
    severityLabel: "Low",
    percent: 15,
    color: "#B9C2A6",
    description:
      "With multiple high-impact stressors with little recovery time in between, your custom formula will prioritize fiber repair and protection.",
    basedOn: [
      { label: "Flakiness", icon: "heat", value: "Rarely" },
      { label: "Scalp Spectrum", icon: "drop", value: "Mixed" },
      { label: "Washing", icon: "calendar", value: "2-3 times a week" },
    ],
  },
  "Sensitivity": {
    label: "Sensitivity",
    severityDots: 1,
    severityLabel: "Low",
    percent: 30,
    color: "#B9C2A6",
    description:
      "With multiple high-impact stressors with little recovery time in between, your custom formula will prioritize fiber repair and protection.",
    basedOn: [
      { label: "Flakiness", icon: "heat", value: "Rarely" },
      { label: "Sensitive Scalp", icon: "head", value: "Off and on" },
      { label: "Washing", icon: "calendar", value: "2-3 times a week" },
    ],
  },
};

// ─── Component ────────────────────────────────────────────

interface ConcernModalProps {
  concern: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ConcernModal({
  concern,
  isOpen,
  onClose,
}: ConcernModalProps) {
  const data = concern ? concernDataMap[concern] : null;

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-[24px]"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white flex flex-col gap-[4px] items-start overflow-clip px-[12px] py-[16px] relative rounded-[10px] w-full max-w-[327px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: pill + close */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start px-[12px] py-[4px] relative rounded-[20px]">
                <div
                  aria-hidden="true"
                  className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-[20px]"
                />
                <p className="font-['Simplon Norm','Inter',sans-serif] leading-[1.5] text-[#323429] text-[12px] tracking-[0.24px] whitespace-nowrap">
                  {data.label}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center size-[32px] relative cursor-pointer"
                aria-label="Close"
              >
                {/* Circle bg */}
                <svg
                  className="absolute inset-0 size-full"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="white" opacity="0.5" />
                </svg>
                {/* X icon */}
                <svg
                  className="relative size-[12px]"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <line
                    x1="0.63"
                    y1="0.63"
                    x2="11.37"
                    y2="11.37"
                    stroke="#323429"
                    strokeWidth="0.9"
                    strokeLinecap="square"
                  />
                  <line
                    x1="11.37"
                    y1="0.63"
                    x2="0.63"
                    y2="11.37"
                    stroke="#323429"
                    strokeWidth="0.9"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </div>

            {/* Severity dots + label */}
            <div className="flex gap-[8px] items-center py-[4px] w-full">
              <div className="flex gap-[4px]">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className={`size-[9px] rounded-full ${
                      i < data.severityDots
                        ? "bg-[#f69371]"
                        : "bg-[#e8e4db]"
                    }`}
                  />
                ))}
              </div>
              <p className="font-['Simplon Norm','Inter',sans-serif] text-[#323429] text-[12px] tracking-[0.24px] leading-[1.5]">
                {data.severityLabel}
              </p>
            </div>

            {/* Body */}
            <div className="pb-[8px] w-full">
              <p className="font-['Simplon Norm','Inter',sans-serif] text-[14px] text-black tracking-[0.28px] leading-[1.5]">
                {data.description}
              </p>
            </div>

            {/* Based on */}
            <div className="flex flex-col gap-[4px] items-start pt-[8px] w-full border-t border-[#f1ece0]">
              <p className="font-['Simplon Mono','JetBrains Mono',monospace] text-[#4d523c] text-[10px] tracking-[0.8px] uppercase leading-[1.2]">
                Based on:
              </p>
              <ul className="font-['Simplon Norm','Inter',sans-serif] text-[#161716] text-[12px] tracking-[0.24px] leading-[1.5]">
                {data.basedOn.map((reason) => (
                  <li key={reason} className="list-disc ms-[18px]">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}