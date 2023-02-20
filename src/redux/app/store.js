import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import basketReducer from "../features/basketSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    // The section that keeps our states.
    auth: authSlice.reducer,
    basket: basketReducer,
    user: userReducer,
  },
});

export default store;
