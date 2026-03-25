import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown } from "lucide-react";
import type { CatalogProduct } from "../data/product-catalog";
import type { Ingredient } from "./routine-product-card";
import { products } from "../data/products";

// Import Shampoo images (kept for shampoo-specific use)
import imgImageProseCustomShampooBottle from "figma:asset/a06595e028cff15a1e5b4ea40ed381ee3209aad7.png";
import imgImageProseCustomShampooWithBubbles from "figma:asset/8d72585e1723fae84bef6f3be35dd544e8f1ac77.png";
import imgImageShampooPouringFromBottle from "figma:asset/7bdf181b500b5d25f75bce0412317a767b09f343.png";
import imgImageWomanWashingHairWithShampoo from "figma:asset/e1e4b6e0319b64fd18e64f089041fbd4466397cb.png";
import imgImageProseCustomersWithTheirCustomShampoo from "figma:asset/52fd239fd0d052c4a2b6ef88eee1fdbb172e8c50.png";
import imgVideo from "figma:asset/bb5348105ebfe8549a88c11e96efcfe693214b03.png";
import QuickViewPreferences from "./quick-view-preferences";
import ReviewCard from "./review-card";
import type { ReviewData } from "./review-card";
import fragranceSvgPaths from "../../imports/svg-krbo4a6j75";
import { imgVector } from "../../imports/svg-vq7mo";

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: CatalogProduct | null;
}

// ─── How to Use Data ────────────────────────────────────────
interface HowToUseData {
  headline: string;
  intro: string;
  amount: string;
  steps: string[];
}

