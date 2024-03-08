import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentUser {
  id: number | null;
  email: string | null;
  name: string | null;
  birthDate: string | null;
  createdAt: string | null;
  phoneNumber: string | null;
  avatar: string | null;
}

interface IUserSlice {
  user: CurrentUser;
}

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    birthDate: null,
    createdAt: null,
    phoneNumber: null,
    avatar: null,
  } as CurrentUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfileUser: (state, action: PayloadAction<IUserSlice>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setProfileUser } = userSlice.actions;
export default userSlice.reducer;
