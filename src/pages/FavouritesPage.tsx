import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import { getFavouites } from "../store/books/selectors";
import { useAppSelector } from "../hooks/redux";
import { FC } from "react";

const FavouritesPage: FC = () => {
  const favourites = useAppSelector(getFavouites());

  return (
    <CardWrapper>
      {favourites.length ? (
        favourites.map((b) => <BookCard _id={b._id} key={b._id} book={b} />)
      ) : (
        <span>Добавтье любимые книги в избранное!</span>
      )}
    </CardWrapper>
  );
};

export default FavouritesPage;
