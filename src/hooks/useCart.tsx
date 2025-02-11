import { useState, MouseEvent } from "react";
import { updateCart } from "../store/books/slice";
import { getCart } from "../store/books/selectors";
import { toggleCardsLocalStorage } from "../utils/toggleCardsLocalStorage";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "./redux";
import { localStorageKeys } from "../constants/localStorageKeys";
import { BookCardType } from "../types/bookCardType";

const useCart = (_id: string, book: BookCardType | undefined) => {
  const cart = useAppSelector(getCart());

  const dispatch = useAppDispatch();
  const [isInCart, setIsInCart] = useState(cart.some((el) => el._id === _id));

  const toggleCartButton = (e: MouseEvent) => {
    e.stopPropagation();

    if (book) {
      toggleCardsLocalStorage(book, localStorageKeys.CART);
      dispatch(
        updateCart(
          JSON.parse(localStorage.getItem(localStorageKeys.CART) || "[]")
        )
      );
      setIsInCart((prevState) => !prevState);
    }
  };

  return { toggleCartButton, isInCart };
};

export default useCart;
