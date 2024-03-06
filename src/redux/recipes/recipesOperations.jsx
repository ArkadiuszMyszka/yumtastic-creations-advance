import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import privateApi from '../../services/PrivateApi';

// import privateApi from '../../services/PrivateApi.js';

// export const getMainPageRecipes = createAsyncThunk(
//   'recipes/getMainPageRecipes',
//   async (categoryTitle, thunkAPI) => {
//     try {
//       const titleToSend = categoryTitle;
//       const response = await privateApi.get(
//         `/recipes/main-page/${titleToSend}`,
//       );
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   },
// );

export const fetchRecipesMainPage = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/main-page');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchSearchRecipes = createAsyncThunk(
  'recipes/fetchSearch',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/search/title/${query}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchAllRecipes = createAsyncThunk(
  'recipes/fetchAllRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/search/recipes`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchCategoriesList = createAsyncThunk(
  'recipes/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/category/list');
      return response.data.category;
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getRecipesPopular = createAsyncThunk(
  'all/popular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/popular-recipes`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${_id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getRecipeByCategory = createAsyncThunk(
  'recipes/getRecipeByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async ({ formData, _id }, thunkAPI) => {
    try {
      const response = await axios.post(`/users/${_id}/own-recipes`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addToFavorites = createAsyncThunk(
  'recipes/addToFavorites',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.patch(`/recipes/${_id}/favorites/true`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const removeFromFavorites = createAsyncThunk(
  'recipes/removeFromFavorites',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.patch(`/recipes/${_id}/favorites/false`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchRecipesByCategory = createAsyncThunk(
  'recipes/fetchRecipesBy',
  async ({ category = 'Beef', page = 1, limit = 8 }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/category/${category}?page=${page}&limit=${limit}`,
      );
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
