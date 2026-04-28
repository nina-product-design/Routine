// ─── Ingredient Image Assets ──────────────────────────────
import BambooCharcoal from "figma:asset/cc9000c0f2a0e94300f5e415c862552771eaf342.png";
import Grapefruit from "figma:asset/a044005a180c119aea6ed31fd4e24d0d5ceed41a.png";
import HyaluronicAcid from "figma:asset/b905eaf42599e5d39111874f5032eaedd5903802.png";
import JojobaBeads from "figma:asset/bca3ad5aa7a2f62625b080f7fbd9837d2658f8d5.png";
import Sandalwood from "figma:asset/6ac32400a5dfce61b9c1775858e0d709cf5a4dd2.png";
import PinkClay from "figma:asset/f04c796f56b0261b9d6053b7f380356e62c33a53.png";
import RosehipExtract from "figma:asset/8d45a73898437b5e383ecf789fc5af8a15daf0af.png";
import RedAlgae from "figma:asset/3921d518d397f4762086d21378c4fd3a9ff8cd7c.png";
import GreenTea from "figma:asset/b2af4fefac86866bda16ebdf0676ec5d4518fc12.png";
import RosehipOil from "figma:asset/484c48290d9f2b30860628f0bf367f44fcc2396a.png";
import Spirulina from "figma:asset/05e0a3ddd83aedabcc9f9f37005f9bae705d52ed.png";
import FermentedRiceWater from "figma:asset/e2fc75eabda0289ba58737891c0aa548f4bc6408.png";
import MacaRoot from "figma:asset/d5d13d8ae8cf97261502ae069be4178e20ede5fd.png";
import MacaRootPeptides from "figma:asset/f04c796f56b0261b9d6053b7f380356e62c33a53.png";
import WhiteFlowersWithLeaves from "figma:asset/a6d9d918ab8a077ca96c02f1da0ead8ed446ffe4.png";
import Glycerin from "figma:asset/27b5268221fd2968643fe30976ccd671204b1dc8.png";

import type { Ingredient } from "../components/routine-product-card";

// ─── Ingredient Definitions ───────────────────────────────

export const ingredientBambooCharcoal: Ingredient = {
  name: "Bamboo Charcoal",
  benefit: "Root Detox",
  description: "Gently cleanses and detoxifies the scalp.",
  extendedDescription: "Gently cleanses and detoxifies the scalp to help manage your {concern}.",
  image: BambooCharcoal,
};

export const ingredientHyaluronicAcid: Ingredient = {
  name: "Hyaluronic Acid",
  benefit: "Hair Hydration",
  description: "Supports damaged hair by creating a protective outer layer that hydrates hair fibers.",
  extendedDescription: "Hydrates hair fibers with a protective outer layer to help manage your {concern}.",
  image: HyaluronicAcid,
};

export const ingredientAniseMyrtle: Ingredient = {
  name: "Anise Myrtle Extract",
  benefit: "Scalp Soothing",
  description: "Calms and soothes the scalp by helping boost its natural response to environmental stressors.",
  extendedDescription: "Calms and soothes the scalp to help manage your {concern}.",
  image: WhiteFlowersWithLeaves,
};

export const ingredientGlycerin: Ingredient = {
  name: "Glycerin",
  benefit: "Moisture Boost",
  description: "Exceptionally rich in humectants, it helps draw in moisture to deeply soften strands.",
  extendedDescription: "Draws in moisture to deeply soften strands and help manage your {concern}.",
  image: Glycerin,
};

export const ingredientEucalyptusOil: Ingredient = {
  name: "Eucalyptus Oil",
  benefit: "Invigorating Scent",
  description: "A freshly scented oil that promotes scalp health and refreshes roots.",
  extendedDescription: "Promotes scalp health and refreshes roots to help manage your {concern}.",
  image: GreenTea,
};

export const ingredientFermentedRiceWater: Ingredient = {
  name: "Fermented Rice Water",
  benefit: "Tamed Frizz",
  description: "Smooths and strengthens hair to help control frizz. Rich in amino acids.",
  extendedDescription: "Smooths and strengthens hair with amino acids to help manage your {concern}.",
  image: FermentedRiceWater,
};

export const ingredientGrapefruitOil: Ingredient = {
  name: "Grapefruit Oil",
  benefit: "Vitalizing Scent",
  description: "Naturally helps soothe scalp sensitivity and itching.",
  extendedDescription: "Naturally soothes the scalp and relieves itching to help manage your {concern}.",
  image: Grapefruit,
};

export const ingredientJojobaBeads: Ingredient = {
  name: "Jojoba Beads",
  benefit: "Gentle Exfoliation",
  description: "Gently exfoliates to detoxify roots and promotes scalp health. 100% natural & biodegradable.",
  extendedDescription: "Gently exfoliates to detoxify roots and help manage your {concern}.",
  image: JojobaBeads,
};

export const ingredientJujubeBark: Ingredient = {
  name: "Jujube Bark Extract",
  benefit: "Scalp Health",
  description: "Promotes scalp health and helps control flakes with natural scalp soothing.",
  extendedDescription: "Promotes scalp health and controls flakes to help manage your {concern}.",
  image: Sandalwood,
};

export const ingredientMacaRootBiotin: Ingredient = {
  name: "Maca Root + Biotin",
  benefit: "Hair Vitality",
  description: "Promotes naturally thriving hair by boosting density & strength.",
  extendedDescription: "Boosts hair density and strength to help manage your {concern}.",
  image: MacaRoot,
};

