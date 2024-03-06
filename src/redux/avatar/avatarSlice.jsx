import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: null,
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    passAvatar: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { passAvatar } = avatarSlice.actions;

export const avatarReducer = avatarSlice.reducer;
