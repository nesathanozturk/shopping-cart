import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import basketReducer from "./features/basketSlice";

export const store = configureStore({
  reducer: {
    // The section that keeps our states.
    auth: authReducer,
    basket: basketReducer,
  },
});

export default store;
