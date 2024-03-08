import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import privateApi from '../../services/PrivateApi.js';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/ingredients/list');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchRecipesByIngredient = createAsyncThunk(
  'search/:ingredient',
  async (id, thunkAPI) => {
    try {
      const { data } = await privateApi.get(`/ingredients/${id}`);
      return data.length === 0
        ? data
        : normalizedFetchRecipesByIngredient(data[0].recipeData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const normalizedFetchRecipesByIngredient = data =>
  data.map(({ recipe }) => ({
    title: recipe.title,
    id: recipe._id,
    img: recipe.thumb,
    ingredients: recipe.ingredients,
  }));
