import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {},
});

export const {} = basketSlice.actions;

export default basketSlice.reducer;
