import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ListingFilterState = {
  data?: string;
};

const initialState: ListingFilterState = {};

export const listingFilterSlice = createSlice({
  name: "ListingFilter",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { reducer: ListingFilterReducer } = listingFilterSlice;
export const { set } = listingFilterSlice.actions;
