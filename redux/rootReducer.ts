import { combineReducers } from "@reduxjs/toolkit";
import showCartSlice from "./slices/showCart";
import authenSlice from "./slices/authen";
import userSlice from "./slices/user";
import checkAccessSlice from "./slices/checkAccess";
import showWheelSlice from "./slices/wheel";

const rootReducer = combineReducers({
  showCart: showCartSlice,
  authenSlice: authenSlice,
  user: userSlice,
  checkAccess: checkAccessSlice,
  showWheel: showWheelSlice,
});

export { rootReducer };
