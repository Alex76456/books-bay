import * as React from "react";
import { BooksSlice } from "../store/books/reducer";
import { getFavouites } from "../store/books/selectors";
import { toggleLocalStorage } from "../utils/toggleLocalStorage";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "./redux";

const useFavourites = (_id: string) => {
  const favourites = useAppSelector(getFavouites());
  const dispatch = useAppDispatch();
  const [isFavourite, setIsFavourite] = React.useState(
    favourites.includes(_id)
  );

  const { currentBook } = booksAPI.useFetchAllBooksQuery("", {
    selectFromResult: ({ data }) => ({
      currentBook: data?.books.find((book) => book._id === _id),
    }),
  });

  const toggleFavouritesButton = () => {
    if (currentBook) {
      toggleLocalStorage(currentBook._id, "favs");
      dispatch(
        BooksSlice.actions.updateFavourites(
          JSON.parse(localStorage.getItem("favs") || "[]")
        )
      );
      setIsFavourite((prevState) => !prevState);
    }
  };

  return { toggleFavouritesButton, isFavourite };
};

export default useFavourites;
