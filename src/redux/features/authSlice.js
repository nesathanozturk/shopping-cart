import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth", // name
  initalState: {
    isLogin: false,
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
