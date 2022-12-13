import { configureStore } from "@reduxjs/toolkit";
import { registerDeliveryReducer } from "../components/pages/RegisterDelivery/features/registerDeliverySlice";
import { visualizeDeliveriesReducer } from "../components/pages/VisualizeDeliveries/features/visualizeDeliveriesSlice";
import { pageSwitcherReducer } from "../features/pageSwitcher/pageSwitcherSlice";

export const store = configureStore({
  reducer: {
    pageSwitcher: pageSwitcherReducer,
    registerDelivery: registerDeliveryReducer,
    visualizeDeliveries: visualizeDeliveriesReducer,
  },
});
