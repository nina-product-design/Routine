// ─── Product Catalog ──────────────────────────────────────
// Unified data for rendering products in both the upsell carousel
// and the routine cart (as RoutineProductCard or RoutineProductCardAccessory).

import type { Ingredient } from "../components/routine-product-card";
import {
  RoutineCardHaircareAssets,
  RoutineCardAccessoryAssets,
  RoutineCardBrushAssets,
  RoutineCardSupplementsAssets,
} from "../components/routine-product-card";
import {
  CarouselCardShampoo,
  CarouselCardConditioner,
  CarouselCardScalpMask,
  CarouselCardHairOil,
  CarouselCardScalpSerum,
  CarouselCardCurlCream,
  CarouselCardLeaveInConditionerSpray,
  CarouselCardDryShampoo,
  CarouselCardStylingGel,
  CarouselCardHairMask,
  CarouselCardSupplements,
  CarouselCardBoarBrush,
  CarouselCardHairTowel,
  CarouselCardCandleCorsica,
  CarouselCardCandlePrelude,
  CarouselCardCandleArcadia,
} from "./carousel-card-assets";
import { haircareIngredientMap } from "./ingredients";

// ─── Types ────────────────────────────────────────────

/** "full" = RoutineProductCard (concerns/ingredients/preferences) */
/** "simple" = RoutineProductCardAccessory (description-only) */
export type CardType = "full" | "simple";

export interface CatalogProduct {
  id: string;
  cardType: CardType;
  category: "haircare" | "accessory" | "brush" | "candles" | "supplements";
  // Upsell carousel fields
  carouselName: string;
  carouselImage: string;
  upsellTag?: string;
  // Routine card fields
  routineName: string;
  routineImage: string;
  description: string | string[];
  size: string;
  badge: string;
  price: number;
  originalPrice: number;
  // Backend flag for "Recommended" tag
  isRecommended?: boolean;
  // Full-card-only fields (haircare)
  concerns?: string[];
  ingredients?: Ingredient[];
  preferences?: string;
  frequency?: string;
  discountLabel?: string;
}

// ─── Helpers ──────────────────────────────────────────────

function discountedPrice(original: number): number {
  return Math.round(original * 0.4 * 100) / 100;
}

// ─── Catalog ──────────────────────────────────────────────

