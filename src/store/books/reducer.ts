import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "./../../types/stateType";
import { BookCardType } from "../../types/bookCardType";
import { localStorageKeys } from "../../constants/localStorageKeys";

const cartValue = localStorage.getItem(localStorageKeys.CART)
  ? JSON.parse(localStorage.getItem(localStorageKeys.CART) || "[]")
  : [];
const favsValue = localStorage.getItem(localStorageKeys.FAVOURITES)
  ? JSON.parse(localStorage.getItem(localStorageKeys.FAVOURITES) || "[]")
  : [];

const initialState: StateType = {
  cart: cartValue,
  favourites: favsValue,
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<BookCardType[]>) => {
      state.cart = action.payload;
    },

    updateFavourites: (state, action: PayloadAction<BookCardType[]>) => {
      state.favourites = action.payload;
    },
  },
});

export const { updateFavourites, updateCart } = BooksSlice.actions;
