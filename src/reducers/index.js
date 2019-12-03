import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOKSITEM_SUCCESS
} from "../constants/actionTypes";

const setOrUpdateItem = (array, item, existItem = {}) => {
  const { id = item.id, title = item.title, count = 0, total = 0 } = existItem;

  const newItem = {
    id,
    title,
    count: count + 1,
    total: total + item.price
  };

  return [...array, newItem];
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        booksLoading: true,
        booksLoadingError: null
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        booksLoading: false,
        booksLoadingError: null
      };

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        booksLoading: false,
        booksLoadingError: action.payload
      };

    case ADD_BOOKSITEM_SUCCESS: {
      const bookId = action.payload;
      const { books, cardItems } = state;
      const book = books.find(({ id }) => bookId === id);
      const bookInCard = cardItems.find(({ id }) => bookId === id);

      console.log(book);

      return {
        ...state,
        cardItems: setOrUpdateItem(cardItems, book, bookInCard)
      };
    }

    default:
      return state;
  }
};

export default reducer;
