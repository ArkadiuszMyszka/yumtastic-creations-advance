import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import privateApi from '../../services/PrivateApi.js';

export const getCategories = createAsyncThunk(
  'recipes/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/categories');
      return response.data.categories;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// export const getCategoriesList = createAsyncThunk(
//   'recipes/fetchCategories',
//   async (_, thunkAPI) => {
//     try {
//       const response = await privateApi.get('/recipes/category-list');
//       return response.data.category;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );
// export const getRecipesByCategory = createAsyncThunk(
//   'recipes/fetchRecipesBy',
//   async ({ categoryName, page, limit }, thunkAPI) => {
//     try {
//       const response = await privateApi.get(
//         `/recipes/category/${categoryName}?page=${page}&limit=${limit}`,
//       );
//       return response.data[0];
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

// Categories pomieszany z search z pliku operations poprzedniego repo

// export const getCategories = createAsyncThunk(
//   'categories/getCategories',
//   async (_, thunkAPI) => {
//     try {
//       const res = await privateApi.get('/recipes/category-list');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const getCategoryRecipes = createAsyncThunk(
//   'categories/getCategoriesRecipes',
//   async ({ categoryName, page }, thunkAPI) => {
//     try {
//       const resp = await privateApi.get(
//         `/api/recipes/${categoryName}?page=${page}`,
//       );
//       return resp.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   },
// );

// export const getSearchResultByTitle = createAsyncThunk(
//   'search/getSearchQuery',
//   async ({ type, value, page, limit }, thunkAPI) => {
//     try {
//       const offset = 0;
//       const resp = await privateApi.get(
//         `/api/recipes/search?${type}=${value}&page=${page}&limit=${limit}&offset=${offset}`,
//       );
//       return resp.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.message);
//     }
//   },
// );

// export const getSearchResultByIngredient = createAsyncThunk(
//   'search/getSearchByIngredient',
//   async ({ type, value, page, limit }, thunkAPI) => {
//     try {
//       const offset = 0;
//       const resp = await privateApi.get(
//         `/api/recipes/search/ingredient?${type}=${value}&page=${page}&limit=${limit}&offset=${offset}`,
//       );
//       return resp.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.message);
//     }
//   },
// );
