import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../context/cart-context";
import { productCatalog } from "../data/product-catalog";
import svgPaths from "../../imports/svg-4ieabqkopk";

// ─── Skeleton Screen ──────────────────────────────────────
function SkeletonBone({ className, variant = "light" }: { className?: string; variant?: "light" | "tan" }) {
  const bgColor = variant === "tan" ? "bg-[#e2d9c2]" : "bg-[#f0f0f0]";
  const shimmerColor = variant === "tan" ? "via-[#e3dac3]" : "via-[#f2f2f2]";
  const fromColor = variant === "tan" ? "from-[rgba(226,217,194,0)]" : "from-[rgba(234,234,234,0)]";
  const toColor = variant === "tan" ? "to-[rgba(226,217,194,0)]" : "to-[rgba(234,234,234,0)]";

  return (
    <div className={`${bgColor} overflow-clip relative rounded-[4px] ${className || ""}`}>
      <div
        className={`absolute bg-gradient-to-r ${fromColor} ${shimmerColor} ${toColor} h-full w-[100px] top-0 animate-[shimmer_1.5s_infinite]`}
      />
    </div>
  );
}

function SkeletonBoneDark({ className }: { className?: string }) {
  return (
    <div className={`bg-[#f1ece0] overflow-clip relative rounded-[4px] ${className || ""}`}>
      <div
        className="absolute bg-gradient-to-r from-[rgba(241,236,224,0)] via-[#f7f3e8] to-[rgba(241,236,224,0)] h-full w-[100px] top-0 animate-[shimmer_1.5s_infinite]"
      />
    </div>
  );
}

function SkeletonScreen() {
  return (
    <div className="bg-[#f9f7f2] flex flex-col items-center w-full min-h-screen">
      {/* Summary tab skeleton */}
      <div className="bg-white flex gap-[16px] items-start justify-center px-[24px] py-[16px] w-full">
        <SkeletonBone className="flex-1 h-[24px]" />
        <SkeletonBone className="w-[66px] h-[24px]" />
      </div>

      {/* Reduce & Reuse skeleton */}
      <div className="bg-[#f1ece0] flex flex-col gap-[12px] items-center justify-center px-[24px] py-[16px] w-full">
        <SkeletonBone className="w-full h-[32px]" variant="tan" />
        <div className="flex gap-[12px] items-start w-full">
          <SkeletonBone className="w-[43px] h-[32px]" variant="tan" />
          <SkeletonBone className="flex-1 h-[32px]" variant="tan" />
        </div>
      </div>

      {/* Personal details skeleton */}
      <div className="flex flex-col gap-[16px] items-start px-[24px] py-[48px] w-full max-w-[375px]">
        <SkeletonBoneDark className="w-full h-[20px]" />
        <div className="flex flex-col gap-[12px] w-full">
          <SkeletonBoneDark className="w-full h-[48px]" />
          <SkeletonBoneDark className="w-full h-[48px]" />
          <SkeletonBoneDark className="w-full h-[48px]" />
          <SkeletonBoneDark className="w-full h-[48px]" />
        </div>
        <SkeletonBoneDark className="w-full h-[236px] mt-[12px]" />
      </div>

      {/* CTA skeleton */}
      <div className="px-[24px] w-full max-w-[375px]">
        <div className="bg-[#4d523c] h-[48px] w-full" />
      </div>
    </div>
  );
}

// ─── Prose Logo ───────────────────────────────────────────
function ProseLogo() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-[62px]">
      <div className="absolute bottom-[0.5px] h-[17.999px] left-0 w-[62px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0001 17.9995">
          <path d={svgPaths.p17b85140} fill="#323429" />
          <path d={svgPaths.p2b3a1500} fill="#323429" />
        </svg>
      </div>
      <div className="absolute bottom-[0.5px] h-[17.888px] left-0 w-[57.183px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1826 17.8881">
          <path d={svgPaths.p135e4b00} fill="#323429" />
        </svg>
      </div>
    </div>
  );
}

