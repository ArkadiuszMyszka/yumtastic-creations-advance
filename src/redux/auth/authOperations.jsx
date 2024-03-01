import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'BASE_BACKEND_URL';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const user = await axios.post('/users/register', credentials);

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
      const res = await axios.post('/users/signin', credentials);

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
    await axios.post('/users/logout');

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
      const res = await axios.get('/users/current');
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
      const res = await axios.post('/users/update', credentials);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
