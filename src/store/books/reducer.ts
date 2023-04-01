import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "./../../types/stateType";
import { loadBooksData } from "./actions";

const cartValue = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") || "[]")
  : [];
const favsValue = localStorage.getItem("favs")
  ? JSON.parse(localStorage.getItem("favs") || "[]")
  : [];

const initialState: StateType = {
  isLoading: true,
  books: null,
  cart: cartValue,
  favourites: favsValue,
  errors: null,
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    updateFavourites: (state, action: PayloadAction<string[]>) => ({
      ...state,
      favourites: action.payload,
    }),
    updateCart: (state, action: PayloadAction<string[]>) => ({
      ...state,
      cart: action.payload,
    }),
  },
  extraReducers: {
    [loadBooksData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loadBooksData.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    },
    [loadBooksData.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementBy, (state, action) => {
  //       // action is inferred correctly here if using TS
  //     })
  //     // You can chain calls, or have separate `builder.addCase()` lines each time
  //     .addCase(decrement, (state, action) => {})
  //     // You can match a range of action types
  //     .addMatcher(
  //       isRejectedAction,
  //       // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
  //       (state, action) => {}
  //     )
  //     // and provide a default case if no other handlers matched
  //     .addDefaultCase((state, action) => {})
  // },
});
