import { ErrorType } from "./errorType";
import { BookCardType } from "./bookCardType";
export type StateType = {
  isLoading: boolean;
  books: BookCardType[] | null;
  cart: string[];
  favourites: string[];
  errors: ErrorType | null;
};
