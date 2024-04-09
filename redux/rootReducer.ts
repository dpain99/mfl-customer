import { combineReducers } from "@reduxjs/toolkit";
import showCartSlice from "./slices/showCart";
import authenSlice from "./slices/authen";
import userSlice from "./slices/user";
import checkAccessSlice from "./slices/checkAccess";

const rootReducer = combineReducers({
  showCart: showCartSlice,
  authenSlice: authenSlice,
  user: userSlice,
  checkAccess: checkAccessSlice,
});

export { rootReducer };
