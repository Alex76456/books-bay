import { BookCardType } from "./bookCardType";

export type StateType = {
  cart: BookCardType[];
  favourites: BookCardType[];
  searchTerm: string;
};
