import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  promotions: [
    {
      title: "All Cokes are restocked",
      subtitle: "Experience all the Coke variety!",
      brandDeals: true,
      img: "../assets/img/landscape/coke-cover.jpg",
    },
    {
      title: "Dr Pepper",
      subtitle: "Explore Dr Pepper Drinks",
      brandDeals: true,
      img: "../assets/img/landscape/dr-pepper-cover.jpg",
    },
    {
      title: "New Jarritos Drinks",
      subtitle: "Newly Arrived International Drinks",
      brandDeals: false,
      img: "../assets/img/landscape/jarritos-cover.jpg",
    },
    {
      title: "Freshen Up",
      subtitle: "Start your day with a drink!",
      brandDeals: false,
      img: "../assets/img/landscape/woman-drinking.jpg",
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
