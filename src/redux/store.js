import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "../features/drinks/drinkSlice";
import promotionReducer from "../features/promotions/promotionSlice";
import bannerReducer from "../features/banners/bannerSlice";

export const store = configureStore({
  reducer: {
    drink: drinkReducer,
    promotion: promotionReducer,
    banner: bannerReducer,
  },
});