// ─── Main Checkout Page ───────────────────────────────────
export default function Checkout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [pumpCheck, setPumpCheck] = useState(false);
  const [textUpdates, setTextUpdates] = useState(false);
  const [textOffers, setTextOffers] = useState(false);

  const {
    routineCartIds,
    productFrequencies,
    getCurrentPrice,
  } = useCart();

  // Calculate totals from cart
  const itemCount = routineCartIds.length;

  const subtotal = routineCartIds.reduce((sum, id) => {
    const product = productCatalog[id];
    if (!product) return sum;
    const currentPrice = getCurrentPrice(id, product.originalPrice, product.price);
    return sum + currentPrice;
  }, 0);

  const originalSubtotal = routineCartIds.reduce((sum, id) => {
    const product = productCatalog[id];
    if (!product) return sum;
    return sum + product.originalPrice;
  }, 0);

  const hasSubscription = routineCartIds.some(
    (id) => productFrequencies[id] && productFrequencies[id] !== "buy-once"
  );
  const shippingCost = hasSubscription ? 0 : 6.95;
  const total = subtotal + shippingCost;
  const hasDiscount = originalSubtotal > subtotal;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#f9f7f2] flex flex-col items-center h-screen w-[375px] mx-auto relative overflow-y-auto">
        {/* Banner */}
        <div className="bg-[#323429] flex h-[40px] items-center justify-center px-[7px] py-[5px] w-full">
          <p className="font-['Simplon Norm',sans-serif] text-[14px] text-center text-white tracking-[0.28px] leading-[1.5] whitespace-nowrap">Love your first order (or it's on us)</p>
        </div>
        {/* Nav */}
        <div className="bg-white w-full border-b border-[#b9c2a6]">
          <div className="flex items-center px-[24px] py-[12px] w-full">
            <div className="flex gap-[115px] items-center w-full">
              <button onClick={() => navigate("/cart")} className="h-[14px] w-[18px] cursor-pointer relative">
                <svg className="block size-full" fill="none" viewBox="0 0 18.5714 14.199">
                  <path d={svgPaths.p7ea0a80} stroke="#161716" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 7.09943H18.0714" stroke="#161716" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ProseLogo />
            </div>
          </div>
        </div>
        <SkeletonScreen />
      </div>
    );
  }

  return (
    <div className="bg-[#f9f7f2] flex flex-col items-center h-screen w-[375px] mx-auto relative overflow-y-auto">
      {/* Banner */}
      <div className="bg-[#323429] flex h-[40px] items-center justify-center px-[7px] py-[5px] w-full">
        <p className="font-['Simplon Norm',sans-serif] text-[14px] text-center text-white tracking-[0.28px] leading-[1.5] whitespace-nowrap">Love your first order (or it's on us)</p>
      </div>

      {/* Navigation */}
      <div className="bg-white w-full border-b border-[#b9c2a6]">
        <div className="flex items-center px-[24px] py-[12px] w-full">
          <div className="flex gap-[115px] items-center w-full">
            <button onClick={() => navigate("/cart")} className="h-[14px] w-[18px] cursor-pointer relative">
              <svg className="block size-full" fill="none" viewBox="0 0 18.5714 14.199">
                <path d={svgPaths.p7ea0a80} stroke="#161716" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 7.09943H18.0714" stroke="#161716" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <ProseLogo />
          </div>
        </div>
      </div>

      {/* Order Summary Tab */}
      <div className="bg-white flex items-start justify-between px-[24px] py-[16px] w-full">
        <button
          onClick={() => setSummaryOpen(!summaryOpen)}
          className="flex gap-[8px] items-center cursor-pointer"
        >
          <p className="font-['Simplon_Mono',monospace] text-[12px] text-[#161716] tracking-[0.96px] uppercase whitespace-nowrap">
            order summary ({itemCount})
          </p>
          <div className={`h-[3.6px] w-[7.2px] transition-transform ${summaryOpen ? "rotate-180" : ""}`}>
            <svg className="block size-full" fill="none" viewBox="0 0 8.19963 4.80692">
              <path d={svgPaths.p20033800} stroke="#323429" strokeLinecap="round" />
            </svg>
          </div>
        </button>
        <div className="flex gap-[8px] items-start text-[12px] text-right tracking-[0.96px] uppercase whitespace-nowrap">
          {hasDiscount && (
            <p className="font-['Simplon_Mono',monospace] line-through text-[#6c6c6c]">
              ${originalSubtotal.toFixed(2)}
            </p>
          )}
          <p className="font-['Simplon_Mono',monospace] font-medium text-[#161716]">
            ${total.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Reduce & Reuse */}
      <div className="bg-[#f1ece0] flex flex-col gap-[12px] items-center justify-center px-[24px] py-[16px] w-full">
        <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px] w-full">
          <span className="font-['Simplon Norm',sans-serif] font-medium">Reduce and reuse</span>
          <span>{` — Only your first subscription order includes pumps/droppers to reduce waste.`}</span>
        </p>
        <div className="flex gap-[8px] items-center w-full">
          <button
            onClick={() => setPumpCheck(!pumpCheck)}
            className="relative shrink-0 size-[28px] cursor-pointer"
          >
            <svg className="block size-full" fill="none" viewBox="0 0 28 28">
              <rect fill="white" height="27.5" width="27.5" x="0.25" y="0.25" />
              <rect height="27.5" stroke="#A6A6A6" strokeWidth="0.5" width="27.5" x="0.25" y="0.25" />
              {pumpCheck && (
                <path d="M8 14L12 18L20 10" stroke="#161716" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
          <p className="font-['Simplon Norm',sans-serif] text-[10px] text-[#161716] tracking-[0.2px] flex-1">
            Check this box if you need pumps/droppers added to your future subscription orders.
          </p>
        </div>
      </div>

      {/* Account Details Form */}
      <div className="flex flex-col gap-[24px] items-start px-[24px] py-[48px] w-full">
        {/* Header */}
        <p className="font-['Saol Text',serif] font-light text-[20px] text-[#161716] tracking-[-0.6px] leading-[1.1]">
          Account details
        </p>

        {/* Form Fields */}
        <div className="flex flex-col gap-[12px] w-full">
          {/* First name */}
          <div className="bg-white h-[56px] w-full">
            <div className="flex items-center px-[16px] py-[8px] h-full">
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px]">First name*</p>
                <p className="font-['Simplon Norm',sans-serif] text-[16px] text-[#6c6c6c] tracking-[0.32px]">Maggie</p>
              </div>
            </div>
          </div>

          {/* Last name */}
          <div className="bg-white h-[56px] w-full">
            <div className="flex items-center px-[16px] py-[8px] h-full">
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px]">Last name*</p>
                <p className="font-['Simplon Norm',sans-serif] text-[16px] text-[#6c6c6c] tracking-[0.32px]">Michaux</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white h-[56px] w-full">
            <div className="flex items-center px-[16px] py-[8px] h-full">
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px]">Email*</p>
                <p className="font-['Simplon Norm',sans-serif] text-[16px] text-[#6c6c6c] tracking-[0.32px]">maggiemich@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Phone number */}
          <div className="bg-white h-[56px] w-full border border-[#eaeaea] shadow-[2px_2px_3px_0px_#eaeaea]">
            <div className="flex items-center px-[16px] py-[8px] h-full">
              <div className="flex flex-col gap-[2px] flex-1 relative">
                <p className="font-['Simplon Norm',sans-serif] text-[16px] text-[#6c6c6c] tracking-[0.32px]">Phone numer*</p>
                <div className="absolute h-[17.894px] right-0 top-[3px] w-[29px]">
                  <div
                    className="absolute inset-[-50.3%_-82.05%_-56.48%_-58.62%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[17px_9px] mask-size-[29px_17.894px]"
                    style={{ maskImage: `url('${svgPaths.p135e4b00}')` }}
                  >
                    <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={svgPaths.p135e4b00} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal text */}
        <div className="flex flex-col gap-[12px] w-full">
          <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#6c6c6c] tracking-[0.24px] leading-[1.5]">
            <span>{`By checking the box(es) below and entering your phone number above, you consent to receive recurring account-related text messages (such as order and shipping confirmation, or error alerts) and/or marketing text messages (such as ads, promotions, and special offers) from Prose from time to time at the number provided, including messages sent using an automatic telephone dialing system. You further agree to our `}</span>
            <span className="underline">Terms of Use</span>
            <span>{`. Consent is not a condition of any purchase. You can opt-out at any time by replying STOP to any one of our messages or by logging into your Prose account and visiting your communication settings in your `}</span>
            <span className="underline">Account Details</span>
            <span>{`. Message and data rates may apply. Message frequency varies. Visit our `}</span>
            <span className="underline">Privacy Policy</span>
            <span>{` for more information.`}</span>
          </p>

          {/* Text me checkboxes */}
          <div className="flex flex-col gap-[12px] w-full">
            <button
              onClick={() => setTextUpdates(!textUpdates)}
              className="flex gap-[16px] items-center w-full cursor-pointer"
            >
              <div className="bg-white relative shrink-0 size-[28px] border-[0.5px] border-[#eaeaea] shadow-[2px_2px_3px_0px_#eaeaea]">
                {textUpdates && (
                  <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 28 28">
                    <path d="M8 14L12 18L20 10" stroke="#161716" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px] text-left">
                Text me with order updates
              </p>
            </button>

            <button
              onClick={() => setTextOffers(!textOffers)}
              className="flex gap-[16px] items-center w-full cursor-pointer"
            >
              <div className="bg-white relative shrink-0 size-[28px] border-[0.5px] border-[#eaeaea] shadow-[2px_2px_3px_0px_#eaeaea]">
                {textOffers && (
                  <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 28 28">
                    <path d="M8 14L12 18L20 10" stroke="#161716" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <p className="font-['Simplon Norm',sans-serif] text-[12px] text-[#161716] tracking-[0.24px] text-left">
                Text me with news and offers
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Continue to Shipping CTA */}
      <div className="px-[24px] pb-[24px] w-full">
        <button className="bg-[#4d523c] h-[48px] w-full flex items-center justify-center cursor-pointer">
          <p className="font-['Simplon_Mono',monospace] font-medium text-[12px] text-white tracking-[0.96px] uppercase">
            continue to shipping
          </p>
        </button>
      </div>
    </div>
  );
}