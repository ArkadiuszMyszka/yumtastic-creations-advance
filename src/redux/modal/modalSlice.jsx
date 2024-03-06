import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLogoOpen: false,
  isUserInfoOpen: false,
  isLogoutOpen: false,
  isAvatarUpdateOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleUserLogo: (state) => {
      state.isUserLogoOpen = !state.isUserLogoOpen;
    },
    toggleUserInfo: (state) => {
      state.isUserInfoOpen = !state.isUserInfoOpen;
    },
    toggleLogout: (state) => {
      state.isLogoutOpen = !state.isLogoutOpen;
    },
    toggleAvatarUpdate: (state) => {
      state.isAvatarUpdateOpen = !state.isAvatarUpdateOpen;
    },
  },
});

export const {
  toggleUserLogo,
  toggleUserInfo,
  toggleLogout,
  toggleAvatarUpdate,
} = modalSlice.actions;

// export default modalSlice.reducer;
export const modalReducer = modalSlice.reducer;
