import * as React from "react";
import Loader from "./Loader";
import { booksAPI } from "../services/api.service";

const AppLoader = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
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
