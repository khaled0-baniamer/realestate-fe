import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../slices";

export const makeStore = () => {
  return configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck:false
      }),
  });
};




export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
