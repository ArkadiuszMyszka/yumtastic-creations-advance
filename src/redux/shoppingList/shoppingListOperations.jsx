// import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import privateApi from '../../services/PrivateApi.js';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchShoppingList',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/shopping-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addIngredientToShoppingList = createAsyncThunk(
  'shoppingList/addIngredientToShoppingList',
  async ({ id, measure }, thunkAPI) => {
    try {
      const response = await privateApi.post(
        `/shopping-list/${id}?measure=${measure}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteIngredientFromShoppingList = createAsyncThunk(
  'shoppingList/deleteIngredientFromShoppingList',
  async ({ id, measure }, thunkAPI) => {
    try {
      const response = await privateApi.delete(
        `/shopping-list/${id}?measure=${measure}`,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
