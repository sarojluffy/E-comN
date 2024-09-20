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
      const product = action.payload; //this is from the category file  so sabai value will be static jati function bolauda ni will be static
      const check = state.products.find((abc) => abc.id === product.id); //item iterate huncha , item vaneko whole state vo

      if (check) {
        //
        check.price += product.price; //  product will give static data only
        check.quantity += 1;
      } else {
        state.products.push({
          id: product.id,
          image: product.image,
          price: product.price,
          name: product.name,
          totalprice: product.price,
          quantity: 1,
        });
      }

      state.totalprice += product.price; //
      state.totalquantity += 1;
    },

    addcount(state, action) {
      const addrecv = action.payload; //this is called from the state , so value will be as per the state , mathi static thyo see line 15

      const checka = state.products.find((abc) => abc.id === addrecv.id);

      if (checka) {
        checka.totalprice += addrecv.price;
        console.log(checka.totalprice);
        state.totalprice += addrecv.price;
        console.log(state.totalprice);
        checka.quantity++;
      }
    },
    subcount(state, action) {
      const subrecv = action.payload;
      const checka = state.products.find((abc) => abc.id === subrecv.id);
      if (checka) {
        if (checka.quantity > 0) {
          checka.totalprice -= subrecv.price;
          console.log(checka.totalprice);
          state.totalprice -= subrecv.price;
          console.log(state.totalprice);
          checka.quantity--;
        }
      }
    },

    deletecart(state, action) {
      alert("called");
    },
  },
});
export const { addtocart, addcount, subcount, deletecart } = cartS.actions;

export default cartS.reducer;
