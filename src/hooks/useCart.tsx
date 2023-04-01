import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BooksSlice } from "../store/books/reducer";
import { getBookById, getCart } from "../store/books/selectors";
import { toggleLocalStorage } from "../utils/toggleLocalStorage";
import { booksAPI } from "../services/api.service";

const useCart = (_id: string) => {
  const cart = useSelector(getCart());
  // const currentBook = useSelector(getBookById(_id));

  const { data } = booksAPI.useFetchAllBooksQuery("");
  const books = data?.books;
  const currentBook = books?.find((b: { _id: string }) => b._id === _id);

  const dispatch = useDispatch();
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
