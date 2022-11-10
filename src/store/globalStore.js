import { configureStore } from "@reduxjs/toolkit";
import { registerDeliveryReducer } from "../components/pages/RegisterDelivery/features/registerDeliverySlice";
import { pageSwitcherReducer } from "../features/pageSwitcher/pageSwitcherSlice";

export const store = configureStore({
  reducer: {
    pageSwitcher: pageSwitcherReducer,
    registerDelivery: registerDeliveryReducer,
  },
});