export const ingredientPanthenol: Ingredient = {
  name: "Panthenol",
  benefit: "Scalp Comfort",
  description: "Helps rebalance the scalp for less sensitivity & more relief.",
  extendedDescription: "Rebalances the scalp for comfort, helping to manage your {concern}.",
  image: HyaluronicAcid,
};

export const ingredientPinkClay: Ingredient = {
  name: "Pink Clay",
  benefit: "Scalp Support",
  description: "Helps refresh roots to naturally promote scalp health.",
  extendedDescription: "Refreshes roots and promotes scalp health to help manage your {concern}.",
  image: PinkClay,
};

export const ingredientKombuchaTea: Ingredient = {
  name: "Kombucha Tea",
  benefit: "Microbiome Balance",
  description: "Filled with botanic antioxidants that help combat oily roots.",
  extendedDescription: "Botanic antioxidants combat oily roots to help manage your {concern}.",
  image: GreenTea,
};

export const ingredientMacaRootPeptides: Ingredient = {
  name: "Maca Root + Peptides",
  benefit: "Hair Density",
  description: "Promotes optimal hair and scalp health for hair that appears fuller, denser, and stronger.",
  extendedDescription: "Promotes fuller, denser, stronger-looking hair to help manage your {concern}.",
  image: MacaRootPeptides,
};

export const ingredientRedAlgae: Ingredient = {
  name: "Red Algae Extract",
  benefit: "Pollution Shield",
  description: "Helps fight against oxidative stress to protect hair from pollution. Carefully sourced for coral preservation.",
  extendedDescription: "Protects hair from pollution and oxidative stress to help manage your {concern}.",
  image: RedAlgae,
};

export const ingredientRosehipExtract: Ingredient = {
  name: "Rosehip Extract",
  benefit: "Oil Control",
  description: "Helps regulate scalp sebum levels to control excess oiliness and promote a balanced, healthy scalp.",
  extendedDescription: "Regulates scalp sebum to promote balance and help manage your {concern}.",
  image: RosehipExtract,
};

export const ingredientRosemaryExtract: Ingredient = {
  name: "Rosemary Extract",
  benefit: "Root Revival",
  description: "With its characteristic herbal scent, this blend is boosted by potent botanic antioxidants known to promote scalp health.",
  extendedDescription: "Potent antioxidants promote scalp health to help manage your {concern}.",
  image: GreenTea,
};

export const ingredientSpirulina: Ingredient = {
  name: "Spirulina + Vitamin B6",
  benefit: "Root Refresh",
  description: "Balances and refreshes oily roots with a blend of botanical extracts.",
  extendedDescription: "Balances and refreshes roots with botanical extracts to help manage your {concern}.",
  image: Spirulina,
};

// ─── All Ingredients ──────────────────────────────────────
export const allIngredients: Ingredient[] = [
  ingredientBambooCharcoal,
  ingredientHyaluronicAcid,
  ingredientAniseMyrtle,
  ingredientGlycerin,
  ingredientEucalyptusOil,
  ingredientFermentedRiceWater,
  ingredientGrapefruitOil,
  ingredientJojobaBeads,
  ingredientJujubeBark,
  ingredientMacaRootBiotin,
  ingredientPanthenol,
  ingredientPinkClay,
  ingredientKombuchaTea,
  ingredientMacaRootPeptides,
  ingredientRedAlgae,
  ingredientRosehipExtract,
  ingredientRosemaryExtract,
  ingredientSpirulina,
];

// ─── Randomized Ingredient Assignments per Haircare Product ─
// Each haircare product gets 3 unique ingredients, distributed
// based on product type and Maggie's curly hair profile (damage, 
// hydration, scalp sensitivity).

export const haircareIngredientMap: Record<string, Ingredient[]> = {
  // Shampoo: cleansing, root health, scalp soothing
  "custom-shampoo": [
    ingredientBambooCharcoal,
    ingredientPinkClay,
    ingredientAniseMyrtle,
  ],
  // Conditioner: hydration, frizz control, moisture
  "custom-conditioner": [
    ingredientHyaluronicAcid,
    ingredientFermentedRiceWater,
    ingredientGlycerin,
  ],
  // Scalp Mask: scalp health, exfoliation, soothing
  "custom-scalp-mask": [
    ingredientJojobaBeads,
    ingredientJujubeBark,
    ingredientPanthenol,
  ],
  // Leave-in Conditioner: hydration, protection, frizz
  "custom-leave-in-conditioner": [
    ingredientRedAlgae,
    ingredientHyaluronicAcid,
    ingredientGlycerin,
  ],
  // Dry Shampoo: oil control, root refresh, scalp balance
  "custom-dry-shampoo": [
    ingredientRosehipExtract,
    ingredientBambooCharcoal,
    ingredientSpirulina,
  ],
  // Hair Oil: vitality, density, strengthening
  "custom-hair-oil": [
    ingredientMacaRootBiotin,
    ingredientMacaRootPeptides,
    ingredientRosemaryExtract,
  ],
  // Scalp Serum: scalp health, microbiome, comfort
  "custom-scalp-serum": [
    ingredientKombuchaTea,
    ingredientPanthenol,
    ingredientJujubeBark,
  ],
  // Curl Cream: frizz control, moisture, definition
  "custom-curl-cream": [
    ingredientFermentedRiceWater,
    ingredientGlycerin,
    ingredientHyaluronicAcid,
  ],
  // Styling Gel: hold, frizz control, pollution protection
  "custom-styling-gel": [
    ingredientRedAlgae,
    ingredientFermentedRiceWater,
    ingredientPanthenol,
  ],
  // Hair Mask: deep hydration, vitality, intensive treatment
  "custom-hair-mask": [
    ingredientMacaRootPeptides,
    ingredientGlycerin,
    ingredientKombuchaTea,
  ],
};