// Cart Card thumbnail assets — Figma cart-specific images with per-product positioning
// Container is 67×93px (not square), images are absolutely positioned within

// ─── Cart-specific Thumbnails ─────────────────────────────
import CartThumbShampoo from "figma:asset/5d630ba1673a424b863cec5709fad96c1b8ca39f.png";
import CartThumbConditioner from "figma:asset/4b2dc005157447681d1b83064526355b473b26ba.png";
import CartThumbScalpMask from "figma:asset/b59e329e095792d0c450eb55149a54b82b0e30b3.png";
import CartThumbHairOil from "figma:asset/bea50f72db553a88f118e639735d92254f417982.png";
import CartThumbDryShampoo from "figma:asset/cabefff756088b583173834b7e929f5abf194c57.png";
import CartThumbSupplements from "figma:asset/994253fd7e598bdbee42294461bb591e6ad6a94f.png";
import CartThumbBrush from "figma:asset/cb9dce9698ca4a4a33657c067546783f1f7c5b3a.png";
import CartThumbTowel from "figma:asset/be516515f12a38475186feceb608b91fff23889a.png";
import CartThumbCandleCorsica from "figma:asset/fcddb13bffc6b1dc78773f3bf1ed1eb7c473c821.png";
import CartThumbCandlePrelude from "figma:asset/2e6f92bc67cecc4d32b629dbf315d25d94505ca2.png";
import CartThumbCandleArcadia from "figma:asset/d335be5b9f38204d6a723fd37cbe3f669eb18b13.png";

// ─── Fallback images (routine card assets for products without cart-specific thumbnails) ──
import CartThumbCurlCream from "figma:asset/aa32e21c78e38ac5a150b4302c67617d6582c71d.png";
import CartThumbLeaveInConditioner from "figma:asset/ab830bf0e89b213ad60a82841671dd85dd2ad000.png";
import CartThumbStylingGel from "figma:asset/009c58c20b24895b6b39cb0d46aee63d6e9e959e.png";
import CartThumbHairMask from "figma:asset/d9eae675b15012a3cb1df8a466567a72306bb2ec.png";

// ─── Types ────────────────────────────────────────────────
export interface CartImageData {
  src: string;
  /** CSS positioning for the absolutely-positioned img inside the 67×93 thumbnail container */
  style: {
    height: string;
    left: string;
    top: string;
    width: string;
  };
}

// ─── Default positioning (haircare bottles without specific Figma values) ──
const defaultHaircareStyle = {
  height: "137.2%",
  left: "-24.05%",
  top: "-15.04%",
  width: "149.94%",
};

// ─── Cart Image Data Map (product id → image + positioning from Figma) ──
export const cartImageDataMap: Record<string, CartImageData> = {
  // ── Products with cart-specific Figma thumbnails ────────
  "custom-shampoo": {
    src: CartThumbShampoo,
    style: { height: "137.2%", left: "-24.05%", top: "-15.04%", width: "149.94%" },
  },
  "custom-conditioner": {
    src: CartThumbConditioner,
    style: { height: "136.64%", left: "-24.93%", top: "-14.8%", width: "152.15%" },
  },
  "custom-scalp-mask": {
    src: CartThumbScalpMask,
    style: { height: "112.12%", left: "-12.06%", top: "4.6%", width: "124.48%" },
  },
  "hair-oil": {
    src: CartThumbHairOil,
    style: { height: "100%", left: "-7.1%", top: "14.71%", width: "111.05%" },
  },
  "dry-shampoo": {
    src: CartThumbDryShampoo,
    style: { height: "117.08%", left: "-14.54%", top: "-0.18%", width: "130.37%" },
  },
  "supplements": {
    src: CartThumbSupplements,
    style: { height: "119.43%", left: "-18.37%", top: "-1.36%", width: "133.69%" },
  },
  "boar-brush": {
    src: CartThumbBrush,
    style: { height: "121.8%", left: "-17.63%", top: "-10.4%", width: "135.27%" },
  },
  "hair-towel": {
    src: CartThumbTowel,
    style: { height: "116.61%", left: "-16.45%", top: "-15.96%", width: "129.49%" },
  },
  "corsica-candle": {
    src: CartThumbCandleCorsica,
    style: { height: "136.16%", left: "-25.19%", top: "-18.94%", width: "151.87%" },
  },
  "prelude-candle": {
    src: CartThumbCandlePrelude,
    style: { height: "130.55%", left: "-22.68%", top: "-17.13%", width: "145.36%" },
  },
  "arcadia-candle": {
    src: CartThumbCandleArcadia,
    style: { height: "136.16%", left: "-24.93%", top: "-15.22%", width: "151.87%" },
  },

  // ── Products using routine card fallback images ─────────
  "scalp-serum": {
    src: CartThumbHairOil,
    style: { height: "100%", left: "-7.1%", top: "14.71%", width: "111.05%" },
  },
  "curl-cream": {
    src: CartThumbCurlCream,
    style: defaultHaircareStyle,
  },
  "leave-in-conditioner": {
    src: CartThumbLeaveInConditioner,
    style: defaultHaircareStyle,
  },
  "styling-gel": {
    src: CartThumbStylingGel,
    style: defaultHaircareStyle,
  },
  "hair-mask": {
    src: CartThumbHairMask,
    style: defaultHaircareStyle,
  },
};