export const productCatalog: Record<string, CatalogProduct> = {
  // ── Haircare ────────────────────────────────────────────
  "custom-shampoo": {
    id: "custom-shampoo",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Shampoo",
    carouselImage: CarouselCardShampoo,
    upsellTag: "Recommended",
    routineName: "Maggie's Shampoo",
    routineImage: RoutineCardHaircareAssets.shampoo,
    description:
      "A gentle, sulfate-free cleanser that maintains the natural balance of your scalp, without color washout.",
    size: "8.5 fl oz",
    badge: "Recommended",
    price: discountedPrice(35),
    originalPrice: 35,
    isRecommended: true,
    concerns: ["Dryness", "Damage", "Oiliness"],
    ingredients: haircareIngredientMap["custom-shampoo"],
    preferences: "Fragrance free.",
    frequency: "Every 12 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "custom-conditioner": {
    id: "custom-conditioner",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Conditioner",
    carouselImage: CarouselCardConditioner,
    upsellTag: "Recommended",
    routineName: "Maggie's Conditioner",
    routineImage: RoutineCardHaircareAssets.conditioner,
    description:
      "A nourishing, personalized conditioner to soften, smooth, and target your unique hair concerns.",
    size: "8.5 fl oz",
    badge: "Recommended",
    price: discountedPrice(35),
    originalPrice: 35,
    isRecommended: true,
    concerns: ["Dryness", "Oiliness", "Damage"],
    ingredients: haircareIngredientMap["custom-conditioner"],
    preferences: "Fragrance free.",
    frequency: "Every 4 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "custom-scalp-mask": {
    id: "custom-scalp-mask",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Scalp Mask",
    carouselImage: CarouselCardScalpMask,
    upsellTag: "Recommended",
    routineName: "Maggie's Scalp Mask",
    routineImage: RoutineCardHaircareAssets.scalpMask,
    description:
      "A gentle, exfoliating scalp mask to soothe, rebalance, and target your specific scalp needs.",
    size: "8.5 fl oz",
    badge: "Recommended",
    price: discountedPrice(49),
    originalPrice: 49,
    isRecommended: true,
    concerns: ["Dryness", "Stressors"],
    ingredients: haircareIngredientMap["custom-scalp-mask"],
    preferences: "Fragrance free.",
    frequency: "Every 4 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "hair-oil": {
    id: "hair-oil",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Hair Oil",
    carouselImage: CarouselCardHairOil,
    upsellTag: null,
    routineName: "Maggie's Hair Oil",
    routineImage: RoutineCardHaircareAssets.hairOil,
    description:
      "A multi-tasking, personalized hair oil that can be used as a treatment, styler, or finishing oil.",
    size: "1.7 fl oz",
    badge: "",
    price: discountedPrice(49),
    originalPrice: 49,
    isRecommended: false,
    concerns: ["Damage", "Stressors", "Dryness"],
    ingredients: haircareIngredientMap["custom-hair-oil"],
    preferences: "Fragrance free.",
    frequency: "Every 12 weeks (recommended)",
    discountLabel: "60% off first order",
  },

  "scalp-serum": {
    id: "scalp-serum",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Scalp Serum",
    carouselImage: CarouselCardScalpSerum,
    routineName: "Maggie's Scalp Serum",
    routineImage: RoutineCardHaircareAssets.scalpSerum,
    description:
      "A lightweight, personalized serum for optimal scalp health and fuller, denser-looking hair.",
    size: "1.7 fl oz",
    badge: "",
    price: discountedPrice(56),
    originalPrice: 56,
    isRecommended: false,
    concerns: ["Damage", "Stressors", "Sensitivity"],
    ingredients: haircareIngredientMap["custom-scalp-serum"],
    preferences: "Fragrance free.",
    frequency: "Every 12 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "curl-cream": {
    id: "curl-cream",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Curl Cream",
    carouselImage: CarouselCardCurlCream,
    routineName: "Maggie's Curl Cream",
    routineImage: RoutineCardHaircareAssets.curlCream,
    description:
      "A nourishing curl cream, personalized to your unique curl pattern, hair texture, and porosity.",
    size: "5.1 fl oz",
    badge: "",
    price: discountedPrice(32),
    originalPrice: 32,
    isRecommended: false,
    concerns: ["Stressors", "Dryness", "Oiliness"],
    ingredients: haircareIngredientMap["custom-curl-cream"],
    preferences: "Fragrance free.",
    frequency: "Every 4 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "leave-in-conditioner": {
    id: "leave-in-conditioner",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Leave-In Conditioner",
    carouselImage: CarouselCardLeaveInConditionerSpray,
    routineName: "Maggie's Leave-In Conditioner",
    routineImage: RoutineCardHaircareAssets.leaveInConditioner,
    description:
      "A personalized leave-in conditioner that primes and protects your hair for daily styling.",
    size: "5.1 fl oz",
    badge: "",
    price: discountedPrice(32),
    originalPrice: 32,
    isRecommended: false,
    concerns: ["Dryness", "Oiliness"],
    ingredients: haircareIngredientMap["custom-leave-in-conditioner"],
    preferences: "Fragrance free.",
    frequency: "Every 8 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "dry-shampoo": {
    id: "dry-shampoo",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Dry Shampoo",
    carouselImage: CarouselCardDryShampoo,
    routineName: "Maggie's Dry Shampoo",
    routineImage: RoutineCardHaircareAssets.dryShampoo,
    description:
      "A personalized, powder dry shampoo to refresh roots, boost volume, and extend hairstyles.",
    size: "1.3 fl oz",
    badge: "",
    price: discountedPrice(32),
    originalPrice: 32,
    isRecommended: false,
    concerns: ["Damage", "Sensitivity"],
    ingredients: haircareIngredientMap["custom-dry-shampoo"],
    preferences: "Fragrance free.",
    frequency: "Every 8 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "styling-gel": {
    id: "styling-gel",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Styling Gel",
    carouselImage: CarouselCardStylingGel,
    routineName: "Maggie's Styling Gel",
    routineImage: RoutineCardHaircareAssets.styleGel,
    description:
      "A do-it-all styling gel, tailored to your unique hair type, texture, curl pattern, and more.",
    size: "8.5 fl oz",
    badge: "",
    price: discountedPrice(32),
    originalPrice: 32,
    isRecommended: false,
    concerns: ["Oiliness", "Damage"],
    ingredients: haircareIngredientMap["custom-styling-gel"],
    preferences: "Fragrance free.",
    frequency: "Every 12 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  "hair-mask": {
    id: "hair-mask",
    cardType: "full",
    category: "haircare",
    carouselName: "Maggie's Hair Mask",
    carouselImage: CarouselCardHairMask,
    upsellTag: null,
    routineName: "Maggie's Hair Mask",
    routineImage: RoutineCardHaircareAssets.hairMask,
    description:
      "A deeply hydrating, personalized hair mask that restores and strengthens hair from lengths to ends.",
    size: "8.5 fl oz",
    badge: "",
    price: discountedPrice(49),
    originalPrice: 49,
    isRecommended: false,
    concerns: ["Damage", "Dryness", "Stressors"],
    ingredients: haircareIngredientMap["custom-hair-mask"],
    preferences: "Fragrance free.",
    frequency: "Every 8 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  // ── Supplements ─────────────────────────────────────────
  "supplements": {
    id: "supplements",
    cardType: "simple",
    category: "supplements",
    carouselName: "Maggie's Root Source® Supplements",
    carouselImage: CarouselCardSupplements,
    routineName: "Maggie's Root Source® Supplements",
    routineImage: RoutineCardSupplementsAssets.supplements,
    description: [
      "Personalized supplements to promote hair growth, thickness, and density — in 2 daily capsules.",
      "Powered by 99% natural ingredients, formulated with PureCatalyst™ — our clinically tested, proprietary growth complex.",
    ],
    size: "One month supply",
    badge: "",
    price: discountedPrice(64),
    originalPrice: 64,
    isRecommended: false,
    frequency: "Every 4 weeks (recommended)",
    discountLabel: "60% off first subscription order",
  },

  // ── Brush ───────────────────────────────────────────────
  "boar-brush": {
    id: "boar-brush",
    cardType: "simple",
    category: "brush",
    carouselName: "Maggie's Boar Brush",
    carouselImage: CarouselCardBoarBrush,
    routineName: "Maggie's Boar Brush",
    routineImage: RoutineCardBrushAssets.brush,
    description: [
      "Handcrafted with 100% boar bristle. Made with only the root of the bristle for an ultra-luxurious feel.",
    ],
    size: '8.75" x 2.5" x 1.5"',
    badge: "",
    price: 72,
    originalPrice: 72,
    isRecommended: false,
  },

  // ── Accessories ─────────────────────────────────────────
  "hair-towel": {
    id: "hair-towel",
    cardType: "simple",
    category: "accessory",
    carouselName: "Maggie's Hair Towel",
    carouselImage: CarouselCardHairTowel,
    upsellTag: "Best Seller",
    routineName: "Maggie's Hair Towel",
    routineImage: RoutineCardAccessoryAssets.towel,
    description: [
      "Fast-drying hair towel for reducing unwanted frizz and preserving hair's natural texture. Made from 100% recycled microfiber derived from plastic bottles.",
      "Designed for all textures and lengths.",
    ],
    size: '23" x 37" in',
    badge: "Best Seller",
    price: 35,
    originalPrice: 35,
    isRecommended: false,
  },

  "corsica-candle": {
    id: "corsica-candle",
    cardType: "simple",
    category: "candles",
    carouselName: "Maggie's Corsica Candle",
    carouselImage: CarouselCardCandleCorsica,
    routineName: "Maggie's Corsica Candle",
    routineImage: RoutineCardAccessoryAssets.candle1,
    description: [
      "Sustainably crafted, paraffin-free candle featuring one of our fan-favorite fragrances. Includes protective dust cover.",
      "Up to 50 hours burn time.",
    ],
    size: "8.6 oz",
    badge: "",
    price: 52,
    originalPrice: 52,
    isRecommended: false,
  },

  "prelude-candle": {
    id: "prelude-candle",
    cardType: "simple",
    category: "candles",
    carouselName: "Maggie's Prelude Candle",
    carouselImage: CarouselCardCandlePrelude,
    routineName: "Maggie's Prelude Candle",
    routineImage: RoutineCardAccessoryAssets.candle2,
    description: [
      "Sustainably crafted, paraffin-free candle featuring one of our fan-favorite fragrances. Includes protective dust cover.",
      "Up to 50 hours burn time.",
    ],
    size: "8.6 oz",
    badge: "",
    price: 52,
    originalPrice: 52,
    isRecommended: false,
  },

  "arcadia-candle": {
    id: "arcadia-candle",
    cardType: "simple",
    category: "candles",
    carouselName: "Maggie's Arcadia Candle",
    carouselImage: CarouselCardCandleArcadia,
    routineName: "Maggie's Arcadia Candle",
    routineImage: RoutineCardAccessoryAssets.candle3,
    description: [
      "Sustainably crafted, paraffin-free candle featuring one of our fan-favorite fragrances. Includes protective dust cover.",
      "Up to 50 hours burn time.",
    ],
    size: "8.6 oz",
    badge: "",
    price: 52,
    originalPrice: 52,
    isRecommended: false,
  },
};

// ─── Initial State ────────────────────────────────────────

/** Products that start in the routine cart */
export const initialRoutineCartIds: string[] = [
  "custom-shampoo",
  "custom-conditioner",
  "custom-scalp-mask",
];

/** Products that start in the upsell carousel (order matters) */
export const initialUpsellIds: string[] = [
  "hair-oil",
  "scalp-serum",
  "curl-cream",
  "leave-in-conditioner",
  "dry-shampoo",
  "styling-gel",
  "hair-mask",
  "supplements",
  "boar-brush",
  "hair-towel",
  "corsica-candle",
  "prelude-candle",
  "arcadia-candle",
];