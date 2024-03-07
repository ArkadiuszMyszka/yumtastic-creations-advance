import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getFavoriteAPI,
  removeFavoriteAPI,
} from '../../services/serviceApi/serviceFavoritesRecipesApi.jsx';

export const removeFavorite = createAsyncThunk(
  'my_recipes/removeFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeFavoriteAPI(id);
      return data.length === 0
        ? { recipeData: [], metaData: { total: 0 } }
        : data[0];
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  },
);

export const getFavorites = createAsyncThunk(
  'my_recipes/getFavorite',
  async ({ page, per_page }, { rejectWithValue }) => {
    try {
      const data = await getFavoriteAPI(page, per_page);

      return data.length === 0
        ? { recipeData: [], metaData: { total: 0 } }
        : data[0];
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  },
);
