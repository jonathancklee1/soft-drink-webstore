import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  drinks: [
    {
      name: "4x Coca-Cola",
      brand: "The Coca-Cola Company",
      price: "5.00",
      bestSeller: true,
      featured: false,
      img: "../assets/img/coke1.png",
    },
    {
      name: "Coca-Cola Zero",
      brand: "The Coca-Cola Company",
      price: "1.50",
      bestSeller: true,
      featured: false,
      img: "../assets/img/coke-zero.png",
    },
    {
      name: "Diet Coke",
      brand: "The Coca-Cola Company",
      price: "1.50",
      bestSeller: false,
      featured: false,
      img: "../assets/img/diet-coke.png",
    },
    {
      name: "Chupachups",
      brand: "Chupa Chups",
      price: "2.00",
      bestSeller: false,
      featured: true,
      img: "../assets/img/chupachups.png",
    },
    {
      name: "Schweppes Tonic Water",
      brand: "Schweppes",
      price: "2.50",
      bestSeller: false,
      featured: true,
      img: "../assets/img/schweppes.png",
    },
    {
      name: "Fanta",
      brand: "The Coca-Cola Company",
      price: "2.50",
      bestSeller: false,
      featured: true,
      img: "../assets/img/fanta.png",
    },
    {
      name: "Bundaberg Blood-Orange",
      brand: "Bundaberg",
      price: "3.00",
      bestSeller: false,
      featured: true,
      img: "../assets/img/bundaberg.png",
    },
    {
      name: "Sprite",
      brand: "The Coca-Cola Company",
      price: "1.80",
      bestSeller: true,
      featured: false,
      img: "../assets/img/sprite.png",
    },
    {
      name: "Mountain Dew",
      brand: "Pepsi Co",
      price: "1.75",
      bestSeller: true,
      featured: false,
      img: "../assets/img/mountain-dew.png",
    },
    {
      name: "Pepsi Cola",
      brand: "Pepsi Co",
      price: "1.60",
      bestSeller: true,
      featured: false,
      img: "../assets/img/pepsi.png",
    },
    {
      name: "Pepsi Max",
      brand: "Pepsi Co",
      price: "1.80",
      bestSeller: false,
      featured: true,
      img: "../assets/img/pepsi-max.png",
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
