import { configureStore } from "@reduxjs/toolkit";
import revenueTransFilterSlice from "./features/revenueTransFilterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [revenueTransFilterSlice.name]: revenueTransFilterSlice.reducer,
    },
    devTools: true,
  });
};

export let globalStore = makeStore();

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const updateGlobalStore = (newStore: AppStore) => {
  globalStore = newStore;
};
