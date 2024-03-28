import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  keyPrefix: "mfl-",
  whitelist: ["user", "authenSlice","showCart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

export const useDispatch = () => useAppDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { dispatch };
