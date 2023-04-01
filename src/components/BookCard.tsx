import { useSelector } from "react-redux";
import CartIcon from "../assets/icons/CartIcon";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import useCart from "../hooks/useCart";
import useFavourites from "../hooks/useFavourites";
import { getBookById } from "../store/books/selectors";
import NavigateWrapper from "./NavigateWrapper";
import { booksAPI } from "../services/api.service";

const BookCard = ({ _id }: { _id: string }) => {
  // console.log("_id", _id);

  const { data } = booksAPI.useFetchAllBooksQuery("");
  const books = data?.books;
  const currentBook = books?.find((b: { _id: string }) => b._id === _id);

  // const currentBook = useSelector(getBookById(_id));
  const { toggleCartButton, isInCart } = useCart(_id);
  const { isFavourite, toggleFavouritesButton } = useFavourites(_id);

  console.log("currentBook", currentBook);

  return currentBook ? (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-2 m-2 w-[300px]  flex flex-col items-center   rounded-xl">
      <div className="bc-light w-full h-[250px] flex justify-center items-center rounded-t-xl">
        <NavigateWrapper path={`../book/${_id}`}>
          <img src={currentBook.cover} width={150} height="auto" />
        </NavigateWrapper>
      </div>
      <NavigateWrapper path={`book/${_id}`}>
        <div className="flex flex-col word-break ">
          <span className="color-brown">{currentBook.author}</span>
          <span className="color-dark font-semibold">{currentBook.title}</span>
        </div>
      </NavigateWrapper>
      <div className="max-w-[250px] flex justify-between w-full items-center">
        <span>{currentBook.price}</span>
        <div className="flex items-center">
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
  ) : (
    <h1>Книга не найдена</h1>
  );
};

export default BookCard;
