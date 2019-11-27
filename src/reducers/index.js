import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from "../constants/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        booksLoading: true,
        booksLoadingError: null
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        booksLoading: false,
        booksLoadingError: null
      };

    case FETCH_BOOKS_FAILURE:
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
