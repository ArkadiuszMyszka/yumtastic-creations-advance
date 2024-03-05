import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './authOperations.jsx';
import {
  refreshUser,
  register,
  signIn,
  updateProfile,
} from './authOperations.jsx';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  errorMessage: null,
  isRegistered: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRegistered = true;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
