import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      key: "all",
      name: "All products",
    },
    {
      key: "chairs",
      name: "Chairs",
    },
    {
      key: "lamps",
      name: "Lamps",
    },
    {
      key: "vases",
      name: "Vases",
    },
  ],
  activeCategory: "all",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
  },
});

export const selectCategories = (state) => state.category.categories;
export const selectActiveCategory = (state) => state.category.activeCategory;

export const { setActiveCategory } = categorySlice.actions;
export default categorySlice.reducer;
