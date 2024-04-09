import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICheckAccess {
  isAccess: boolean;
}

const initialState: ICheckAccess = {
  isAccess: false,
};

const checkAccessSlice = createSlice({
  name: "checkAccess",
  initialState,
  reducers: {
    setAccess: (state, action: PayloadAction<ICheckAccess>) => {
      state.isAccess = action.payload.isAccess;
    },
  },
});

export const { setAccess } = checkAccessSlice.actions;
export default checkAccessSlice.reducer;
