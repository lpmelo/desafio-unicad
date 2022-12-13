import { createSlice } from "@reduxjs/toolkit";
import { visualizeDeliveriesInitialState } from "../constants";

export const visualizeDeliveriesSlice = createSlice({
  name: "visualizeDeliveriesReducer",
  initialState: visualizeDeliveriesInitialState,
  reducers: {
    saveAllDeliveries: (state, action) => {
      state.deliveries = action.payload;
    },
  },
});

export const { saveAllDeliveries } = visualizeDeliveriesSlice.actions;
export const visualizeDeliveriesReducer = visualizeDeliveriesSlice.reducer;
