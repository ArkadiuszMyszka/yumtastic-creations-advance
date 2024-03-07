import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getFavoriteAPI,
  removeFavoriteAPI,
} from "../../services/serviceApi/serviceFavoritesRecipesApi.jsx";

export const removeFavorite = createAsyncThunk(
  "recipes/removeFavorite",
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeFavoriteAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getFavorite = createAsyncThunk(
  "recipes/getFavorite",
  async ({ page, per_page }, { rejectWithValue }) => {
    try {
      const data = await getFavoriteAPI(page, per_page);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