const howToUseMap: Record<string, HowToUseData> = {
  "custom-shampoo": {
    headline: "A shampoo as unique as you are",
    intro: "Each Custom Shampoo includes directions tailored to your specific hair, goals, and concerns — from oily roots to dry ends. Below is just a guide.",
    amount: "As needed, based on hair length, texture, and density.",
    steps: [
      "Begin with damp hair and dispense desired amount of shampoo onto fingertips.",
      "Rub together, adding small amounts of water and gently massage into the hair and scalp.",
      "Focus on the roots to create a rich lather.",
      "Rinse thoroughly and follow with your custom conditioner.",
    ],
  },
  "custom-conditioner": {
    headline: "A conditioner as unique as you are",
    intro: "Each Custom Conditioner includes directions tailored to your specific hair type and texture. Below is just a guide.",
    amount: "As needed, focusing on mid-lengths to ends.",
    steps: [
      "After shampooing, gently squeeze excess water from hair.",
      "Apply conditioner from mid-lengths to ends, avoiding the roots.",
      "Leave on for 1–3 minutes to allow ingredients to absorb.",
      "Rinse thoroughly with cool water to seal in moisture.",
    ],
  },
  "custom-scalp-mask": {
    headline: "A scalp mask as unique as you are",
    intro: "Each Custom Scalp Mask includes directions tailored to your specific scalp needs. Below is just a guide.",
    amount: "A generous amount, enough to cover the entire scalp.",
    steps: [
      "Apply to damp or dry hair, focusing on the scalp and roots.",
      "Gently massage in circular motions to exfoliate and distribute evenly.",
      "Leave on for 5–10 minutes to allow active ingredients to work.",
      "Rinse thoroughly and follow with your custom shampoo and conditioner.",
    ],
  },
  "hair-oil": {
    headline: "A hair oil as unique as you are",
    intro: "Each Custom Hair Oil can be used as a treatment, styler, or finishing oil. Below is just a guide.",
    amount: "1–3 drops depending on hair length and thickness.",
    steps: [
      "Warm a few drops between your palms.",
      "Apply to damp or dry hair, focusing on mid-lengths to ends.",
      "Use as a pre-wash treatment by applying generously and leaving on for 20+ minutes.",
      "Style as desired — can also be used as a finishing touch to tame flyaways.",
    ],
  },
  "scalp-serum": {
    headline: "A scalp serum as unique as you are",
    intro: "Each Custom Scalp Serum is designed for daily use to promote optimal scalp health. Below is just a guide.",
    amount: "A few drops applied directly to the scalp.",
    steps: [
      "Part hair into sections to expose the scalp.",
      "Apply serum directly to the scalp using the dropper.",
      "Gently massage into the scalp with fingertips using circular motions.",
      "Leave in — do not rinse. Style as usual.",
    ],
  },
  "curl-cream": {
    headline: "A curl cream as unique as you are",
    intro: "Each Custom Curl Cream is designed to define and hydrate your natural texture. Below is just a guide.",
    amount: "A dime to quarter-sized amount, depending on hair length and density.",
    steps: [
      "Apply to freshly washed, damp hair.",
      "Distribute evenly through mid-lengths and ends using praying hands or scrunching.",
      "Define curls by twisting or finger-coiling individual sections as desired.",
      "Air dry or diffuse on low heat for best results.",
    ],
  },
  "leave-in-conditioner": {
    headline: "A leave-in conditioner as unique as you are",
    intro: "Each Custom Leave-In Conditioner primes and protects your hair for daily styling. Below is just a guide.",
    amount: "3–5 sprays depending on hair length and thickness.",
    steps: [
      "Spray onto freshly washed, towel-dried hair.",
      "Focus on mid-lengths and ends where hair needs the most hydration.",
      "Comb through gently with fingers or a wide-tooth comb to distribute evenly.",
      "Style as desired — also works as a heat protectant up to 450°F.",
    ],
  },
  "dry-shampoo": {
    headline: "A dry shampoo as unique as you are",
    intro: "Each Custom Dry Shampoo is designed to refresh roots and extend hairstyles. Below is just a guide.",
    amount: "A light dusting at the roots.",
    steps: [
      "Hold bottle 6–8 inches from the scalp and apply powder to roots.",
      "Focus on oiliest areas — typically the crown and hairline.",
      "Massage into the scalp with fingertips to blend and absorb excess oil.",
      "Brush or shake out any excess for a refreshed, voluminous look.",
    ],
  },
  "styling-gel": {
    headline: "A styling gel as unique as you are",
    intro: "Each Custom Styling Gel is tailored to your unique hair type and styling preferences. Below is just a guide.",
    amount: "A quarter-sized amount, adjusting based on desired hold.",
    steps: [
      "Apply to damp or wet hair for best results.",
      "Distribute evenly through hair using fingers, a brush, or a wide-tooth comb.",
      "Scrunch, twist, or smooth hair into your desired style.",
      "Air dry or diffuse — scrunch out the crunch once fully dry for a softer hold.",
    ],
  },
  "hair-mask": {
    headline: "A hair mask as unique as you are",
    intro: "Each Custom Hair Mask is an intensive treatment to restore and strengthen hair. Below is just a guide.",
    amount: "A generous amount from mid-lengths to ends.",
    steps: [
      "Apply to clean, damp hair before shampooing or as a standalone treatment.",
      "Distribute from mid-lengths to ends, avoiding the roots.",
      "Leave on for 5–15 minutes for a deep conditioning treatment.",
      "Rinse thoroughly with lukewarm water and style as desired.",
    ],
  },
};

