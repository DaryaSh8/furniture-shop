import { createSlice } from "@reduxjs/toolkit";

const LS_CART_KEY = "cart";

const initialState = {
  itemInCart: JSON.parse(localStorage.getItem(LS_CART_KEY) ?? "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const product = state.itemInCart.find((item) => item.id === payload.id);
      if (product) {
        product.count += 1;
      } else {
        state.itemInCart.push({ ...payload, count: 1 });
      }
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.itemInCart));
    },
    removeItem: (state, { payload }) => {
      state.itemInCart = state.itemInCart.filter((item) => item.id !== payload);
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.itemInCart));
    },
    decrementProductCount: (state, { payload }) => {
      const item = state.itemInCart.find((item) => item.id === payload);
      if (item.count > 1) {
        item.count -= 1;
      } else {
        state.itemInCart = state.itemInCart.filter(
          (item) => item.id !== payload,
        );
      }
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.itemInCart));
    },
    incrementProductCount: (state, { payload }) => {
      let item = state.itemInCart.find((item) => item.id === payload);
      if (item) {
        item.count += 1;
      }
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.itemInCart));
    },
  },
});

export const selectCartItems = (state) => state.cart.itemInCart;
export const selectProductCount = (state, productId) =>
  state.cart.itemInCart.find((item) => item.id === productId)?.count ?? 0;

export const selectSubtotalPrice = (state) => {
  let sum = 0;
  state.cart.itemInCart.forEach((item) => (sum += item.count * item.price));
  return sum;
};

export const {
  addToCart,
  removeItem,
  incrementProductCount,
  decrementProductCount,
} = cartSlice.actions;
export default cartSlice.reducer;
