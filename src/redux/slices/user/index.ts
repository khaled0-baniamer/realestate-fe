import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  data: User | null;
  cookies: string | null;
};

const initialState: UserState = {
  cookies: null,
  data: null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    setCookies: (state, action: PayloadAction<string>) => {
      state.cookies = action.payload;
    },
    logout: (state) => {
      state.cookies = null;
    },
  },
});
export const { reducer: UserReducer } = userSlice;
export const { setUser, setCookies  , logout} = userSlice.actions;
