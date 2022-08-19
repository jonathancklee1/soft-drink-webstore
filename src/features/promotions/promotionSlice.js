import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  promotions: [
    {
      title: "All Cokes are restocked",
      subtitle: "Experience all the Coke variety!",
      brandDeals: true,
      img: "coke-cover.jpg",
    },
    {
      title: "Dr Pepper",
      subtitle: "Explore Dr Pepper Drinks",
      brandDeals: true,
      img: "dr-pepper-cover.jpg",
    },
    {
      title: "Drinks on the Go",
      subtitle: "View our selection for travel packs",
      img: "car-drinking.jpg",
      brandDeals: false,
    },
    {
      title: "Freshen Up",
      subtitle: "Start your day with a drink!",
      brandDeals: false,
      img: "woman-drinking.jpg",
    },
  ],
};
const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {},
});

export const selectPromotions = (state) => state.promotion.promotions;
export default promotionSlice.reducer;
