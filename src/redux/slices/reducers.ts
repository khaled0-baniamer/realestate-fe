import { combineReducers } from "@reduxjs/toolkit";
import { ListingFilterReducer } from "./listingFilter";
import { UserReducer } from "./user";
import { HeroSearchReducer } from "./heroSearch";
import { AppDispatch, AppStore, RootState } from "../store";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { RegisterationModalReducer } from "./registrationModals";

export const appReducer = combineReducers({
  listingFilter: ListingFilterReducer,
  heroSearch: HeroSearchReducer,
  user: UserReducer,
  registerationModals: RegisterationModalReducer,
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = () => useStore<AppStore>();
