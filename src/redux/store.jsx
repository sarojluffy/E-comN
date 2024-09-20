import { configureStore } from "@reduxjs/toolkit";
import displayProduct from "./slices/slice1";
import cartS from "./slices/cartslice";
const store = configureStore({
  reducer: {
    product: displayProduct,
    cart: cartS,
  },
});

export { store };
