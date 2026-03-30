import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-v59w0vx39v";
import { productCatalog } from "../data/product-catalog";

// ─── Prose Logo ───────────────────────────────────────────
function ProseLogo() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-[62px]">
      <div className="absolute bottom-[0.5px] h-[17.999px] left-0 w-[62px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0001 17.9995">
          <g>
            <path d={svgPaths.p17b85140} fill="#323429" />
            <path d={svgPaths.p2b3a1500} fill="#323429" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─── Hair Analysis Data ───────────────────────────────────
interface AnalysisMetric {
  label: string;
  key: string;
  value: number; // 0–1
  color: string;
  severityLabel: string;
  description: string;
}

const analysisMetrics: AnalysisMetric[] = [
  {
    label: "DAMAGE",
    key: "damage",
    value: 0.88,
    color: "#f69371",
    severityLabel: "Very Damaged",
    description:
      "We'll strengthen your hair and help repair what we can by adding ingredients to your products that help with hair health, fiber repair, and nourishment.",
  },
  {
    label: "DRYNESS",
    key: "dryness",
    value: 0.82,
    color: "#f69371",
    severityLabel: "Very Dry",
    description:
      "Your hair needs deep moisture restoration. We've selected humectants and emollients that penetrate the hair shaft to lock in hydration without weighing your curls down.",
  },
  {
    label: "STRESSORS",
    key: "stressors",
    value: 0.58,
    color: "#EABF6F",
    severityLabel: "Moderate Stress",
    description:
      "Environmental and styling stressors are taking a toll. Your routine includes protective polymers and botanical oils to shield hair from heat, UV, and daily stress.",
  },
  {
    label: "SENSITIVITY",
    key: "sensitivity",
    value: 0.3,
    color: "#B9C2A6",
    severityLabel: "Low Sensitivity",
    description:
      "We've included calming botanicals and gentle formulations to soothe your scalp, reduce redness, and minimize sensitivity throughout your routine.",
  },
  {
    label: "OILINESS",
    key: "oiliness",
    value: 0.15,
    color: "#B9C2A6",
    severityLabel: "Low Oiliness",
    description:
      "Your scalp oil production is balanced. We've calibrated your formulas to maintain this equilibrium without over-stripping or weighing hair down.",
  },
];

// ─── Dot Ring Visualization ───────────────────────────────
const DOT_COLORS = [
  "#d1cdc4",  // neutral/600
  "#f69371",  // accent/200
  "#B9C2A6",  // primary/200
  "#EABF6F",  // EABF6F
];

interface Dot {
  cx: number;
  cy: number;
  r: number;
  color: string;
  delay: number;
}

// Evenly spaced dots around the ring — no overlap.
// Each entry: [angleDeg, radius offset from center ring, dot radius, color index]
// 26 dots spaced ~13.8° apart, sizes alternate small/med/large (max 9px radius)
const dotDefs: [number, number, number, number][] = [
  [0,   0, 7, 0],   [14,  0, 4, 0],
  [28,  0, 9, 3],   [42,  0, 5, 0],
  [56,  0, 8, 1],   [70,  0, 4, 2],
  [84,  0, 6, 0],   [98,  0, 9, 1],
  [112, 0, 4, 0],   [126, 0, 7, 2],
  [140, 0, 5, 0],   [154, 0, 8, 2],
  [168, 0, 4, 1],   [182, 0, 9, 0],
  [196, 0, 5, 3],   [210, 0, 7, 1],
  [224, 0, 4, 0],   [238, 0, 9, 2],
  [252, 0, 5, 0],   [266, 0, 8, 1],
  [280, 0, 4, 3],   [294, 0, 7, 0],
  [308, 0, 5, 2],   [322, 0, 9, 1],
  [336, 0, 4, 0],   [350, 0, 6, 3],
];

interface FloatingDot extends Dot {
  floatX: number[];
  floatY: number[];
  floatDuration: number;
}

function generateDots(): FloatingDot[] {
  const center = 140;
  const baseRadius = 100;
  // Seeded random-ish offsets for each dot's floating path
  const rng = (seed: number) => ((Math.sin(seed * 127.1 + 311.7) * 43758.5453) % 1 + 1) % 1;

  return dotDefs.map(([angleDeg, rOffset, size, colorIdx], i) => {
    const angle = (angleDeg * Math.PI) / 180 - Math.PI / 2;
    const r = baseRadius + rOffset;
    const x = center + Math.cos(angle) * r;
    const y = center + Math.sin(angle) * r;
    // Generate unique floating keyframes per dot (subtle 3-6px drift)
    const drift = 3 + rng(i) * 3;
    const driftX = drift * (rng(i * 2) > 0.5 ? 1 : -1);
    const driftY = drift * (rng(i * 3) > 0.5 ? 1 : -1);
    return {
      cx: x,
      cy: y,
      r: size,
      color: DOT_COLORS[colorIdx],
      delay: i * 0.5 / dotDefs.length, // spread 500ms stagger across all dots
      floatX: [0, driftX, -driftX * 0.6, driftX * 0.3, 0],
      floatY: [0, -driftY * 0.7, driftY, -driftY * 0.4, 0],
      floatDuration: 4 + rng(i * 5) * 3, // 4-7s per cycle, unique per dot
    };
  });
}

