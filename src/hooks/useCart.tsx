import * as React from "react";
import { BooksSlice } from "../store/books/reducer";
import { getCart } from "../store/books/selectors";
import { toggleLocalStorage } from "../utils/toggleLocalStorage";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "./redux";

const useCart = (_id: string) => {
  const cart = useAppSelector(getCart());

  const { currentBook } = booksAPI.useFetchAllBooksQuery("", {
    selectFromResult: ({ data }) => ({
      currentBook: data?.books.find((book) => book._id === _id),
    }),
  });

  const dispatch = useAppDispatch();
  const [isInCart, setIsInCart] = React.useState(cart.includes(_id));

  const toggleCartButton = () => {
    if (currentBook) {
      toggleLocalStorage(currentBook._id, "cart");
      dispatch(
        BooksSlice.actions.updateCart(
          JSON.parse(localStorage.getItem("cart") || "[]")
        )
      );
      setIsInCart((prevState) => !prevState);
    }
  };

  return { toggleCartButton, isInCart };
};

export default useCart;
