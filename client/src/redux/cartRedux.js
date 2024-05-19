import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (p) => p.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        state.products[existingProductIndex].quantity += action.payload.quantity;
      } else {
        // If the product doesn't exist in the cart, add it
        state.products.push(action.payload);
      }
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (p) => p.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex];
        if (existingProduct.quantity > 1) {
          // If the product quantity is greater than 1, decrement it
          existingProduct.quantity -= 1;
          state.quantity -= 1;
          state.total -= existingProduct.price;
        } else {
          // If the product quantity is 1, remove it from the cart
          state.products.splice(existingProductIndex, 1);
          state.quantity -= 1;
          state.total -= existingProduct.price;

          // If this was the last product, set the total to 0
          if (state.products.length === 0) {
            state.total = 0;
          }
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
