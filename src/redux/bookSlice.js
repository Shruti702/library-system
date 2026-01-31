import { createSlice } from '@reduxjs/toolkit';
import { dummyBooks } from '../utils/mockData';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: dummyBooks, // Initialized with dummy data.
  },
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload); //Added new book to state .
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;