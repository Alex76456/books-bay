import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BookCardType } from "../types/bookCardType";

type DataType = {
  books: BookCardType[];
};

export const booksAPI = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://bookstore-test-7339f-default-rtdb.asia-southeast1.firebasedatabase.app/",
  }),
  // tagTypes: ["Get"],
  endpoints: (build) => ({
    fetchAllBooks: build.query<DataType, any>({
      query: () => ({
        url: `.json`,
      }),
      // providesTags: (result) => ["Get"],
    }),
  }),
});
