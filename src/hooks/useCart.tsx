import * as React from "react";
import { BooksSlice } from "../store/books/reducer";
import { getCart } from "../store/books/selectors";
import { toggleCardsLocalStorage } from "../utils/toggleCardsLocalStorage";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "./redux";
import { localStorageKeys } from "../constants/localStorageKeys";
import { BookCardType } from "../types/bookCardType";

const useCart = (_id: string, book: BookCardType | undefined) => {
  const cart = useAppSelector(getCart());

  const dispatch = useAppDispatch();
  const [isInCart, setIsInCart] = React.useState(
    cart.some((el) => el._id === _id)
  );

  const toggleCartButton = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (book) {
      toggleCardsLocalStorage(book, localStorageKeys.CART);
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
