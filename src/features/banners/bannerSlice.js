import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  banners: [
    {
      title: "New Jarritos Drinks",
      subtitle: "Newly Arrived International Drinks",
      img: "../assets/img/landscape/jarritos-cover.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
    {
      title: "New Tastes in Store",
      subtitle: "View Our Wide Selections Now",
      img: "../assets/img/landscape/drink-table.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
    {
      title: "Perfect for Parties",
      subtitle: "View our catering options",
      img: "../assets/img/landscape/party-drinks.jpg",
      leftButton: "Shop Now",
      rightButton: "View More",
    },
    {
      title: "Explore Newly Released Flavours",
      subtitle: "New flavours from Schweppes, Sprite, Pepsi and many more!",
      img: "../assets/img/landscape/tonic-water-cover.jpg",
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
