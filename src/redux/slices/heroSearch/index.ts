import { HeroSearchState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HeroSearchState = {
  bedroomId: [],
  bathroomId: [],
  priceFrom: "",
  priceTo: "",
  districtId: [],
  purpose: "rent",
  furnishedId: [],
  typeId: [],
};

export const heroSearchSlice = createSlice({
  name: "HeroSearch",
  initialState,
  reducers: {
    setBedrooms: (state, action: PayloadAction<number[]>) => {
      state.bedroomId = action.payload;
    },
    setBathrooms: (state, action: PayloadAction<number[]>) => {
      state.bathroomId = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<string>) => {
      state.priceFrom = action.payload;
    },
    setpriceTo: (state, action: PayloadAction<string>) => {
      state.priceTo = action.payload;
    },
    setCity: (state, action: PayloadAction<number>) => {
      state.cityId = action.payload;
    },
    setDistricts: (state, action: PayloadAction<number[]>) => {
      state.districtId = action.payload;
    },
    setPurpose: (state, action: PayloadAction<string>) => {
      state.purpose = action.payload;
    },

    setFurnishedType: (state, action: PayloadAction<number[]>) => {
      state.furnishedId = action.payload;
    },

    setPropertyType: (state, action: PayloadAction<number[]>) => {
      state.typeId = action.payload;
    },
  },
});

export const { reducer: HeroSearchReducer } = heroSearchSlice;
export const {
  setBedrooms,
  setBathrooms,
  setMinPrice,
  setpriceTo,
  setCity,
  setDistricts,
  setPurpose,
  setFurnishedType,
  setPropertyType,
} = heroSearchSlice.actions;
