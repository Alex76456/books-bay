import { createAsyncThunk } from "@reduxjs/toolkit";
import { booksService } from "../../services/books.service";
// import { booksService } from "../../services/books.service";

export const loadBooksData = createAsyncThunk(
  "books/loadBooks",
  async (_: void, thunkApi) => {
    try {
      const content = await booksService.getAllBooks();
      return content;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
