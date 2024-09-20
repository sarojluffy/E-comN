import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalquantity: 0,
  totalprice: 0,
};
const cartS = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {
      const product = action.payload;
      const check = state.products.find((abc) => abc.id === product.id); //item iterate huncha , item vaneko whole state vo

      if (check) {
        //
        check.price += check.price;
        check.quantity += 1;
      } else {
        state.products.push({
          id: product.id,
          image: product.image,
          price: product.price,
          name: product.name,
          quantity: 1,
        });
      }

      state.totalprice += product.price; //
      state.totalquantity += 1;
    },
  },
});
export const { addtocart } = cartS.actions;

export default cartS.reducer;