function HowToUseSection({ productTypeLabel, productId }: { productTypeLabel: string; productId: string }) {
  const data = howToUseMap[productId] || {
    headline: `A ${productTypeLabel.toLowerCase()} as unique as you are`,
    intro: `Each Custom ${productTypeLabel} includes directions tailored to your specific hair, goals, and concerns. Below is just a guide.`,
    amount: "As needed, based on hair length, texture, and density.",
    steps: ["Apply to hair as directed.", "Style as desired."],
  };

  return (
    <div className="bg-[#4d523c] py-[64px] px-[24px] flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[12px]">
        <p className="font-['Simplon_Mono',monospace] text-[12px] leading-[14.4px] tracking-[0.96px] uppercase text-white">
          How to use
        </p>
        <h2 className="font-['Saol_Text',serif] font-light text-[32px] leading-[35.2px] tracking-[-0.96px] text-white">
          {data.headline}
        </h2>
        <p className="font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-white">
          {data.intro}
        </p>
      </div>

      <div className="bg-[rgba(226,217,194,0.3)] h-[0.5px] w-full" />

      <div className="flex flex-col gap-[12px]">
        <p className="font-['Simplon_Mono',monospace] text-[12px] leading-[14.4px] tracking-[0.96px] uppercase text-white">
          Amount
        </p>
        <p className="font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-white">
          {data.amount}
        </p>
      </div>

      <div className="bg-[rgba(226,217,194,0.3)] h-[0.5px] w-full" />

      <div className="flex flex-col gap-[24px]">
        <p className="font-['Simplon_Mono',monospace] text-[12px] leading-[14.4px] tracking-[0.96px] uppercase text-white">
          Directions
        </p>

        <div className="flex flex-col gap-[24px]">
          {data.steps.map((step, idx) => (
            <div key={idx} className="flex gap-[16px]">
              <div className="border border-[#b9c2a6] rounded-[10.5px] size-[21px] shrink-0 flex items-center justify-center">
                <p className="font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-white">
                  {idx + 1}
                </p>
              </div>
              <p className="font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-white">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [allIngredientsOpen, setAllIngredientsOpen] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  const scrollToReviews = () => {
    if (reviewsRef.current && modalScrollRef.current) {
      const container = modalScrollRef.current;
      const target = reviewsRef.current;
      const targetTop = target.offsetTop - container.offsetTop;
      container.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

  // Reset to first slide when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
      setAllIngredientsOpen(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!product) return null;

  // Full INCI-style ingredient lists per product type
  const allIngredientsMap: Record<string, string> = {
    "custom-shampoo": "Water, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Decyl-Glucoside, Sodium Lauroyl Sarcosinate, Sodium Methyl Oleoyl Taurate, Glycerin, Caprylyl/Capryl Glucoside, Sodium Cocoyl Isethionate, Acrylates/Beheneth-25 Methacrylate Copolymer, Propanediol Dicaprylate, Sodium Benzoate, Caprylyl Glycol, 1,2-Hexanediol, Potassium Sorbate, Propanediol, Lactobacillus/Rice Ferment Filtrate, Guar Hydroxypropyltrimonium Chloride, Citric Acid, Trisodium Ethylenediamine Disuccinate, Sodium Laurate, Sodium Chloride, Shikakai Fruit Extract, Green Tea Leaf Water, Pyridoxine, Jujube Bark Extract, Pentylene Glycol, Dipropylene Glycol, Spirulina Extract",
    "custom-conditioner": "Water, Cetearyl Alcohol, Behentrimonium Chloride, Glycerin, Caprylic/Capric Triglyceride, Isopropyl Myristate, Propanediol, Hydrogenated Ethylhexyl Olivate, Hydrogenated Olive Oil Unsaponifiables, Panthenol, Tocopheryl Acetate, Hydrolyzed Rice Protein, Hyaluronic Acid, Fermented Rice Water, Citric Acid, Sodium Benzoate, Potassium Sorbate, Phenoxyethanol",
    "custom-scalp-mask": "Water, Kaolin, Glycerin, Cetearyl Alcohol, Jojoba Esters, Caprylic/Capric Triglyceride, Propanediol, Panthenol, Niacinamide, Jujube Bark Extract, Salicylic Acid, Zinc PCA, Tea Tree Leaf Oil, Menthol, Sodium Benzoate, Potassium Sorbate, Citric Acid",
    "leave-in-conditioner": "Water, Cetearyl Alcohol, Glycerin, Behentrimonium Chloride, Caprylic/Capric Triglyceride, Propanediol, Hyaluronic Acid, Red Algae Extract, Hydrolyzed Quinoa, Panthenol, Tocopheryl Acetate, Citric Acid, Sodium Benzoate, Potassium Sorbate",
    "dry-shampoo": "Oryza Sativa (Rice) Starch, Aluminum Starch Octenylsuccinate, Silica, Kaolin, Rosehip Seed Extract, Bamboo Charcoal Powder, Spirulina Platensis Extract, Vitamin B6, Fragrance",
    "hair-oil": "Camellia Oleifera Seed Oil, Squalane, Argania Spinosa Kernel Oil, Caprylic/Capric Triglyceride, Maca Root Extract, Biotin, Peptide Complex, Rosemary Leaf Extract, Tocopherol, Fragrance",
    "scalp-serum": "Water, Propanediol, Niacinamide, Panthenol, Kombucha Extract, Jujube Bark Extract, Zinc PCA, Salicylic Acid, Glycerin, Hyaluronic Acid, Citric Acid, Sodium Benzoate, Potassium Sorbate",
    "curl-cream": "Water, Cetearyl Alcohol, Glycerin, Behentrimonium Chloride, Caprylic/Capric Triglyceride, Fermented Rice Water, Hyaluronic Acid, Flaxseed Extract, Shea Butter, Panthenol, Citric Acid, Sodium Benzoate, Potassium Sorbate",
    "styling-gel": "Water, VP/VA Copolymer, Glycerin, Propanediol, PVP, Red Algae Extract, Fermented Rice Water, Panthenol, Carbomer, Aminomethyl Propanol, Sodium Benzoate, Potassium Sorbate, Citric Acid",
    "hair-mask": "Water, Cetearyl Alcohol, Behentrimonium Chloride, Glycerin, Caprylic/Capric Triglyceride, Maca Root Extract, Peptide Complex, Kombucha Extract, Hydrolyzed Keratin, Panthenol, Tocopheryl Acetate, Citric Acid, Sodium Benzoate, Potassium Sorbate",
  };

  const allIngredientsText = allIngredientsMap[product.id] || "";

  // Look up the full product data from products.ts (handle catalog→products ID mapping)
  const catalogToProductId: Record<string, string> = {
    "hair-oil": "custom-hair-oil",
    "scalp-serum": "custom-scalp-serum",
    "curl-cream": "custom-curl-cream",
    "leave-in-conditioner": "custom-leave-in-conditioner",
    "dry-shampoo": "custom-dry-shampoo",
    "styling-gel": "custom-styling-gel",
    "hair-mask": "custom-hair-mask",
  };
  const productLookupId = catalogToProductId[product.id] || product.id;
  const productData = products.find((p) => p.id === productLookupId);
  
  // Parse fullDescription into body paragraphs and footnote
  const fullDescParts = (productData?.fullDescription || "").split(/\n\n\*/);
  const fullDescBody = fullDescParts[0] || "";
  const fullDescFootnote = fullDescParts[1] ? `*${fullDescParts[1]}` : "";

  // Derive a generic product type label (e.g., "Shampoo", "Conditioner")
  const productTypeLabel = product.routineName.replace("Maggie's ", "");

  // Goal-based reviews mapped to product concerns
  const goalReviews: Record<string, ReviewData[]> = {
    "Improved Hydration": [
      {
        name: "Kathy S.",
        location: "New York, NY",
        date: "03/02/26",
        rating: 5,
        body: "This is amazing. I really tried everything else, every professional brand, and spent $100's per bottle, but Prose is REAL ingredients and absolutely no damage. My hair is smooth, with no frizz, and it's way beyond any hydration I've ever gotten from any other shampoo. I'm speechless right now. Prose, you saved my hair, my confidence has been through the roof!",
      },
      {
        name: "Diana L.",
        location: "Austin, TX",
        date: "02/18/26",
        rating: 5,
        body: "After years of dealing with dry, straw-like ends, I finally found something that actually hydrates without weighing my hair down. Within the first week I noticed my hair felt softer and more moisturized than it ever has. I can actually run my fingers through it now without it feeling like sandpaper. The hydration lasts between washes too — game changer.",
      },
      {
        name: "Megan K.",
        location: "Denver, CO",
        date: "01/30/26",
        rating: 5,
        body: "My hair has never retained moisture like this before. I live in a really dry climate and my hair always felt like it was begging for water no matter what I did. After two weeks with Prose, my curls are bouncy, hydrated, and I don't have to reapply product mid-day anymore. My wash-and-go lasts three full days now.",
      },
    ],
    "Reduced Damage": [
      {
        name: "Priya M.",
        location: "San Francisco, CA",
        date: "01/25/26",
        rating: 5,
        body: "I color my hair every 6 weeks and the damage was getting out of control — breakage, split ends, the works. Since switching to Prose my stylist actually commented on how much healthier my hair looks. I'm seeing way less hair in the shower drain and my ends don't feel fried anymore. Worth every single penny for the repair alone.",
      },
      {
        name: "Taylor N.",
        location: "Nashville, TN",
        date: "02/12/26",
        rating: 5,
        body: "I heat style almost every day and my hair was starting to feel like straw. I've been using Prose for 6 weeks now and the difference in texture is unreal — my ends aren't splitting like they used to and my hair actually has a healthy shine again. My hairdresser said I could go longer between trims for the first time ever.",
      },
      {
        name: "Rachel F.",
        location: "Chicago, IL",
        date: "03/05/26",
        rating: 4,
        body: "I was really skeptical because I've tried so many 'repair' products that did nothing. But after a month with Prose my hair genuinely feels stronger. I used to lose clumps in the shower and now it's barely anything. The breakage around my hairline has improved so much that I'm actually wearing my hair up again without worrying.",
      },
    ],
    "Silky Softness": [
      {
        name: "Jasmine T.",
        location: "Miami, FL",
        date: "02/08/26",
        rating: 5,
        body: "I have thick, coarse hair that never felt soft no matter what I used. Prose completely changed that. After my first wash my hair felt like silk — my boyfriend even noticed and asked what I did differently. It's not just soft on wash day either, the smoothness carries through the whole week. I literally cannot stop touching my hair now.",
      },
      {
        name: "Lena C.",
        location: "Seattle, WA",
        date: "01/20/26",
        rating: 5,
        body: "I've always had rough, wiry hair that felt coarse to the touch. Nothing ever made it feel genuinely soft until Prose. Now my hair glides through my fingers, it doesn't snag on combs, and even my kids comment on how silky it feels. The transformation happened within the first two washes. I'm never going back.",
      },
      {
        name: "Michelle B.",
        location: "Portland, OR",
        date: "02/22/26",
        rating: 4,
        body: "The softness is real. I used to rely on heavy serums and oils to get any kind of smoothness but now my hair feels naturally soft right out of the shower. It drapes so nicely and has this healthy, touchable quality I've never achieved before. Friends keep asking me what salon treatment I got — nope, just Prose!",
      },
    ],
    "Stronger Growth": [
      {
        name: "Amara W.",
        location: "Atlanta, GA",
        date: "02/28/26",
        rating: 5,
        body: "I've been using Prose for about 3 months now and the baby hairs around my hairline are THRIVING. I was so skeptical that any product could actually help with growth but I'm seeing real results. My ponytail feels thicker and my part looks less wide. My only regret is not trying this sooner.",
      },
      {
        name: "Nicole D.",
        location: "Boston, MA",
        date: "01/08/26",
        rating: 5,
        body: "After postpartum hair loss I was desperate. My dermatologist suggested trying Prose along with supplements and honestly the regrowth has been incredible. I have little sprouts all along my hairline and temples where I had lost the most. It's only been 10 weeks but I can already see a visible difference in density.",
      },
      {
        name: "Grace P.",
        location: "Minneapolis, MN",
        date: "03/01/26",
        rating: 4,
        body: "I've struggled with thin, fine hair my whole life and always wanted it to look fuller. After using Prose consistently for 2 months I'm seeing new growth that I haven't seen in years. My braid is noticeably thicker and my hairstylist confirmed she can feel more density. It takes patience but the results speak for themselves.",
      },
    ],
    "Less Irritation": [
      {
        name: "Sophie R.",
        location: "Philadelphia, PA",
        date: "01/15/26",
        rating: 5,
        body: "I have the most sensitive scalp — literally everything makes it itch and flake. Prose is the first thing that doesn't irritate me at all. Zero itching, zero redness. My scalp actually feels calm and balanced for the first time in years. The fact that it's fragrance-free for my formula is such a thoughtful touch.",
      },
      {
        name: "Elena V.",
        location: "San Diego, CA",
        date: "02/05/26",
        rating: 5,
        body: "I have eczema on my scalp and I've spent years cycling through medicated shampoos that left my hair feeling terrible. Prose is gentle enough that my scalp doesn't react, but effective enough that my flaking has reduced dramatically. I can actually wear dark clothes again without worrying about flakes on my shoulders.",
      },
      {
        name: "Hannah J.",
        location: "Raleigh, NC",
        date: "03/08/26",
        rating: 4,
        body: "My scalp used to get so irritated from regular shampoos that I'd scratch until it was raw. With Prose I noticed the itching stopped within the first few days. No burning, no tightness, just clean and comfortable. It's honestly such a relief to wash my hair without dreading the aftermath. I wish I'd found this years ago.",
      },
    ],
  };

  // Build reviews from product concerns (max 4)
  // Use round-robin across concerns with a product-based offset
  // so products sharing concerns show reviews in different orders
  const productReviews: ReviewData[] = [];
  if (product.concerns && product.concerns.length > 0) {
    // Simple hash from product ID for deterministic rotation
    const hash = product.id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const concerns = product.concerns;
    let pass = 0;
    while (productReviews.length < 4) {
      let added = false;
      for (let ci = 0; ci < concerns.length; ci++) {
        if (productReviews.length >= 4) break;
        const matched = goalReviews[concerns[ci]];
        if (!matched) continue;
        // Offset into this concern's array based on hash + concern index
        const idx = (hash + ci + pass) % matched.length;
        const review = matched[idx];
        if (!productReviews.find((r) => r.name === review.name)) {
          productReviews.push(review);
          added = true;
        }
      }
      pass++;
      // Safety: stop if we couldn't add anything this pass (all reviews exhausted)
      if (!added) break;
    }
  }

  // Per-product overrides: pin specific reviewers to the front
  const reviewLeadOverrides: Record<string, string[]> = {
    "custom-scalp-mask": ["Nicole D.", "Grace P."],
  };
  const leadNames = reviewLeadOverrides[product.id];
  if (leadNames) {
    // Stable sort: pinned names first (in override order), rest keep their order
    productReviews.sort((a, b) => {
      const aIdx = leadNames.indexOf(a.name);
      const bIdx = leadNames.indexOf(b.name);
      if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
      if (aIdx !== -1) return -1;
      if (bIdx !== -1) return 1;
      return 0;
    });
  }
  
  // Use shampoo's full carousel for shampoo, otherwise just the product's carousel image
  const carouselImages = product.id === "custom-shampoo"
    ? [
        imgImageProseCustomShampooBottle,
        imgImageProseCustomShampooWithBubbles,
        imgImageShampooPouringFromBottle,
        imgImageWomanWashingHairWithShampoo,
        imgImageProseCustomersWithTheirCustomShampoo,
      ]
    : [product.carouselImage];

  const totalSlides = carouselImages.length;

  const handleDragEnd = (_event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    // Determine if swipe was significant enough
    if (Math.abs(velocity) > 500 || Math.abs(offset) > 50) {
      if (offset > 0 && currentSlide > 0) {
        // Swiped right, go to previous slide
        setCurrentSlide(currentSlide - 1);
      } else if (offset < 0 && currentSlide < totalSlides - 1) {
        // Swiped left, go to next slide
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  // Handle trackpad/wheel swipes
  const handleWheel = (e: React.WheelEvent) => {
    // Only handle horizontal swipes (trackpad gestures)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 300);

      if (e.deltaX > 0 && currentSlide < totalSlides - 1) {
        // Swiped left (next slide)
        setCurrentSlide(currentSlide + 1);
      } else if (e.deltaX < 0 && currentSlide > 0) {
        // Swiped right (previous slide)
        setCurrentSlide(currentSlide - 1);
      }
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center py-[24px] px-[8px] pointer-events-none"
          >
            <div
              className="bg-white w-[375px] max-h-full overflow-y-auto rounded-[20px] pointer-events-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
              ref={modalScrollRef}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="sticky top-[32px] float-right mr-[24px] z-10 bg-white/80 backdrop-blur-sm rounded-full p-[8px] hover:bg-white transition-colors"
                aria-label="Close"
              >
                <X className="size-[20px] text-[#323429]" />
              </button>

              {/* Carousel */}
              <div className="relative w-full pt-[24px] pb-[12px]">
                <div className="relative w-full h-[381px] overflow-hidden touch-pan-y">
                  <motion.div
                    className="flex h-full cursor-grab active:cursor-grabbing touch-none"
                    animate={{ x: totalSlides > 1 ? `${24 - currentSlide * 317}px` : `${-currentSlide * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag="x"
                    dragElastic={0.2}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    onWheel={handleWheel}
                  >
                    {carouselImages.map((img, idx) => (
                      <div key={idx} className={totalSlides > 1 ? "shrink-0 h-full" : "min-w-full h-full flex items-center justify-center px-[27.5px]"} style={totalSlides > 1 ? { width: 305, marginRight: 12 } : undefined}>
                        <div className="w-[305px] h-[381px] rounded-[10px] overflow-hidden pointer-events-none">
                          <img src={img} alt={`${product.routineName} ${idx + 1}`} className="size-full object-cover" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Dot Indicators */}
                <div className="flex gap-[8px] items-center justify-center mt-[12px]">
                  {totalSlides > 1 && Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className="size-[6px] rounded-full transition-colors"
                      style={{ backgroundColor: idx === currentSlide ? "#323429" : "#A6A6A6" }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="px-[24px] flex flex-col gap-[48px]">
                {/* Header Section */}
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[8px]">
                      <h1 className="font-['Saol_Text',serif] font-light text-[32px] leading-[35.2px] tracking-[-0.96px] text-[#4d523c]">
                        {product.routineName}
                      </h1>
                      <div className="flex gap-[8px] items-center font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-[#4d523c] whitespace-nowrap">
                        <p>{product.size}</p>
                        {productReviews.length > 0 && (
                          <button
                            onClick={scrollToReviews}
                            className="underline cursor-pointer hover:opacity-70 transition-opacity font-['Simplon_Norm',sans-serif] font-normal text-[14px] leading-[21px] tracking-[0.28px] text-[#4d523c]"
                          >
                            Read Reviews
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-[#4d523c]">
                      {typeof product.description === "string" ? product.description : product.description[0]}
                    </p>
                  </div>

                  {fullDescBody && (
                    <div className="flex flex-col gap-[16px]">
                      <p className="font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-[#4d523c]">
                        {fullDescBody}
                      </p>
                      {fullDescFootnote && (
                        <p className="font-['Simplon_Norm',sans-serif] text-[12px] leading-[18px] tracking-[0.24px] text-[#6c6c6c]">
                          {fullDescFootnote}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Ingredients Section */}
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[12px]">
                    <p className="font-['Simplon_Mono',monospace] text-[14px] leading-[16.8px] tracking-[1.12px] uppercase text-[#323429]">
                      Naturally powerful ingredients, picked just for you
                    </p>
                    <p className="font-['Simplon_Norm',sans-serif] text-[14px] leading-[21px] tracking-[0.28px] text-[#4d523c]">
                      Your Custom {productTypeLabel} is made to order using a unique blend of only the clean, proven-effective
                      ingredients your hair needs.
                    </p>
                  </div>

                  {/* Targeted Concerns */}
                  {product.concerns && product.concerns.length > 0 && (
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-['Simplon_Mono',monospace] text-[12px] leading-[14.4px] tracking-[0.96px] uppercase text-[#4d523c]">
                        YOUR TARGETED CONCERNS
                      </p>
                      <div className="flex gap-[8px] flex-wrap">
                        {product.concerns.map((concern, idx) => (
                          <div
                            key={idx}
                            className="border border-[#e2d9c2] rounded-[20px] px-[12px] py-[4px]"
                          >
                            <p className="font-['Simplon_Norm',sans-serif] text-[12px] leading-[18px] tracking-[0.24px] text-[#323429]">
                              {concern}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Ingredients */}
                  {product.ingredients && product.ingredients.length > 0 && (
                    <div className="flex flex-col gap-[16px]">
                      <p className="font-['Simplon_Mono',monospace] text-[12px] leading-[14.4px] tracking-[0.96px] uppercase text-[#323429]">
                        YOUR KEY INGREDIENTS
                      </p>
                      <div className="flex flex-col">
                        {product.ingredients.map((ingredient, idx) => (
                          <div key={idx}>
                            <div className="bg-[#e2d9c2] h-[0.5px] w-full" />
                            <div className="flex gap-[8px] items-center py-[16px]">
                              <div className="size-[64px] shrink-0">
                                <img
                                  src={ingredient.image}
                                  alt={ingredient.name}
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="flex-1 flex flex-col">
                                <p className="font-['Simplon_Norm',sans-serif] font-medium text-[12px] leading-[18px] text-[#323429]">
                                  {ingredient.name}
                                </p>
                                <p className="font-['Simplon_Norm',sans-serif] text-[12px] leading-[18px] tracking-[0.24px] text-[#4d523c]">
                                  {ingredient.description || ingredient.benefit}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="bg-[#e2d9c2] h-[0.5px] w-full" />
                      </div>
                    </div>
                  )}

                  {/* All Ingredients Accordion */}
                  {allIngredientsText && (
                    <div className="flex flex-col gap-[15px]">
                      <button
                        onClick={() => setAllIngredientsOpen(!allIngredientsOpen)}
                        className="flex items-center justify-between w-full"
                      >
                        <p className="font-['Simplon_Mono',monospace] font-normal text-[12px] leading-[14.4px] tracking-[0.96px] uppercase text-[#323429]">
                          All ingredients
                        </p>
                        <ChevronDown
                          className="size-[12px] text-[#323429] transition-transform duration-200"
                          style={{ transform: allIngredientsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>
                      <div className="bg-[#e2d9c2] h-[0.5px] w-full" />
                      <AnimatePresence initial={false}>
                        {allIngredientsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-[16px]">
                              <p className="font-['Simplon_Norm',sans-serif] text-[12px] leading-[18px] tracking-[0.24px] text-[#323429]">
                                {allIngredientsText}
                              </p>
                              <p className="font-['Simplon_Norm',sans-serif] text-[12px] leading-[18px] tracking-[0.24px] text-[#6c6c6c]">
                                *This is a close approximation of the ingredients in your custom formula. Because our products are made to order according to your needs and environment, your custom ingredients may vary slightly from what's shown here. A finalized list of your product's ingredients will be included in the leaflet that ships with your order.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Fragrance Preference */}
                  <QuickViewPreferences product={product} />
                </div>

                {/* Reviews Carousel */}
                {productReviews.length > 0 && (
                  <div ref={reviewsRef} className="flex flex-col gap-[16px] -mx-[24px]">
                    <p className="font-['Simplon_Mono',monospace] text-[12px] leading-[14.4px] tracking-[0.96px] uppercase text-[#323429] px-[24px]">
                      WHAT PEOPLE ARE SAYING
                    </p>
                    <div className="flex gap-[12px] overflow-x-auto px-[24px] pb-[4px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      {productReviews.map((review, idx) => (
                        <ReviewCard key={idx} review={review} />
                      ))}
                    </div>
                  </div>
                )}

                {/* How to Use Section */}
                <div className="flex flex-col -mx-[24px]">
                  {/* Video/Image */}
                  <div className="w-full aspect-[974/946]">
                    <img src={product.id === "custom-shampoo" ? imgVideo : product.carouselImage} alt="How to use" className="size-full object-cover" />
                  </div>

                  {/* Dark Section */}
                  <HowToUseSection productTypeLabel={productTypeLabel} productId={product.id} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}