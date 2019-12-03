import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  INCREASE_BOOK_ITEM,
  DECREASE_BOOK_ITEM,
  ADD_BOOK_ITEM,
  DELETE_BOOK_ITEM
} from "../constants/actionTypes";

const fetchBooksSuccess = newBooks => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: newBooks
});

const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST
});

const fetchBooksFailure = error => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error
});

const increaseBookItem = bookId => ({
  type: INCREASE_BOOK_ITEM,
  payload: bookId
});

const decreaseBookItem = bookId => ({
  type: DECREASE_BOOK_ITEM,
  payload: bookId
});

const deleteBookItem = bookId => ({
  type: DELETE_BOOK_ITEM,
  payload: bookId
});

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(fetchBooksRequest());
  bookstoreService
    .getBooks()
    .then(data => dispatch(fetchBooksSuccess(data)))
    .catch(err => dispatch(fetchBooksFailure(err)));
};

const addBookToCart = dispatch => bookId => {
  dispatch({
    type: ADD_BOOK_ITEM,
    payload: bookId
  });
};

export {
  fetchBooks,
  addBookToCart,
  increaseBookItem,
  decreaseBookItem,
  deleteBookItem
};
