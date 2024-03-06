import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  removeOwnRecipeAPI,
  getOwnRecipesAPI,
} from "../../services/serviceApi/serviceOwnRecipesApi.jsx";

export const removeOwnRecipe = createAsyncThunk(
  "ownRecipes/removeRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeOwnRecipeAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getOwnRecipes = createAsyncThunk(
  "ownRecipes/getRecipes",
  async ({ page, per_page }, { rejectWithValue }) => {
    try {
      const data = await getOwnRecipesAPI(page, per_page);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
