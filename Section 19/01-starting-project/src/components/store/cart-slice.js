import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalCartPrice: 0,
  totalQuantity: 0,
};

const cart = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const currentProduct = state.items.find(item => item.id === product.id);
      state.totalQuantity++;

      if (!currentProduct) {
        state.items.push({
          product: product.title,
          price: product.price,
          description: product.description,
          totalPrice: product.price,
          quantity: 1,
          id: product.id,
        });
      }

      if (currentProduct) {
        currentProduct.quantity++;
        currentProduct.totalPrice = currentProduct.totalPrice + currentProduct.price;
      }

      state.totalCartPrice = state.totalCartPrice + action.payload.price;
    },
    decreaseItem(state, action) {
      const id = action.payload.id;
      const product = state.items.find(item => item.id === id);
      state.totalQuantity--;

      if (product.quantity <= 1) {
        state.items = state.items.filter(item => item.id !== id)
      }

      if (product.quantity > 1) {
        product.quantity--;
        product.totalPrice = product.totalPrice - product.price;
      }

      state.totalCartPrice = state.totalCartPrice - product.price
    },
    updateCart(state, action) {
      const { cartData } = action.payload;

      if (cartData.items) {
        state.items = cartData.items;
        state.totalCartPrice = cartData.totalCartPrice;
        state.totalQuantity = cartData.totalQuantity;
      }
    }
  }
})

export const cartActions = cart.actions;

export default cart;