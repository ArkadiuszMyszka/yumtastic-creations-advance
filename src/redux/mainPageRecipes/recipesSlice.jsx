import { createSlice } from '@reduxjs/toolkit';
import { getMainPageRecipes } from './operations.jsx';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    categoryRecipes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getMainPageRecipes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMainPageRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoryRecipes = action.payload;
      })
      .addCase(getMainPageRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const recipesReducer = recipesSlice.reducer;
