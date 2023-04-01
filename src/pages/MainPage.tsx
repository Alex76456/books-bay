import * as React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import { getAllBooks } from "../store/books/selectors";
import { booksAPI } from "../services/api.service";

const MainPage = () => {
  // const books = useSelector(getAllBooks());

  const { data } = booksAPI.useFetchAllBooksQuery("");

  const books = data?.books;

  console.log("books", books);

  return (
    <>
      {books && (
        <CardWrapper>
          {books?.map((b) => (
            <BookCard _id={b._id} key={b._id} />
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default MainPage;
