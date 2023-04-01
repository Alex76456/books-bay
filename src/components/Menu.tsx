import * as React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "../assets/icons/CartIcon";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import NavigateWrapper from "./NavigateWrapper";
import { getCart, getFavouites } from "../store/books/selectors";
import { useAppSelector } from "../hooks/redux";

const Menu = () => {
  const favourites = useAppSelector(getFavouites());
  const cart = useAppSelector(getCart());

  return (
    <div className="flex justify-between p-5 mb-2 items-center bg-sky-300">
      <NavigateWrapper path="/">
        <p className="text-xl font-bold">Books Bay</p>
      </NavigateWrapper>
      <div className="flex gap-3 items-center">
        <NavigateWrapper path="/favourites">
          <div className="flex gap-3 items-center">
            <FavouriteIcon color="#452400" />
            <p>favourites</p>

            <p>{favourites.length}</p>
          </div>
        </NavigateWrapper>
        <NavigateWrapper path="/cart">
          <div className="flex gap-3 items-center">
            <CartIcon color="#452400" />

            <p>buy</p>

            <p>{cart.length}</p>
          </div>
        </NavigateWrapper>
      </div>
    </div>
  );
};

export default Menu;
