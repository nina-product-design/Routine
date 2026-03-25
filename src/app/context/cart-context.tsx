import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { initialRoutineCartIds, initialUpsellIds, productCatalog } from "../data/product-catalog";

interface CartContextType {
  routineCartIds: string[];
  upsellIds: string[];
  dismissingIds: Set<string>;
  removedFromRoutineIds: Set<string>;
  productFrequencies: Record<string, string>;
  setRoutineCartIds: (ids: string[] | ((prev: string[]) => string[])) => void;
  setUpsellIds: (ids: string[] | ((prev: string[]) => string[])) => void;
  setDismissingIds: (ids: Set<string> | ((prev: Set<string>) => Set<string>)) => void;
  handleAddToRoutine: (id: string) => void;
  handleDismissFromRoutine: (id: string) => void;
  handleFrequencyChange: (productId: string, newFrequency: string) => void;
  getCurrentPrice: (productId: string, originalPrice: number, discountedPrice: number) => number;
}

const defaultCartContext: CartContextType = {
  routineCartIds: [],
  upsellIds: [],
  dismissingIds: new Set(),
  removedFromRoutineIds: new Set(),
  productFrequencies: {},
  setRoutineCartIds: () => {},
  setUpsellIds: () => {},
  setDismissingIds: () => {},
  handleAddToRoutine: () => {},
  handleDismissFromRoutine: () => {},
  handleFrequencyChange: () => {},
  getCurrentPrice: (_productId: string, originalPrice: number) => originalPrice,
};

const CartContext = createContext<CartContextType>(defaultCartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [routineCartIds, setRoutineCartIds] = useState<string[]>([...initialRoutineCartIds]);
  const [upsellIds, setUpsellIds] = useState<string[]>([...initialUpsellIds]);
  const [dismissingIds, setDismissingIds] = useState<Set<string>>(new Set());
  const [removedFromRoutineIds, setRemovedFromRoutineIds] = useState<Set<string>>(new Set());
  const [productFrequencies, setProductFrequencies] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    initialRoutineCartIds.forEach(id => {
      initial[id] = getDefaultFrequency(id);
    });
    return initial;
  });

  const handleAddToRoutine = useCallback((id: string) => {
    setUpsellIds((prev) => prev.filter((x) => x !== id));
    setRoutineCartIds((prev) => [...prev, id]);
    setRemovedFromRoutineIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setProductFrequencies((prev) => ({
      ...prev,
      [id]: prev[id] || getDefaultFrequency(id)
    }));
  }, []);

  const handleDismissFromRoutine = useCallback((id: string) => {
    setDismissingIds((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setRoutineCartIds((prev) => prev.filter((x) => x !== id));
      setUpsellIds((prev) => [id, ...prev]);
      setRemovedFromRoutineIds((prev) => new Set(prev).add(id));
      setDismissingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 300);
  }, []);

  const handleFrequencyChange = useCallback((productId: string, newFrequency: string) => {
    setProductFrequencies(prev => ({
      ...prev,
      [productId]: newFrequency
    }));
  }, []);

  const getCurrentPrice = useCallback((productId: string, originalPrice: number, discountedPrice: number) => {
    const frequency = productFrequencies[productId];
    return frequency === "buy-once" ? originalPrice : discountedPrice;
  }, [productFrequencies]);

  return (
    <CartContext.Provider
      value={{
        routineCartIds,
        upsellIds,
        dismissingIds,
        removedFromRoutineIds,
        productFrequencies,
        setRoutineCartIds,
        setUpsellIds,
        setDismissingIds,
        handleAddToRoutine,
        handleDismissFromRoutine,
        handleFrequencyChange,
        getCurrentPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

// Helper to extract the default frequency key from the catalog's frequency string
function getDefaultFrequency(id: string): string {
  const product = productCatalog[id];
  if (!product?.frequency) return "buy-once";
  const freqStr = product.frequency;
  if (freqStr.toLowerCase().includes("one-time") || freqStr.toLowerCase().includes("buy once")) return "buy-once";
  const match = freqStr.match(/(\d+)\s*weeks?/i);
  if (match) return `${match[1]}-weeks`;
  return "4-weeks";
}