import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesList = createAsyncThunk(
  "recipes/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/category/list");
      return response.data.category;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesBy",
  async ({ categoryName, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/category/${categoryName}?page=${page}&limit=${limit}`
      );
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
