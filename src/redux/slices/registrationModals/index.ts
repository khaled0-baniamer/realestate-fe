import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegisterationModalState = {
  loginModal: boolean;
  signupModal: boolean;
};

const initialState: RegisterationModalState = {
  loginModal: false,
  signupModal: false,
};

export const RegisterationModalSlice = createSlice({
  name: "RegisterationModal",
  initialState,
  reducers: {
    setSignupModal: (state, action: PayloadAction<boolean>) => {
      state.signupModal = action.payload;
    },
    setLoginModal: (state, action: PayloadAction<boolean>) => {
      state.loginModal = action.payload;
    },
  },
});

export const { reducer: RegisterationModalReducer } = RegisterationModalSlice;
export const { setSignupModal ,setLoginModal } = RegisterationModalSlice.actions;
