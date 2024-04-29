import { createSlice } from "@reduxjs/toolkit";

export interface WheelShowProps {
  isShow: boolean;
}

const initialState: WheelShowProps = {
  isShow: true,
};

const showWheel = createSlice({
  name: "showWheel",
  initialState,
  reducers: {
    openWheel: (state) => {
      state.isShow = true;
    },
    closeWheel: (state) => {
      state.isShow = false;
    },
  },
});

export const { openWheel, closeWheel } = showWheel.actions;
export default showWheel.reducer;
