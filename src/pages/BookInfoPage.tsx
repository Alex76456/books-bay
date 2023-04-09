import * as React from "react";
import { useParams } from "react-router-dom";
import useFavourites from "../hooks/useFavourites";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import useCart from "../hooks/useCart";
import CartIcon from "../assets/icons/CartIcon";
import { booksAPI } from "../services/api.service";
import { useAppSelector } from "../hooks/redux";
import { getCurSearchTerm } from "../store/books/selectors";

const BookInfoPage = () => {
  const params = useParams();

  const searchTerm = useAppSelector(getCurSearchTerm());

  const id = params?.id ? params?.id : "";

  const { currentBook } = booksAPI.useFetchAllBooksQuery(searchTerm, {
    selectFromResult: ({ data }) => ({
      currentBook: data?.find((book) => book._id === id),
    }),
  });

  const { toggleFavouritesButton, isFavourite } = useFavourites(
    id,
    currentBook
  );
  const { toggleCartButton, isInCart } = useCart(id, currentBook);

  return (
    <>
      <div className="flex md:justify-around max-md:justify-evenly flex-wrap">
        <div className="self-center">
          {/* <img src={currentBook?.cover} width={250} /> */}

          <img
            src={
              currentBook?.cover
                ? `https://covers.openlibrary.org/b/id/${currentBook.cover}-M.jpg`
                : `https://missefficiency.nl/contents/media/l_naslagwerk_20171107144603.jpg`
            }
            alt="book"
            width={250}
          />
        </div>
        <div className="flex flex-col md:w-1/2 gap-4 p-4">
          <div>{currentBook?.author}</div>
          <div className="text-xl font-bold">{currentBook?.title}</div>

          {/* <div className="text-xl font-bold">{currentBook?.price}</div> */}
          {/* <div>
            <h1>Описание:</h1>
            <p className="text-sm italic">{currentBook?.description}</p>{" "}
          </div> */}
          <div className="flex justify-between">
            <div
              className="hover:bg-gray-100 rounded-full cursor-pointer"
              onClick={toggleFavouritesButton}
            >
              <FavouriteIcon color={isFavourite ? "#ffc0cb" : "#452400"} />
            </div>
            <div
              className="hover:bg-gray-100 p-1 rounded-full cursor-pointer"
              onClick={toggleCartButton}
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
