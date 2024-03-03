import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./slices/showCart";

export const store = configureStore({
  reducer: {
    showCart: showCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
