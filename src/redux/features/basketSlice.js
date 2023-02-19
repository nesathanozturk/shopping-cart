import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    totalAmount: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload;
      const existItem = state.basket.find((item) => item.id === newItem.id);

      if (existItem) {
        existItem.amount++;
        existItem.totalPrice += newItem.price;
      } else {
        state.basket.push({
          id: newItem.id,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          cover: newItem.cover,
        });
        state.totalAmount++;
      }
    },
    removeFromBasket: (state, action) => {
      const id = action.payload;
      const exitstingItem = state.basket.find((item) => item.id === id);
      if (exitstingItem.amount === 1) {
        state.basket = state.basket.filter((item) => item.id !== id);
        state.totalAmount--;
      } else {
        exitstingItem.amount--;
        exitstingItem.totalPrice -= exitstingItem.price;
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
