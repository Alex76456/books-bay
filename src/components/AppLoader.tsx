import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooksData } from "../store/books/actions";
import { getFavouites, getIsLoading } from "../store/books/selectors";
import { AppDispatch } from "../store/rootReducer";
import Loader from "./Loader";
import { booksAPI } from "../services/api.service";

const AppLoader = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  // const dispatch = useDispatch<AppDispatch>();
  // const isLoading = useSelector(getIsLoading());

  // React.useEffect(() => {
  //   dispatch(loadBooksData());
  // }, []);

  const { isLoading } = booksAPI.useFetchAllBooksQuery("");

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default AppLoader;
