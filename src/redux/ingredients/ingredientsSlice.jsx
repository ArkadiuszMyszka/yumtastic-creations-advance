import { createSlice } from "@reduxjs/toolkit";
import {
  fetchIngredients,
  fetchRecipesByIngredient,
} from "./ingredientsOperations.jsx";

const initialState = {
  items: [],
  selectedRecipes: [],
  isLoading: false,
  error: null,
};

const ingrediensSlice = createSlice({
  name: "ingredients",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchRecipesByIngredient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesByIngredient.fulfilled, (state, action) => {
        state.selectedRecipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesByIngredient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ingredientsReducer = ingrediensSlice.reducer;
