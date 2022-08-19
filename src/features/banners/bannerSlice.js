import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  banners: [
    {
      title: "New Jarritos Drinks",
      subtitle: "Newly Arrived International Drinks",
      img: "jarritos-cover.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
    {
      title: "New Tastes in Store",
      subtitle: "View Our Wide Selections Now",
      img: "drink-table.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
    {
      title: "Perfect for Parties",
      subtitle: "View our catering options",
      img: "party-drinks.jpg",
      leftButton: "Shop Now",
      rightButton: "View More",
    },
    {
      title: "Explore Newly Released Flavours",
      subtitle: "New flavours from Schweppes, Sprite, Pepsi and many more!",
      img: "tonic-water-cover.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
  ],
};
const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
});

export const selectBanners = (state) => state.banner.banners;
export default bannerSlice.reducer;
