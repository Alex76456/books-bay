// import { RootStore } from "./../rootReducer";

import { RootState } from "./../store";

// export const getAllBooks = () => (state: RootState) => state.booksData.books;
// export const getBookById = (_id: string) => (state: RootState) => {
//   console.log("state", state);

//   if (state.booksData.books) {
//     const currentBook = state.booksData.books.find(
//       (b: { _id: string }) => b._id === _id
//     );
//     return currentBook;
//   }
// };
// export const getIsLoading = () => (state: RootState) =>
//   state.booksData.isLoading;
export const getFavouites = () => (state: RootState) =>
  state.booksData.favourites;
export const getCart = () => (state: RootState) => state.booksData.cart;

export const getCurSearchTerm = () => (state: RootState) =>
  state.booksData.searchTerm;
