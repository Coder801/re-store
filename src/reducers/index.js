import {
  BOOKS_REQUESTED,
  BOOKS_LOADED,
  BOOKS_REQUEST_ERROR
} from "../constants/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case BOOKS_REQUESTED:
      return {
        books: [],
        booksLoading: true,
        booksLoadingError: null
      };

    case BOOKS_LOADED:
      return {
        books: action.payload,
        booksLoading: false,
        booksLoadingError: null
      };

    case BOOKS_REQUEST_ERROR:
      return {
        books: [],
        booksLoading: false,
        booksLoadingError: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
