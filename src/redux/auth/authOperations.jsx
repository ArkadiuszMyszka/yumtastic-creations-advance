import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import privateApi from '../../services/PrivateApi.js';

axios.defaults.baseURL = 'BASE_BACKEND_URL';

const setAuthHeader = token => {
  privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  privateApi.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const user = await privateApi.post('/register', credentials);

      //   setAuthHeader(user.data.token);
      return user.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await privateApi.post('/signin', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await privateApi.post('/logout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const res = await privateApi.get('/status');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const RefreshError = createAsyncThunk(
  'auth/errorrefresh',
  async () => {},
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (credentials, thunkAPI) => {
    try {
      const res = await privateApi.post('/patch', credentials);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
