import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import { getFavouites } from "../store/books/selectors";
import { booksAPI } from "../services/api.service";
import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const { books } = booksAPI.useFetchAllBooksQuery("", {
    selectFromResult: ({ data }) => ({
      books: data?.books,
    }),
  });

  const favourites = useAppSelector(getFavouites());

  return (
    <CardWrapper>
      {favourites.length ? (
        books?.map(
          (b) =>
            favourites.includes(b._id) && <BookCard _id={b._id} key={b._id} />
        )
      ) : (
        <span>Добавтье любимые книги в избранное!</span>
      )}
    </CardWrapper>
  );
};

export default FavouritesPage;
