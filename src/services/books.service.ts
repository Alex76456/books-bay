import httpService from "./http.service";

export const booksService = {
  getAllBooks: async () => {
    const { data } = await httpService.get("books");
    return data;
  },
};
