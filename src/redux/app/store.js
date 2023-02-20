import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import basketReducer from "../features/basketSlice";

export const store = configureStore({
  reducer: {
    // The section that keeps our states.
    auth: authSlice.reducer,
    basket: basketReducer,
  },
});

export default store;
