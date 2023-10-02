import { createSlice } from "@reduxjs/toolkit";
import products from "../data/catalogue.json";

const initialState = {
  data: products,
  cart: [],
  totalAmount: 0,
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.totalAmount += action.payload.price;

      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingProductItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      state.data[existingProductItemIndex].quantity -= 1;
      if (existingCartItemIndex === -1) state.cart.push(action.payload);
      else state.cart[existingCartItemIndex].quantity += 1;
    },
    removeItem: (state, action) => {
      state.totalAmount -= action.payload.price;

      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingProductItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      state.data[existingProductItemIndex].quantity += 1;

      if (state.cart[existingCartItemIndex].quantity == 1) state.cart.splice(existingCartItemIndex, 1);
      else state.cart[existingCartItemIndex].quantity -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = storeSlice.actions;

export default storeSlice.reducer;
