import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  drinks: [
    {
      name: "4x Coca-Cola",
      brand: "The Coca-Cola Company",
      price: "5.00",
      bestSeller: true,
      featured: false,
      img: "coke1.png",
      type: "375ml x4 Pack",
    },
    {
      name: "Coca-Cola Zero",
      brand: "The Coca-Cola Company",
      price: "1.50",
      bestSeller: true,
      featured: false,
      img: "coke-zero.png",
      type: "375ml Can",
    },
    {
      name: "Chupachups Orange",
      brand: "Chupa Chups",
      price: "2.00",
      bestSeller: false,
      featured: true,
      img: "chupachups.png",
      type: "345ml Can",
    },
    {
      name: "Schweppes Tonic Water",
      brand: "Schweppes",
      price: "2.50",
      bestSeller: false,
      featured: true,
      img: "schweppes.png",
      type: "325ml Can",
    },
    {
      name: "Fanta Zero",
      brand: "The Coca-Cola Company",
      price: "2.50",
      bestSeller: false,
      featured: true,
      img: "fanta.png",
      type: "375ml Can",
    },
    {
      name: "Bundaberg Blood-Orange",
      brand: "Bundaberg",
      price: "3.00",
      bestSeller: false,
      featured: true,
      img: "bundaberg.png",
      type: "375ml Bottle",
    },
    {
      name: "Sprite",
      brand: "The Coca-Cola Company",
      price: "1.80",
      bestSeller: true,
      featured: false,
      img: "sprite.png",
      type: "375ml Can",
    },
    {
      name: "Mountain Dew",
      brand: "Pepsi Co",
      price: "1.75",
      bestSeller: true,
      featured: false,
      img: "mountain-dew.png",
      type: "375ml Can",
    },
    {
      name: "Pepsi Cola",
      brand: "Pepsi Co",
      price: "1.60",
      bestSeller: true,
      featured: false,
      img: "pepsi.png",
      type: "375ml Can",
    },
    {
      name: "Pepsi Max",
      brand: "Pepsi Co",
      price: "1.80",
      bestSeller: false,
      featured: true,
      img: "pepsi-max.png",
      type: "375ml Can",
    },
  ],
};
const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {},
});

export const selectDrinks = (state) => state.drink.drinks;
export default drinkSlice.reducer;
