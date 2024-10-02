import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  searchitems: [],
};
const displayProduct = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproducts(state, action) {
      state.products = action.payload;
    },

    // setsearchh(state, action) {
    //   const xyz = action.payload;
    //   state.searchitems = state.products.filter((abc) =>
    //     abc.name.includes(xyz)
    //   );
    //   console.log(state.searchitems);
    // },
    setsearchh(state, action) {
      const xyz = action.payload; // Convert search term to lowercase
      state.searchitems = state.products.filter(
        (abc) => abc.name.includes(xyz) // Check if product name contains the search term
      );
      console.log(state.searchitems);
      // Log the filtered search items
    },
  },
});
export const { setproducts, setsearchh } = displayProduct.actions;

export default displayProduct.reducer;
