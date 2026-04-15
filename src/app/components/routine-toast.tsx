// ─── Routine Toast ────────────────────────────────────────
// Custom toast notification for add/remove actions on the routine page.
// Matches the Figma design: dark pill with X icon, message, and product thumbnail.

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-989d84iiel";
import svgCheckPaths from "../../imports/svg-3f4wo3kjy1";

// ─── Types ────────────────────────────────────────────────
export interface ToastData {
  id: string;
  type: "added" | "removed";
  productName: string;
  productImage: string;
}

// ─── Toast Item Component ─────────────────────────────────
function ToastItem({
  toast,
  onDismiss,
}: {
  toast: ToastData;
  onDismiss: (id: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const message =
    toast.type === "added"
      ? `Added to Cart: ${toast.productName}`
      : `Removed: ${toast.productName}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="w-[343px]"
    >
      <div className="bg-[#323429] rounded-[12px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] px-[16px] py-[14px] flex items-center gap-[12px]">
        {/* Close / Check icon */}
        <button
          onClick={() => onDismiss(toast.id)}
          className="bg-[rgba(255,255,255,0.15)] rounded-full shrink-0 size-[24px] flex items-center justify-center cursor-pointer"
        >
          {toast.type === "removed" ? (
            <svg
              className="size-[9.4px]"
              fill="none"
              viewBox="0 0 11.0371 11.0371"
            >
              <path
                d={svgPaths.p23b30680}
                stroke="white"
                strokeLinecap="square"
                strokeWidth="1.17"
              />
              <path
                d={svgPaths.p277a550}
                stroke="white"
                strokeLinecap="square"
                strokeWidth="1.17"
              />
            </svg>
          ) : (
            <svg
              className="size-[12px]"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                d={svgCheckPaths.pa0b2ae0}
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>

        {/* Message */}
        <p className="font-['Simplon_Norm',sans-serif] font-medium text-[14px] text-white tracking-[0.28px] leading-[1.4] flex-1 truncate">
          {message}
        </p>

        {/* Product thumbnail */}
        <div className="shrink-0 size-[31px] rounded-[4px] overflow-hidden">
          <img
            alt=""
            className="size-full object-cover"
            src={toast.productImage}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Toast Container ──────────────────────────────────────
export function RoutineToastContainer({
  toasts,
  onDismiss,
}: {
  toasts: ToastData[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-[8px] items-center pb-[8px]">
      <AnimatePresence>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} onDismiss={onDismiss} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── Hook ─────────────────────────────────────────────────
let toastCounter = 0;

export function useRoutineToast() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = useCallback(
    (type: "added" | "removed", productName: string, productImage: string) => {
      const id = `toast-${++toastCounter}-${Date.now()}`;
      setToasts((prev) => [...prev, { id, type, productName, productImage }]);
    },
    []
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, showToast, dismissToast };
}