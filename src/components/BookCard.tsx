import { FC } from "react";
import CartIcon from "../assets/icons/CartIcon";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import useCart from "../hooks/useCart";
import useFavourites from "../hooks/useFavourites";
import NavigateWrapper from "./NavigateWrapper";
import { booksAPI } from "../services/api.service";
import { useAppSelector } from "../hooks/redux";
import { RootState } from "../store/store";
import { BookCardType } from "../types/bookCardType";

type IBookCardProps = { _id: string; book: BookCardType };

const BookCard: FC<IBookCardProps> = ({ _id, book }) => {
  const { toggleCartButton, isInCart } = useCart(_id, book);
  const { isFavourite, toggleFavouritesButton } = useFavourites(_id, book);

  return book ? (
    <NavigateWrapper path={`../book/${_id}`}>
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-2 m-2 w-[300px]  flex flex-col items-center   rounded-xl">
        <div className="bc-light w-full h-[250px] flex justify-center items-center rounded-t-xl">
          {/* <img src={currentBook.cover} width={150} height="auto" alt="book" /> */}

          <img
            src={
              book.cover
                ? `https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`
                : `https://missefficiency.nl/contents/media/l_naslagwerk_20171107144603.jpg`
            }
            width={150}
            height="auto"
            alt="book"
          />
        </div>
        <div className="flex flex-col word-break ">
          <span className="color-brown">{book.author}</span>
          <span className="color-dark font-semibold">{book.title}</span>
        </div>
        <div className="max-w-[250px] flex justify-between w-full items-center">
          {/* <span>{currentBook.price}</span> */}
          <div className="flex items-center">
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
    </NavigateWrapper>
  ) : (
    <h1>Книга не найдена</h1>
  );
};

export default BookCard;
