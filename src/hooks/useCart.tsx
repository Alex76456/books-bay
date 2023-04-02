import * as React from "react";
import { BooksSlice } from "../store/books/reducer";
import { getCart } from "../store/books/selectors";
import { toggleCardsLocalStorage } from "../utils/toggleCardsLocalStorage";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "./redux";
import { localStorageKeys } from "../constants/localStorageKeys";

const useCart = (_id: string) => {
  const cart = useAppSelector(getCart());

  const { currentBook } = booksAPI.useFetchAllBooksQuery(undefined, {
    selectFromResult: ({ data }) => ({
      currentBook: data?.find((book) => book._id === _id),
    }),
  });

  const dispatch = useAppDispatch();
  const [isInCart, setIsInCart] = React.useState(
    cart.some((el) => el._id === _id)
  );

  const toggleCartButton = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (currentBook) {
      toggleCardsLocalStorage(currentBook, localStorageKeys.CART);
      dispatch(
        BooksSlice.actions.updateCart(
          JSON.parse(localStorage.getItem(localStorageKeys.CART) || "[]")
        )
      );
      setIsInCart((prevState) => !prevState);
    }
  };

  return { toggleCartButton, isInCart };
};

export default useCart;
