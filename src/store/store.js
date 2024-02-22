import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/cartSlice";
import categoryReducer from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
