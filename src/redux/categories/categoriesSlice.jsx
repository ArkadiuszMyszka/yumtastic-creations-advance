import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoriesList,
  getRecipesByCategory,
} from "./categoriesOperations.jsx";

const initialState = {
  items: [],
  paginationData: null,
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getRecipesByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {
        state.items = action.payload.recipeData;
        state.paginationData = action.payload.metaData;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
