import {
  BOOKS_REQUESTED,
  BOOKS_LOADED,
  BOOKS_REQUEST_ERROR
} from "../constants/actionTypes";

const booksLoaded = newBooks => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: BOOKS_REQUESTED
  };
};

const booksRequestedError = error => {
  return {
    type: BOOKS_REQUEST_ERROR,
    payload: error
  };
};

export { booksLoaded, booksRequested, booksRequestedError };
