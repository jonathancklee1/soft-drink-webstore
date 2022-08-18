import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  banners: [
    {
      title: "New Tastes in Store",
      subtitle: "View Our Wide Selections Now",
      img: "../assets/img/landscape/coke-cover.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
    {
      title: "Dr Pepper",
      subtitle: "Explore Dr Pepper Drinks",
      img: "../assets/img/landscape/dr-pepper-cover.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
    {
      title: "New Jarritos Drinks",
      subtitle: "Newly Arrived International Drinks",
      img: "../assets/img/landscape/jarritos-cover.jpg",
      leftButton: "Shop Now",
      rightButton: "Explore More",
    },
    {
      title: "Freshen Up",
      subtitle: "Start your day with a drink!",
      img: "../assets/img/landscape/woman-drinking.jpg",
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
