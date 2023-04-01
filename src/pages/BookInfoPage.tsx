import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBookById } from "../store/books/selectors";
import useFavourites from "../hooks/useFavourites";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import useCart from "../hooks/useCart";
import CartIcon from "../assets/icons/CartIcon";
import { booksAPI } from "../services/api.service";

const BookInfoPage = () => {
  const params = useParams();
  const id = params?.id ? params?.id : "";
  // const currentBook = useSelector(getBookById(id));

  const { data } = booksAPI.useFetchAllBooksQuery("");
  const books = data?.books;
  const currentBook = books?.find((b: { _id: string }) => b._id === id);

  const { toggleFavouritesButton, isFavourite } = useFavourites(id);
  const { toggleCartButton, isInCart } = useCart(id);

  return (
    <>
      <div className="flex md:justify-around max-md:justify-evenly flex-wrap">
        <div className="self-center">
          <img src={currentBook?.cover} width={250} />
        </div>
        <div className="flex flex-col md:w-1/2 gap-4 p-4">
          <div>{currentBook?.author}</div>
          <div className="text-xl font-bold">{currentBook?.title}</div>

          <div className="text-xl font-bold">{currentBook?.price}</div>
          <div>
            <h1>Описание:</h1>
            <p className="text-sm italic">{currentBook?.description}</p>{" "}
          </div>
          <div className="flex justify-between">
            <div
              className="hover:bg-gray-100 rounded-full cursor-pointer"
              onClick={() => toggleFavouritesButton()}
            >
              <FavouriteIcon color={isFavourite ? "#ffc0cb" : "#452400"} />
            </div>
            <div
              className="hover:bg-gray-100 p-1 rounded-full cursor-pointer"
              onClick={() => toggleCartButton()}
            >
              <CartIcon color={isInCart ? "#ffc0cb" : "#452400"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfoPage;
