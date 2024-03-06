import { createSlice } from "@reduxjs/toolkit";
import {
  getRecipesByTitle,
  getRecipesByIngredient,
} from "./searchOperations.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  recipeByTitle: [],
  recipesByIngredient: [],
  searchFilter: "",
  currentPage: 1,
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    resetCurrentPage: (state, action) => {
      state.currentPage = initialState.currentPage;
    },

    resetRecipeByTitle: (state) => {
      state.recipeByTitle = initialState.recipeByTitle;
    },

    resetRecipeByIngredient: (state) => {
      state.recipesByIngredient = initialState.recipesByIngredient;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getRecipesByTitle.pending, handlePending)
      .addCase(getRecipesByTitle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipeByTitle = action.payload.data.recipe;
      })
      .addCase(getRecipesByTitle.rejected, handleRejected)
      .addCase(getRecipesByIngredient.pending, handlePending)
      .addCase(getRecipesByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesByIngredient = action.payload.data.recipe;
      })
      .addCase(getRecipesByIngredient.rejected, handleRejected);
  },
});

export default searchSlice.reducer;
export const {
  getNewState,
  resetRecipeByTitle,
  resetRecipeByIngredient,
  setCurrentPage,
  resetCurrentPage,
} = searchSlice.actions;
