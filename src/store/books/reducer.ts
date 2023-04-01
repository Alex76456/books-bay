import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "./../../types/stateType";

const cartValue = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") || "[]")
  : [];
const favsValue = localStorage.getItem("favs")
  ? JSON.parse(localStorage.getItem("favs") || "[]")
  : [];

const initialState: StateType = {
  // isLoading: true,
  // books: null,
  cart: cartValue,
  favourites: favsValue,
  // errors: null,
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<string[]>) => {
      state.cart = action.payload;
    },

    updateFavourites: (state, action: PayloadAction<string[]>) => {
      state.favourites = action.payload;
    },
  },
});

export const { updateFavourites, updateCart } = BooksSlice.actions;
