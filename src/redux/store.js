import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "../features/drinks/drinkSlice";
import promotionReducer from "../features/promotions/promotionSlice";

export const store = configureStore({
  reducer: { drink: drinkReducer, promotion: promotionReducer },
});
