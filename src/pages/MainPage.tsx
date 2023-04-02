import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import Loader from "../components/Loader";
import { booksAPI } from "../services/api.service";

const MainPage = () => {
  const { data: books, isLoading } = booksAPI.useFetchAllBooksQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {books && (
        <CardWrapper>
          {books.map((b) => (
            <BookCard _id={b._id} key={b._id} />
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default MainPage;
