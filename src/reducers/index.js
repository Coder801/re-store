import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  INCREASE_BOOK_ITEM,
  DECREASE_BOOK_ITEM,
  DELETE_BOOK_ITEM,
  ADD_BOOK_ITEM
} from "../constants/actionTypes";

const updateItemCount = (array, id, operand = 1) =>
  array.map(item => {
    const { count, price } = item;
    const updatedCount = count + operand;

    return item.id === id
      ? { ...item, count: updatedCount, total: price * updatedCount }
      : item;
  });

const deteteItem = (array, id) => array.filter(item => item.id !== id);

const addItem = (array, item) => {
  const { id, title, price } = item;
  return [
    ...array,
    {
      id,
      title,
      price,
      total: price,
      count: 1
    }
  ];
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

    case ADD_BOOK_ITEM: {
      const bookId = action.payload;
      const { books, cardItems } = state;
      const book = books.find(({ id }) => bookId === id);
      const bookInCard = cardItems.find(({ id }) => bookId === id);

      return {
        ...state,
        cardItems: bookInCard
          ? updateItemCount(cardItems, bookId)
          : addItem(cardItems, book)
      };
    }

    case INCREASE_BOOK_ITEM: {
      const bookId = action.payload;
      const { cardItems } = state;

      return {
        ...state,
        cardItems: updateItemCount(cardItems, bookId)
      };
    }

    case DECREASE_BOOK_ITEM: {
      const bookId = action.payload;
      const { cardItems } = state;
      const bookInCard = cardItems.find(({ id }) => bookId === id);

      return {
        ...state,
        cardItems:
          bookInCard.count >= 2
            ? updateItemCount(cardItems, bookId, -1)
            : deteteItem(cardItems, bookId)
      };
    }

    case DELETE_BOOK_ITEM: {
      const bookId = action.payload;
      const { cardItems } = state;

      return {
        ...state,
        cardItems: deteteItem(cardItems, bookId)
      };
    }

    default:
      return state;
  }
};

export default reducer;
