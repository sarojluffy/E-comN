import { configureStore } from "@reduxjs/toolkit";
import displayProduct from "./slices/slice1";
const store = configureStore({
  reducer: {
    product: displayProduct,
  },
});

export { store };
