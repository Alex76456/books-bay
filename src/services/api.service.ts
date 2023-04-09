import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BookCardType } from "../types/bookCardType";

export type BookCardFromResponseType = {
  key: string;
  author_name: string[];
  cover_i: number;
  title: string;
};

type DataType = {
  docs: BookCardFromResponseType[];
};

export const booksAPI = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/",
  }),
  endpoints: (build) => ({
    fetchAllBooks: build.query<BookCardType[], string | undefined>({
      query: (str) => ({
        url: `search.json?q=${str}`,
      }),

      transformResponse: (response: DataType, meta, arg) => {
        return response?.docs.map((el) => ({
          _id: el.key.replace(/[/]/g, ""),
          author: el.author_name?.[0] || "",
          cover: el.cover_i,
          title: el.title,
        }));
      },
    }),
  }),
});
