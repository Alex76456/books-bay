import { BookCardType } from "../types/bookCardType";

export const toggleCardsLocalStorage = (card: BookCardType, key: string) => {
  const prevState = JSON.parse(localStorage.getItem(key) || "[]");
  const newState = prevState.some((el: BookCardType) => el._id === card._id)
    ? prevState.filter((item: string) => item !== card._id)
    : [...prevState, card];
  localStorage.setItem(key, JSON.stringify(newState));
};
