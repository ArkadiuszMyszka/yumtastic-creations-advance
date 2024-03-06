import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  removeOwnRecipeAPI,
  getOwnRecipesAPI,
} from "../../services/serviceApi/serviceOwnRecipesApi.jsx";

export const removeRecipe = createAsyncThunk(
  "My_recipe/removeRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeOwnRecipeAPI(id);
      return data.length === 0
        ? { recipeData: [], metaData: { total: 0 } }
        : data[0];
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipes = createAsyncThunk(
  "my_recipes/getRecipes",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const data = await getOwnRecipesAPI(page, limit);
      return data.length === 0
        ? { recipeData: [], metaData: { total: 0 } }
        : data[0];
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
