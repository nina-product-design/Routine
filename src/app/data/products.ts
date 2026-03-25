// ─── Product Data ─────────────────────────────────────────
// Structured from Product_List CSV. Each product maps to an
// image asset and either RoutineProductCard or RoutineProductCardAccessory.

import {
  type ProductCategory,
  RoutineCardHaircareAssets,
  RoutineCardSupplementsAssets,
  RoutineCardAccessoryAssets,
  RoutineCardBrushAssets,
} from "../components/routine-product-card";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discounted: boolean;
  category: ProductCategory;
  size: string;
  shortDescription: string;
  fullDescription: string;
  goalTags: string[];
  image: string;
}

// Helper: 60% off first order
function discountedPrice(original: number): number {
  return Math.round(original * 0.4 * 100) / 100;
}

export const products: Product[] = [
  // ── Haircare ────────────────────────────────────────────
  {
    id: "custom-shampoo",
    name: "Custom Shampoo",
    price: discountedPrice(35),
    originalPrice: 35,
    discounted: true,
    category: "haircare",
    size: "8.5 fl oz",
    shortDescription:
      "A gentle, clarifying shampoo, personalized to meet your unique hair and scalp cleansing needs.",
    fullDescription:
      "From rebalancing roots to gently hydrating lengths, Prose Custom Shampoo is specifically formulated to target multiple concerns, including oily hair, dry scalps, and more. Used consistently, it's proven to increase hair strength and reduce breakage.*\n\n*Instrumental test of Prose Shampoo and Conditioner vs. non-conditioning shampoo",
    goalTags: ["Reduced damage", "Stronger growth", "Less irritation"],
    image: RoutineCardHaircareAssets.shampoo,
  },
  {
    id: "custom-conditioner",
    name: "Custom Conditioner",
    price: discountedPrice(35),
    originalPrice: 35,
    discounted: true,
    category: "haircare",
    size: "8.5 fl oz",
    shortDescription:
      "A nourishing, personalized conditioner to soften, smooth, and target your unique hair concerns.",
    fullDescription:
      "From restoring ends to strengthening lengths, Prose Custom Conditioner is custom-formulated to hydrate your specific hair type and texture — including fine, curly, and colored — without ever weighing it down.\n\n*Instrumental efficacy test of Prose Custom Shampoo, Conditioner & Hair Mask vs. non-conditioning shampoo",
    goalTags: ["Improved hydration", "Silky softness", "Reduced damage"],
    image: RoutineCardHaircareAssets.conditioner,
  },
  {
    id: "custom-scalp-mask",
    name: "Custom Scalp Mask",
    price: discountedPrice(49),
    originalPrice: 49,
    discounted: true,
    category: "haircare",
    size: "8.5 fl oz",
    shortDescription:
      "A gentle, exfoliating scalp mask to soothe, rebalance, and target your specific scalp needs.",
    fullDescription:
      "An intensive scalp mask personalized with targeted ingredients and micro-exfoliating jojoba beads to help restore balance to all scalp types, even sensitive. Whether you need soothing repair or a gentle detox, Prose Custom Scalp Mask supports hair and scalp health at the root.",
    goalTags: ["Improved hydration", "Stronger growth"],
    image: RoutineCardHaircareAssets.scalpMask,
  },
  {
    id: "custom-leave-in-conditioner",
    name: "Custom Leave-In Conditioner",
    price: discountedPrice(32),
    originalPrice: 32,
    discounted: true,
    category: "haircare",
    size: "5.1 fl oz",
    shortDescription:
      "A personalized leave-in conditioner that primes and protects your hair for daily styling.",
    fullDescription:
      "Prose Custom Leave-In Conditioner is a hydrating, made-to-order formula that detangles, smooths flyaways, and leaves strands soft, polished, and manageable. It also acts as a heat protectant spray, protecting hair from heat damage up to 450\u00B0F.*\n\n*Instrumental efficacy test of Prose Custom Leave-in Conditioner vs. non-treated hair.",
    goalTags: ["Improved hydration", "Silky softness"],
    image: RoutineCardHaircareAssets.leaveInConditioner,
  },
  {
    id: "custom-dry-shampoo",
    name: "Custom Dry Shampoo",
    price: discountedPrice(32),
    originalPrice: 32,
    discounted: true,
    category: "haircare",
    size: "1.3 fl oz",
    shortDescription:
      "A personalized, powder dry shampoo to refresh roots, boost volume, and extend hairstyles.",
    fullDescription:
      "Prose Custom Dry Shampoo is made just for you to help maintain a clean, balanced scalp, while adding volume and body in between washes. The translucent powder formula is free from butane, isobutane, and propane — harmful propellants commonly found in off-the-shelf alternatives.",
    goalTags: ["Reduced damage", "Less irritation"],
    image: RoutineCardHaircareAssets.dryShampoo,
  },
  {
    id: "custom-hair-oil",
    name: "Custom Hair Oil",
    price: discountedPrice(49),
    originalPrice: 49,
    discounted: true,
    category: "haircare",
    size: "1.7 fl oz",
    shortDescription:
      "A multi-tasking, personalized hair oil that can be used as a treatment, styler, or finishing oil.",
    fullDescription:
      "Prose Custom Hair Oil is tailored to your unique hair type, texture, and styling preferences to help tame flyaways, smooth unwanted frizz, and lock in hydration. Use it as a nurturing treatment before washing, a styling primer, or a finishing touch.\n\n*Instrumental efficacy test of Prose Custom Hair Oil vs. non-treated hair.",
    goalTags: ["Reduced damage", "Stronger growth", "Improved hydration"],
    image: RoutineCardHaircareAssets.hairOil,
  },
  {
    id: "custom-scalp-serum",
    name: "Custom Scalp Serum",
    price: discountedPrice(56),
    originalPrice: 56,
    discounted: true,
    category: "haircare",
    size: "1.7 fl oz",
    shortDescription:
      "A lightweight, personalized serum for optimal scalp health and fuller, denser-looking hair.",
    fullDescription:
      "Prose Custom Scalp Serum is a fast-absorbing formula tailored to your unique needs — from restoring balance to itchy, oily, and dry scalps to soothing sensitivities. Used daily, it promotes a healthier scalp and stronger hair in 4 weeks.*\n\n*Results of a 4-week external use test performed on 97 subjects",
    goalTags: ["Reduced damage", "Stronger growth", "Less irritation"],
    image: RoutineCardHaircareAssets.scalpSerum,
  },
  {
    id: "custom-curl-cream",
    name: "Custom Curl Cream",
    price: discountedPrice(32),
    originalPrice: 32,
    discounted: true,
    category: "haircare",
    size: "5.1 fl oz",
    shortDescription:
      "A nourishing curl cream, personalized to your unique curl pattern, hair texture, and porosity.",
    fullDescription:
      "Prose Custom Curl Cream is designed to define your natural texture, hydrate strands, and control unwanted frizz for up to 24 hours.* Whether your hair is wavy, curly, coily, fine, or thick it can be used as a daily styler or for touch-ups on the go.\n\n*Instrumental efficacy test of Prose Curl Cream in high-humidity conditions.",
    goalTags: ["Stronger growth", "Improved hydration", "Silky softness"],
    image: RoutineCardHaircareAssets.curlCream,
  },
  {
    id: "custom-styling-gel",
    name: "Custom Styling Gel",
    price: discountedPrice(32),
    originalPrice: 32,
    discounted: true,
    category: "haircare",
    size: "8.5 fl oz",
    shortDescription:
      "A do-it-all styling gel, tailored to your unique hair type, texture, curl pattern, and more.",
    fullDescription:
      "Prose Custom Styling Gel gives curls, coils, waves, and slicked-back styles true staying power without crunch or residue. No matter your style, it provides a personalized amount of hold and definition while controlling frizz and shrinkage — even in humid weather.\n\n*Results of Prose Custom Styling Gel use test performed on 104 subjects with hair type 2C to 4C after 15 days of use (somewhat agree to strongly agree).",
    goalTags: [],
    image: RoutineCardHaircareAssets.styleGel,
  },
  {
    id: "custom-hair-mask",
    name: "Custom Hair Mask",
    price: discountedPrice(49),
    originalPrice: 49,
    discounted: true,
    category: "haircare",
    size: "8.5 fl oz",
    shortDescription:
      "A deeply hydrating, personalized hair mask that restores + strengthens hair from lengths to ends.",
    fullDescription:
      "Prose Custom Hair Mask is an intensive pre-shampoo treatment personalized to your unique hair goals. Concentrated and conditioning, it smooths, repairs, and provides up to 3x stronger hair and less breakage after just one use.*\n\n*Instrumental efficacy test of Prose Custom Shampoo, Conditioner & Hair Mask vs. non-conditioning shampoo.",
    goalTags: ["Reduced damage", "Improved hydration", "Stronger growth"],
    image: RoutineCardHaircareAssets.hairMask,
  },

  // ── Supplements ─────────────────────────────────────────
  {
    id: "custom-root-source-supplements",
    name: "Custom Root Source\u00AE Hair Supplements",
    price: discountedPrice(64),
    originalPrice: 64,
    discounted: true,
    category: "supplements",
    size: "One month supply",
    shortDescription:
      "Personalized supplements to promote hair growth, thickness, and density — in 2 daily capsules.",
    fullDescription:
      "Powered by 99% natural ingredients, Prose Custom Root Source Hair Supplements are formulated with PureCatalyst\u2122 — our clinically tested, proprietary growth complex. The targeted, 2-capsule system helps boost hair growth and address individual needs — from stress-related hair shedding to scalp sensitivity, excess oiliness, and more.",
    goalTags: ["Stronger growth"],
    image: RoutineCardSupplementsAssets.supplements,
  },

  // ── Accessories ─────────────────────────────────────────
  {
    id: "hair-towel",
    name: "Hair Towel",
    price: 35,
    originalPrice: 35,
    discounted: false,
    category: "accessory",
    size: '23" x 37" in',
    shortDescription:
      "Fast-drying hair towel for reducing unwanted frizz and preserving hair's natural texture. Made from 100% recycled microfiber derived from plastic bottles.\n\nDesigned for all textures and lengths",
    fullDescription:
      "Fast-drying hair towel for reducing unwanted frizz and preserving hair's natural texture. Made from 100% recycled microfiber derived from plastic bottles.\n\nDesigned for all textures and lengths",
    goalTags: [],
    image: RoutineCardAccessoryAssets.towel,
  },
  {
    id: "corsica-candle",
    name: "Corsica Candle",
    price: 52,
    originalPrice: 52,
    discounted: false,
    category: "accessory",
    size: "8.6 oz",
    shortDescription:
      "Sustainably crafted, paraffin-free candles featuring 3 of our fan-favorite fragrances. Includes protective dust cover.",
    fullDescription:
      "Sustainably crafted, paraffin-free candles featuring 3 of our fan-favorite fragrances. Includes protective dust cover.\nUp to 50 hours burn time",
    goalTags: [],
    image: RoutineCardAccessoryAssets.candle1,
  },
  {
    id: "prelude-candle",
    name: "Prelude Candle",
    price: 52,
    originalPrice: 52,
    discounted: false,
    category: "accessory",
    size: "8.6 oz",
    shortDescription:
      "Sustainably crafted, paraffin-free candles featuring 3 of our fan-favorite fragrances. Includes protective dust cover.",
    fullDescription:
      "Sustainably crafted, paraffin-free candles featuring 3 of our fan-favorite fragrances. Includes protective dust cover.",
    goalTags: [],
    image: RoutineCardAccessoryAssets.candle2,
  },
  {
    id: "arcadia-candle",
    name: "Arcadia Candle",
    price: 52,
    originalPrice: 52,
    discounted: false,
    category: "accessory",
    size: "8.6 oz",
    shortDescription:
      "Sustainably crafted, paraffin-free candles featuring 3 of our fan-favorite fragrances. Includes protective dust cover.",
    fullDescription:
      "Sustainably crafted, paraffin-free candles featuring 3 of our fan-favorite fragrances. Includes protective dust cover.",
    goalTags: [],
    image: RoutineCardAccessoryAssets.candle3,
  },

  // ── Brush ───────────────────────────────────────────────
  {
    id: "boar-brush",
    name: "Boar Brush",
    price: 72,
    originalPrice: 72,
    discounted: false,
    category: "brush",
    size: '8.75" x 2.5" x 1.5"',
    shortDescription:
      "Handcrafted with 100% boar bristle. Made with only the root of the bristle for an ultra-luxurious feel.",
    fullDescription:
      "Handcrafted with 100% boar bristle. Made with only the root of the bristle for an ultra-luxurious feel.",
    goalTags: [],
    image: RoutineCardBrushAssets.brush,
  },
];

// ─── Helpers ──────────────────────────────────────────────

export const haircareProducts = products.filter((p) => p.category === "haircare");
export const supplementProducts = products.filter((p) => p.category === "supplements");
export const accessoryProducts = products.filter((p) => p.category === "accessory");
export const brushProducts = products.filter((p) => p.category === "brush");

/** All products that use the standard RoutineProductCard */
export const standardCardProducts = products.filter(
  (p) => p.category !== "accessory"
);

/** All products that use the RoutineProductCardAccessory */
export const accessoryCardProducts = accessoryProducts;
