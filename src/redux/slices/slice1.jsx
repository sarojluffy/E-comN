import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
const displayProduct = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproducts(state, action) {
      state.products = action.payload;
    },
  },
});
export const { setproducts } = displayProduct.actions;

export default displayProduct.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [], // Correct key is 'products', not 'initial'
// };

// const displayProduct = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     setProducts(state, action) {
//       // Correct way to update state in Redux Toolkit
//       state.products = action.payload; // Update the 'products' array in the state
//     },
//   },
// });

// // Export the correct actions from displayProduct.actions
// export const { setProducts } = displayProduct.actions;

// export default displayProduct.reducer;
