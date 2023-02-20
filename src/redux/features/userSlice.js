import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    saveUsername: (state, action) => action.payload,
  },
});

export const { saveUsername } = userSlice.actions;

export default userSlice.reducer;
