export const toggleLocalStorage = (_id: string, key: string) => {
  const prevState = JSON.parse(localStorage.getItem(key) || "[]");
  const newState = prevState.includes(_id)
    ? prevState.filter((item: string) => item !== _id)
    : [...prevState, _id];
  localStorage.setItem(key, JSON.stringify(newState));
};
