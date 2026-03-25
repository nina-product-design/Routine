import { Outlet, useLocation } from "react-router";
import { CartProvider } from "../context/cart-context";
import { AnimatePresence, motion } from "motion/react";

export default function RootLayout() {
  const location = useLocation();

  return (
    <CartProvider>
      <div className="relative w-full min-h-screen">
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </CartProvider>
  );
}