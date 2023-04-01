import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/UserSlice";
// import { postAPI } from "../services/PostService";
import { BooksSlice } from "./books/reducer";
import { booksAPI } from "../services/api.service";

const rootReducer = combineReducers({
  // userReducer,
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
