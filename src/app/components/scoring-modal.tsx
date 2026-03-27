import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { concernDataMap, type ConcernDetail } from "./concern-modal";

// ─── Score Card ──────────────────────────────────────────

interface ScoreCardProps {
  concern: ConcernDetail;
  ingredient?: { name: string; image: string; benefit: string };
}

// Per-concern severity data matching the scoring/results page exactly
const scoringData: Record<string, { percent: number; color: string }> = {
  "Damage":      { percent: 88, color: "#f69371" },
  "Dryness":     { percent: 82, color: "#f69371" },
  "Stressors":   { percent: 58, color: "#EABF6F" },
  "Sensitivity": { percent: 30, color: "#B9C2A6" },
  "Oiliness":    { percent: 15, color: "#B9C2A6" },
};

function ScoreCard({ concern, ingredient }: ScoreCardProps) {
  const { percent, color } = scoringData[concern.label] || { percent: 50, color: "#EABF6F" };

  return (
    <div className="bg-[#f9f7f2] rounded-[10px] p-[16px] flex flex-col gap-[12px] w-full">
      {/* Header: label + severity */}
      <div className="flex items-center justify-between w-full">
        <p className="font-['Simplon_Mono','JetBrains_Mono',monospace] font-medium text-[12px] text-[#161716] tracking-[0.96px] uppercase leading-[1.2]">
          {concern.label}
        </p>
        <p className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5]">
          {concern.severityLabel}
        </p>
      </div>

      {/* Severity bar — continuous fill */}
      <div className="h-[8px] bg-[#e8e4db] rounded-full w-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>

      {/* Description */}
      <p className="font-['Simplon_Norm',sans-serif] text-[14px] text-[#161716] tracking-[0.28px] leading-[1.5]">
        {concern.description}
      </p>

      {/* Based on */}
      <div className="flex flex-col gap-[4px] pt-[8px] border-t border-[#e8e4db]">
        <p className="font-['Simplon_Mono','JetBrains_Mono',monospace] text-[10px] text-[#4d523c] tracking-[0.8px] uppercase leading-[1.2]">
          Based on:
        </p>
        {concern.basedOn.map((reason) => (
          <p key={reason} className="font-['Simplon_Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px] leading-[1.5]">
            {reason}
          </p>
        ))}
      </div>

      {/* Ingredient that supports this */}
      {ingredient && (
        <div className="flex flex-col gap-[8px] pt-[8px] border-t border-[#e8e4db]">
          <p className="font-['Simplon_Mono','JetBrains_Mono',monospace] text-[10px] text-[#4d523c] tracking-[0.8px] uppercase leading-[1.2]">
            Ingredient that supports this:
          </p>
          <div className="flex items-center gap-[8px]">
            <div className="size-[32px] shrink-0 rounded-[6px] overflow-hidden">
              <img src={ingredient.image} alt={ingredient.name} className="size-full object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="font-['Simplon_Norm',sans-serif] font-medium text-[12px] text-[#161716] tracking-[0.24px] leading-[1.5]">
                {ingredient.name}
              </p>
              <p className="font-['Simplon_Norm',sans-serif] text-[10px] text-[#6c6c6c] tracking-[0.2px] leading-[1.5]">
                {ingredient.benefit}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Scoring Modal ───────────────────────────────────────

interface ScoringModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  concerns: string[];
  ingredients?: { name: string; image: string; benefit: string }[];
}

export default function ScoringModal({
  isOpen,
  onClose,
  productName,
  concerns,
  ingredients = [],
}: ScoringModalProps) {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isTabClick = useRef(false);

  // Reset to first tab and scroll position when opening
  useEffect(() => {
    if (isOpen) {
      setActiveTab(0);
      setTimeout(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      }, 50);
    }
  }, [isOpen]);

  // Scroll to card when tab is clicked
  const handleTabClick = useCallback((index: number) => {
    setActiveTab(index);
    isTabClick.current = true;
    const card = cardRefs.current[index];
    if (card && scrollRef.current) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { isTabClick.current = false; }, 500);
    }
  }, []);

  // Update active tab on scroll
  const handleScroll = useCallback(() => {
    if (isTabClick.current || !scrollRef.current) return;
    const container = scrollRef.current;
    const scrollTop = container.scrollTop;
    let closestIndex = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const distance = Math.abs(card.offsetTop - scrollTop - 8);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setActiveTab(closestIndex);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Get the short product type from the name (e.g. "Maggie's Shampoo" -> "Shampoo")
  const productType = productName.replace(/^Maggie's\s+/, "");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Full-screen modal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="bg-white flex flex-col relative rounded-[16px] w-[343px] max-h-[90vh] mx-[16px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end px-[16px] pt-[16px]">
              <button
                onClick={onClose}
                className="cursor-pointer"
                aria-label="Close"
              >
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#323429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Title */}
            <div className="px-[24px] pb-[16px]">
              <p className="font-['Saol_Text',serif] text-[22px] text-[#161716] tracking-[-0.5px] leading-[1.2]">
                Your {productType} addresses:
              </p>
            </div>

            {/* Tabs */}
            <div className="flex px-[24px] border-b border-[#e8e4db]">
              {concerns.map((concern, i) => (
                <button
                  key={concern}
                  onClick={() => handleTabClick(i)}
                  className={`px-[12px] pb-[10px] font-['Simplon_Mono','JetBrains_Mono',monospace] font-medium text-[11px] tracking-[0.88px] uppercase leading-[1.2] cursor-pointer transition-colors ${
                    activeTab === i
                      ? "text-[#161716] border-b-[2px] border-[#161716]"
                      : "text-[#6c6c6c] border-b-[2px] border-transparent"
                  }`}
                >
                  {concern}
                </button>
              ))}
            </div>

            {/* Scrollable content */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="overflow-y-auto flex-1 px-[24px] py-[16px] flex flex-col gap-[16px]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {concerns.map((concernKey, i) => {
                const data = concernDataMap[concernKey];
                if (!data) return null;
                const ingredient = ingredients[i] || ingredients[0];
                return (
                  <div key={concernKey} ref={(el) => { cardRefs.current[i] = el; }}>
                    <ScoreCard
                      concern={data}
                      ingredient={ingredient}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
