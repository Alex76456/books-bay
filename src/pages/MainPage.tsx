import * as React from "react";
import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import { booksAPI } from "../services/api.service";

const MainPage = () => {
  const { books } = booksAPI.useFetchAllBooksQuery("", {
    selectFromResult: ({ data }) => ({
      books: data?.books,
    }),
  });

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
