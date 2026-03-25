import PreferencesFragrance from "../../imports/PreferencesFragrance";
import type { CatalogProduct } from "../data/product-catalog";

interface QuickViewPreferencesProps {
  product: CatalogProduct;
}

export default function QuickViewPreferences({ product }: QuickViewPreferencesProps) {
  if (!product.preferences) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <PreferencesFragrance />
    </div>
  );
}