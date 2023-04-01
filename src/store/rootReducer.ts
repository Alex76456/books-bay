import { BooksSlice } from "./books/reducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  booksData: BooksSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
