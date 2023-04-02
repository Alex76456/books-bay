import * as React from "react";
import { BooksSlice } from "../store/books/reducer";
import { getFavouites } from "../store/books/selectors";
import { toggleCardsLocalStorage } from "../utils/toggleCardsLocalStorage";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "./redux";
import { localStorageKeys } from "../constants/localStorageKeys";

const useFavourites = (_id: string) => {
  const favourites = useAppSelector(getFavouites());
  const dispatch = useAppDispatch();
  const [isFavourite, setIsFavourite] = React.useState(
    favourites.some((el) => el._id === _id)
  );

  const { currentBook } = booksAPI.useFetchAllBooksQuery(undefined, {
    selectFromResult: ({ data }) => ({
      currentBook: data?.find((book) => book._id === _id),
    }),
  });

  const toggleFavouritesButton = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (currentBook) {
      toggleCardsLocalStorage(currentBook, localStorageKeys.FAVOURITES);
      dispatch(
        BooksSlice.actions.updateFavourites(
          JSON.parse(localStorage.getItem(localStorageKeys.FAVOURITES) || "[]")
        )
      );
      setIsFavourite((prevState) => !prevState);
    }
  };

  return { toggleFavouritesButton, isFavourite };
};

export default useFavourites;
