import { FC, useState, ChangeEvent } from "react";

import SearchIcon from "../assets/icons/Search";
import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import Loader from "../components/Loader";
import { booksAPI } from "../services/api.service";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getCurSearchTerm } from "../store/books/selectors";
import { updateSearchTerm } from "../store/books/slice";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector(getCurSearchTerm());

  const [searchValue, setSearchValue] = useState(searchTerm);

  const {
    data: books,
    isLoading,
    isFetching,
  } = booksAPI.useFetchAllBooksQuery(searchTerm);

  const serchSubmit = () => {
    dispatch(updateSearchTerm(searchValue));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <label className="relative block mb-5 mt-5">
        <span className="sr-only">Поиск</span>

        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon color="#007bff" />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Искать книги..."
          type="text"
          name="search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          className="absolute inset-y-0 right-0 bg-sky-400 bordrere rounded-sm px-10  hover:bg-sky-300"
          onClick={serchSubmit}
        >
          Найти
        </button>
      </label>

      {isFetching ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          {books && (
            <CardWrapper>
              {books.map((b) => (
                <BookCard _id={b._id} key={b._id} book={b} />
              ))}
            </CardWrapper>
          )}
        </>
      )}
    </>
  );
};

export default MainPage;
