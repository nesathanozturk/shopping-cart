import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketItems: [],
    totalAmount: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload;
      const existItem = state.basketItems.find(
        (item) => item.id === newItem.id
      );

      if (existItem) {
        existItem.amount++;
        existItem.totalPrice += newItem.price;
      } else {
        state.basketItems.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
        });
        state.totalAmount++;
      }
    },
    removeFromBasket: (state, action) => {
      const id = action.payload;
      const exitstingItem = state.basketItems.find((item) => item.id === id);
      if (exitstingItem.amount === 1) {
        state.basketItems = state.basketItems.filter((item) => item.id !== id);
        state.totalAmount--;
      } else {
        exitstingItem.amount--;
        exitstingItem.totalPrice -= exitstingItem.price;
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearBasket: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
