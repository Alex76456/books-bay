import * as React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import BookInfoPage from "./pages/BookInfoPage";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";
import MainPage from "./pages/MainPage";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/favourites",
      element: <FavouritesPage />,
    },
    {
      path: "/book",
      children: [
        {
          path: ":id",
          element: <BookInfoPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];
  return useRoutes(routes);
};

export default Routes;
