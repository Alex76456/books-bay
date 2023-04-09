import * as React from "react";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import useCart from "../hooks/useCart";
import useFavourites from "../hooks/useFavourites";
import NavigateWrapper from "./NavigateWrapper";
import { booksAPI } from "../services/api.service";
import { BookCardType } from "../types/bookCardType";

const BookCartCard = ({ _id, book }: { _id: string; book: BookCardType }) => {
  const { toggleCartButton } = useCart(_id, book);
  const { isFavourite, toggleFavouritesButton } = useFavourites(_id, book);

  return (
    <>
      <div className="flex justify-between m-3">
        <NavigateWrapper path={`../book/${_id}`}>
          <div className="flex gap-2">
            {/* <img src={currentBook?.cover} width={100} /> */}

            <img
              src={
                book?.cover
                  ? `https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`
                  : `https://missefficiency.nl/contents/media/l_naslagwerk_20171107144603.jpg`
              }
              width={100}
              alt="book"
            />
            <div className="flex flex-col">
              <span>{book?.author}</span>
              <span>{book?.title}</span>
              {/* <span>{currentBook?.price}</span> */}
            </div>
          </div>
        </NavigateWrapper>
        <div className="flex flex-col justify-between">
          <span
            className="text-[25px] text-center hover:bg-gray-100 p-1 rounded-full cursor-pointer"
            onClick={toggleCartButton}
          >
            &#10006;
          </span>
          <div
            onClick={toggleFavouritesButton}
            className="hover:bg-gray-100 p-1 rounded-full cursor-pointer"
          >
            <FavouriteIcon color={isFavourite ? "#ffc0cb" : "#452400"} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BookCartCard;
