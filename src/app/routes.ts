import { createBrowserRouter } from "react-router";
import Results from "./pages/results";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import RootLayout from "./layouts/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Results },
      { path: "routine", Component: Home },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
    ],
  },
], {
  basename: "/Routine",
});