import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },

  middleware: (middleware) =>
    middleware({
      serializableCheck: false,
    }),
});
