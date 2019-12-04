import {
  INCREASE_BOOK_ITEM,
  DECREASE_BOOK_ITEM,
  DELETE_BOOK_ITEM,
  ADD_BOOK_ITEM
} from "../constants/actionTypes";

const countOrderTotal = (array = []) =>
  array.reduce((orderTotal, { total }) => (orderTotal += total), 0);

const updateItemCount = (array, id, quantity = 1) => {
  const updateCardItems = array.map(item => {
    const { count, price } = item;
    const updatedCount = count + quantity;
    const updatePrice = price * updatedCount;

    return item.id === id
      ? { ...item, count: updatedCount, total: updatePrice }
      : item;
  });

  return {
    orderTotal: countOrderTotal(updateCardItems),
    cardItems: updateCardItems
  };
};

const deteteItem = (array, id) => {
  const updateCardItems = array.filter(item => item.id !== id);

  return {
    orderTotal: countOrderTotal(updateCardItems),
    cardItems: updateCardItems
  };
};

const addItem = (array, item) => {
  const { id, title, price } = item;

  const newItem = {
    id,
    title,
    price,
    total: price,
    count: 1
  };
  const updateCardItems = [...array, newItem];

  return {
    orderTotal: countOrderTotal(updateCardItems),
    cardItems: updateCardItems
  };
};

const updateShopingCard = (state, action) => {
  if (state === undefined) {
    return {
      cardItems: [],
      orderTotal: 0
    };
  }

  switch (action.type) {
    case ADD_BOOK_ITEM: {
      const bookId = action.payload;
      const { books } = state.booklist;
      const { cardItems } = state.shopingCard;
      const book = books.find(({ id }) => bookId === id);
      const bookInCard = cardItems.find(({ id }) => bookId === id);

      return bookInCard
        ? updateItemCount(cardItems, bookId)
        : addItem(cardItems, book);
    }

    case INCREASE_BOOK_ITEM: {
      const bookId = action.payload;
      const { cardItems } = state.shopingCard;

      return updateItemCount(cardItems, bookId);
    }

    case DECREASE_BOOK_ITEM: {
      const bookId = action.payload;
      const { cardItems } = state.shopingCard;
      const bookInCard = cardItems.find(({ id }) => bookId === id);

      return bookInCard.count >= 2
        ? updateItemCount(cardItems, bookId, -1)
        : deteteItem(cardItems, bookId);
    }

    case DELETE_BOOK_ITEM: {
      const bookId = action.payload;
      const { cardItems } = state.shopingCard;

      return deteteItem(cardItems, bookId);
    }

    default:
      return state.shopingCard;
  }
};

export default updateShopingCard;