const ringDots = generateDots();

function DotRingVisualization() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Total entrance stagger: 500ms spread across all dots
  const totalStagger = 0.5;

  return (
    <div className="relative w-[280px] h-[280px] mx-auto">
      <svg viewBox="0 0 280 280" className="w-full h-full overflow-visible">
        {ringDots.map((dot, i) => {
          const entranceDelay = (i / ringDots.length) * totalStagger;
          return (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.color}
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={
                animated
                  ? {
                      scale: 1,
                      opacity: 0.85,
                      x: dot.floatX,
                      y: dot.floatY,
                    }
                  : {}
              }
              transition={{
                scale: {
                  duration: 0.8,
                  delay: entranceDelay,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.8,
                  delay: entranceDelay,
                  ease: "easeInOut",
                },
                x: {
                  duration: dot.floatDuration,
                  delay: entranceDelay + 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: dot.floatDuration,
                  delay: entranceDelay + 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          );
        })}
      </svg>
      {/* Center text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <p className="font-['Simplon_Mono','JetBrains Mono',monospace] text-[10px] text-[#6c6c6c] tracking-[1.2px] uppercase">
          Based on
        </p>
        <p className="font-['Saol Text',serif] font-light text-[48px] text-[#323429] leading-[1] tracking-[-1.5px]">
          85+
        </p>
        <p className="font-['Simplon_Mono','JetBrains Mono',monospace] text-[10px] text-[#6c6c6c] tracking-[1.2px] uppercase">
          Variables
        </p>
      </motion.div>
    </div>
  );
}

// ─── Bar Chart ────────────────────────────────────────────
function BarChart({
  metrics,
  selectedKey,
  onSelect,
}: {
  metrics: AnalysisMetric[];
  selectedKey: string;
  onSelect: (key: string) => void;
}) {
  return (
    <div className="bg-white rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] p-[20px] w-full flex flex-col gap-[16px]">
      {/* Low / High labels */}
      <div className="flex justify-between pl-[90px] mb-[-6px]">
        <p className="font-['Simplon_Norm','Inter',sans-serif] text-[11px] text-[#a0a090] tracking-[0.22px]">Low</p>
        <p className="font-['Simplon_Norm','Inter',sans-serif] text-[11px] text-[#a0a090] tracking-[0.22px] text-right">High</p>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-[12px]">
        {metrics.map((metric) => {
          const isSelected = metric.key === selectedKey;
          return (
            <button
              key={metric.key}
              onClick={() => onSelect(metric.key)}
              className="flex items-center gap-[12px] w-full cursor-pointer group"
            >
              <p
                className="font-['Simplon_Mono','JetBrains Mono',monospace] text-[10px] tracking-[0.8px] uppercase w-[78px] text-right shrink-0 transition-colors"
                style={{ color: "#323429", fontWeight: 500 }}
              >
                {metric.label}
              </p>
              <div className="flex-1 h-[12px] bg-[#f1ece0] rounded-full relative overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: metric.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value * 100}%` }}
                  transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Detail Cards Carousel ────────────────────────────────
function DetailCarousel({
  metrics,
  activeIndex,
  onIndexChange,
}: {
  metrics: AnalysisMetric[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);

  // Sync scroll position when activeIndex changes externally (e.g. bar tap)
  useEffect(() => {
    if (isUserScrolling.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 295 + 12; // card width + gap
    el.scrollTo({ left: activeIndex * cardWidth, behavior: "smooth" });
  }, [activeIndex]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    isUserScrolling.current = true;
    const cardWidth = 295 + 12;
    const index = Math.round(el.scrollLeft / cardWidth);
    const clamped = Math.min(index, metrics.length - 1);
    if (clamped !== activeIndex) {
      onIndexChange(clamped);
    }
    // Reset flag after a short delay
    clearTimeout((handleScroll as any)._timer);
    (handleScroll as any)._timer = setTimeout(() => {
      isUserScrolling.current = false;
    }, 150);
  }, [activeIndex, metrics.length, onIndexChange]);

  return (
    <div className="flex flex-col gap-[8px] w-full">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto w-full scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-[12px] px-[24px]">
          {metrics.map((metric) => (
            <div
              key={metric.key}
              className="snap-start bg-white rounded-[14px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06),0px_0.5px_2px_0px_rgba(0,0,0,0.04)] shrink-0 w-[295px] flex overflow-hidden"
            >
              {/* Left color bar */}
              <div className="w-[11px] shrink-0 rounded-l-[14px]" style={{ backgroundColor: metric.color }} />
              {/* Card content */}
              <div className="p-[20px] flex flex-col flex-1">
                <div className="flex items-center justify-between pb-[12px] mb-[12px] border-b border-[#E2D9C2]">
                  <p className="font-['Simplon_Mono','JetBrains Mono',monospace] font-medium text-[13px] text-[#323429] tracking-[1px] uppercase">
                    {metric.label}
                  </p>
                  <p className="font-['Simplon_Norm','Inter',sans-serif] text-[13px] text-[#6c6c6c] tracking-[0.26px]">
                    {metric.severityLabel}
                  </p>
                </div>
                <p className="font-['Simplon_Norm','Inter',sans-serif] text-[14px] text-[#323429] tracking-[0.28px] leading-[1.6]">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-[16px]" aria-hidden />
        </div>
      </div>
      {/* Dot indicators */}
      <div className="flex gap-[6px] items-center justify-center h-[18px]">
        {metrics.map((m, i) => (
          <div
            key={m.key}
            className="rounded-full shrink-0 transition-all duration-300"
            style={{
              width: i === activeIndex ? 16 : 6,
              height: 6,
              backgroundColor: i === activeIndex ? "#323429" : "#d1cdc4",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Product Thumbnails Preview ───────────────────────────
const previewProductIds = ["custom-shampoo", "custom-conditioner", "custom-scalp-mask"];

function ProductThumbnails() {
  const products = previewProductIds.map((id) => productCatalog[id]).filter(Boolean);

  return (
    <div className="flex gap-[8px] items-center justify-center w-full">
      {products.map((product, i) => (
        <div
          key={i}
          className="w-[40px] h-[40px] rounded-[8px] overflow-hidden"
        >
          <img
            src={product.routineImage}
            alt={product.routineName}
            className="w-full h-full object-cover blur-[1px]"
          />
        </div>
      ))}
    </div>
  );
}

// ─── Results Page ─────────────────────────────────────────
export default function Results() {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("damage");

  const selectedMetric = analysisMetrics.find((m) => m.key === selectedKey) || analysisMetrics[0];

  return (
    <div className="bg-[#f9f7f2] flex flex-col items-start relative min-h-screen w-full max-w-[375px] mx-auto">
      {/* Navigation */}
      <div className="flex flex-col items-center w-full shrink-0">
        <div className="h-[95px] relative w-full shrink-0">
          <div className="absolute bg-[#323429] inset-[0_0_57.89%_0]" />
          <div className="absolute bg-white inset-[42.11%_0_0_0] shadow-[0px_2px_3px_0px_rgba(234,234,234,0.5)]" />
          <p className="absolute font-['Simplon_Norm','Inter',sans-serif] inset-[9.47%_6.4%_67.37%_6.4%] leading-[1.5] text-[12px] text-center text-white tracking-[0.24px] underline whitespace-nowrap">
            {`500k 5-star Prose product reviews on Review & Refine`}<span>®</span>
          </p>
          <div className="absolute inset-[58.95%_0_0_0] flex items-center justify-center">
            <ProseLogo />
          </div>
          <span className="absolute font-['Simplon_Norm','Inter',sans-serif] text-[#323429] text-[14px] tracking-[0.28px] left-[5.6%] top-[57.89%] mt-[8px] leading-[1.5] select-none">
            ← Back
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto w-full pb-[40px]">
        {/* Hero */}
        <div className="px-[24px] pt-[24px] pb-[8px]">
          <motion.h1
            className="font-['Saol Text',serif] font-light text-[32px] text-[#323429] tracking-[-0.96px] leading-[1.1]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your results, Maggie
          </motion.h1>
        </div>

        {/* Dot Ring Visualization */}
        <motion.div
          className="px-[24px] py-[6px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <DotRingVisualization />
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className="px-[24px] pb-[16px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <BarChart
            metrics={analysisMetrics}
            selectedKey={selectedKey}
            onSelect={setSelectedKey}
          />
        </motion.div>

        {/* Detail Cards Carousel */}
        <div className="pb-[16px]">
          <DetailCarousel
            metrics={analysisMetrics}
            activeIndex={analysisMetrics.findIndex((m) => m.key === selectedKey)}
            onIndexChange={(i) => setSelectedKey(analysisMetrics[i].key)}
          />
        </div>

      </div>

      {/* Sticky Footer */}
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky bottom-0 left-0 w-full bg-white rounded-t-[10px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.1)] pt-[16px] pb-[24px] z-10"
      >
        <div className="px-[24px] flex flex-col gap-[12px]">
          <ProductThumbnails />
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/routine")}
            className="bg-[#323429] h-[44px] w-full rounded-[60px] flex items-center justify-center cursor-pointer"
          >
            <p className="font-['Simplon_Mono','JetBrains Mono',monospace] font-medium text-[12px] text-white text-center tracking-[0.96px] uppercase">
              See your Custom Routine
            </p>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
