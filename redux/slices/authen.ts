import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenToken {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthenToken = {
  accessToken: null,
  refreshToken: null,
};

const authenSlice = createSlice({
  name: "authen",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthenToken>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setToken } = authenSlice.actions;
export default authenSlice.reducer;
