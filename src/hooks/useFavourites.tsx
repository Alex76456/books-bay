import { useState, MouseEvent } from "react";
import { updateFavourites } from "../store/books/slice";
import { getFavouites } from "../store/books/selectors";
import { toggleCardsLocalStorage } from "../utils/toggleCardsLocalStorage";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "./redux";
import { localStorageKeys } from "../constants/localStorageKeys";
import { BookCardType } from "../types/bookCardType";

const useFavourites = (_id: string, book: BookCardType | undefined) => {
  const favourites = useAppSelector(getFavouites());
  const dispatch = useAppDispatch();
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((el) => el._id === _id)
  );

  const toggleFavouritesButton = (e: MouseEvent) => {
    e.stopPropagation();

    if (book) {
      toggleCardsLocalStorage(book, localStorageKeys.FAVOURITES);
      dispatch(
        updateFavourites(
          JSON.parse(localStorage.getItem(localStorageKeys.FAVOURITES) || "[]")
        )
      );
      setIsFavourite((prevState) => !prevState);
    }
  };

  return { toggleFavouritesButton, isFavourite };
};

export default useFavourites;
