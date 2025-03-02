import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BooksSlice } from "./books/slice";
import { booksAPI } from "../services/api.service";

const rootReducer = combineReducers({
  booksData: BooksSlice.reducer,
  [booksAPI.reducerPath]: booksAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(booksAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
