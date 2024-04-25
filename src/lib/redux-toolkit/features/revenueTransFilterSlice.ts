import { createSlice } from "@reduxjs/toolkit";
import { ActionType } from "./types";

interface initialStateType {
  transType?: Array<string> | null;
  transStatus?: Array<string> | null;
  dateRange?: [string, string] | null;
  numOfActiveFilter: number;
}

const initialState: initialStateType = {
  transStatus: null,
  transType: null,
  dateRange: null,
  numOfActiveFilter: 0,
};

const revenueTransFilterSlice = createSlice({
  name: "revenueTransFilterSlice",
  initialState,
  reducers: {
    updateRevenueTransFilterState(state, action: ActionType<initialStateType>) {
      state.dateRange = action.payload.dateRange;
      state.transStatus = action.payload.transStatus;
      state.transType = action.payload.transType;

      let num = 0;
      if (action.payload.dateRange) ++num;
      if (action.payload.transStatus) ++num;
      if (action.payload.transType) ++num;

      state.numOfActiveFilter = num;
    },
  },
});

export default revenueTransFilterSlice;
export const { updateRevenueTransFilterState } =
  revenueTransFilterSlice.actions;
