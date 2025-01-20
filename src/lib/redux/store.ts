import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "@/lib/redux/slices/campaignsSlice";
import automationsReducer from "@/lib/redux/slices/automationsSlice";
import discountsReducer from "@/lib/redux/slices/discountsSlice";
import analyticsReducer from "@/lib/redux/slices/analyticsSlice";

export const store = configureStore({
  reducer: {
    campaigns: campaignsReducer,
    automations: automationsReducer,
    discounts: discountsReducer,
    analytics: analyticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
