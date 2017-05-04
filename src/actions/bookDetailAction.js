import { SELECTED_BOOK } from './../constants/actionTypes';

export default function showBook(book) {
  return {
    type: SELECTED_BOOK,
    book: book
  }
}

