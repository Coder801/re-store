import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  books: [],
  booksLoading: true,
  booksLoadingError: null,
  cardItems: [
    {
      id: 1,
      name: "Book 1",
      count: 3,
      total: 150
    },
    {
      id: 2,
      name: "Book 2",
      count: 2,
      total: 100
    }
  ],
  orderTotal: 250
};
const store = createStore(reducer, initialState);

export default store;
