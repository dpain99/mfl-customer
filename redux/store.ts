import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./slices/showCart";
import authenSlice from "./slices/authen";

export const store = configureStore({
  reducer: {
    showCart: showCartSlice,
    authenSlice: authenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
