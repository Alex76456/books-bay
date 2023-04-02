import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import { getFavouites } from "../store/books/selectors";
import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const favourites = useAppSelector(getFavouites());

  return (
    <CardWrapper>
      {favourites.length ? (
        favourites.map((b) => <BookCard _id={b._id} key={b._id} />)
      ) : (
        <span>Добавтье любимые книги в избранное!</span>
      )}
    </CardWrapper>
  );
};

export default FavouritesPage;
