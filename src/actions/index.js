import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from "../constants/actionTypes";

const fetchBooksSuccess = newBooks => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks
  };
};

const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};

const fetchBooksFailure = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(fetchBooksRequest());
  bookstoreService
    .getBooks()
    .then(data => dispatch(fetchBooksSuccess(data)))
    .catch(err => dispatch(fetchBooksFailure(err)));
};

export { fetchBooks };
