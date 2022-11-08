import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: 0,
};

export const pageSwitcherSlice = createSlice({
  name: "pageSwitcher",
  initialState,
  reducers: {
    switchToHome: (state) => {
      state.item = 0;
    },
    switchToRegisterDelivery: (state) => {
      state.item = 1;
    },
    switchToTableDelivery: (state) => {
      state.item = 2;
    },
  },
});

export const { switchToHome, switchToRegisterDelivery, switchToTableDelivery } =
  pageSwitcherSlice.actions;
export const pageSwitcherReducer = pageSwitcherSlice.reducer;
