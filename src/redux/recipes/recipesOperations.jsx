import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import privateApi from '../../services/PrivateApi.js';

export const fetchRecipesMainPage = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/recipes/main-page/{category}');
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
      const response = await privateApi.get('recipes/category-list');
      console.log(response.data);
      return response.data;
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchRecipesByCategory = createAsyncThunk(
  'recipes/fetchRecipesBy',
  async ({ category = 'Beef', page = 1, limit = 8 }, thunkAPI) => {
    try {
      const response = await privateApi.get(
        `/recipes/category/${category}?page=${page}&limit=${limit}`,
      );
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (_id, thunkAPI) => {
    try {
      const response = await privateApi.get(`/recipes/${_id}`);

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
      const response = await privateApi.post(`/ownRecipes`, formData, {
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
      const response = await privateApi.delete(`/ownRecipes/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchAllRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/ownRecipes');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchSearchRecipes = createAsyncThunk(
  'recipes/fetchSearch',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get(`/search/{searchTitle}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getRecipesPopular = createAsyncThunk(
  'all/popular',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/popular-recipe');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// export const addToFavorites = createAsyncThunk(
//   'recipes/addToFavorites',
//   async (_id, thunkAPI) => {
//     try {
//       const response = await privateApi.patch(`/recipes/${_id}/favorites/true`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );
// export const removeFromFavorites = createAsyncThunk(
//   'recipes/removeFromFavorites',
//   async (_id, thunkAPI) => {
//     try {
//       const response = await privateApi.patch(
//         `/recipes/${_id}/favorites/false`,
//       );
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

// export const fetchAllRecipes = createAsyncThunk(
//   'recipes/fetchAllRecipes',
//   async (_, thunkAPI) => {
//     try {
//       const response = await privateApi.get(`/search/recipes`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

//  export const getRecipeByCategory = createAsyncThunk(
//   'recipes/getRecipeByCategory',
//   async (category, thunkAPI) => {
//     try {
//       const response = await privateApi.get(`/recipes/${category}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

//  export const getMainPageRecipes = createAsyncThunk(
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
