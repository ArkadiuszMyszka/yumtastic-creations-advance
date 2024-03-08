import { createAsyncThunk } from '@reduxjs/toolkit';
import privateApi from '../../services/PrivateApi.js';

export const getRecipesByTitle = createAsyncThunk(
  'search/getRecipesByTitle',
  async (title, thunkAPI) => {
    try {
      const response = await privateApi.get(`search?q=${title}`);
      console.log('getRecipesByTitle response');
      return response.data;
    } catch (error) {
      console.log('getRecipesByTitle error');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
/////////////////////////////////////////////////////////////////////
// export const getRecipesByIngredient = createAsyncThunk(
//   'search/getRecipesByIngredient',
//   async (ingredient, thunkAPI) => {
//     try {
//       const response = await privateApi.get(`/ingredients?ing=${ingredient}`);
//       console.log('getRecipesByIngredient response');
//       return response.data;
//     } catch (error) {
//       console.log('getRecipesByIngredient error');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

////////////////////////////////////////////////////////////
// export const getRecipeById = async (recipeId) => {
//   try {
//     const { data } = await privateApi.get(`/recipe/${recipeId}`);
//     return data;
//   } catch (error) {
//     console.log("getRecipeById error", error.message);
//     return null;
//   }
// };

// export default { getRecipesByTitle, getRecipesByIngredient, getRecipeById };

// export const getSearchByTitle = createAsyncThunk(
//   "search/byTitle",
//   async ({ query, page }, thunkApi) => {
//     try {
//       const data = await privateApi.get(`api/search/?q=${query}&page=${page}`);
//       return data;
//     } catch (error) {
//       toast.error("Something happened during request. Please try again.");
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const getSearchByIngredients = createAsyncThunk(
//   "search/byIngredient",
//   async ({ query, page }, thunkApi) => {
//     try {
//       const { data } = await privateApi.get(
//         `api/ingredients/?ing=${query}&page=${page}`
//       );
//       console.log("operation ing");
//       return data;
//     } catch (error) {
//       toast.error("Something happened during request. Please try again.");
//       console.log("operation etSearchByIngredients error");
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
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
