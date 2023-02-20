import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    Login: false,
  },
  reducers: {
    login: (state) => {
      state.Login = true;
    },
    logout: (state) => {
      state.Login = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
