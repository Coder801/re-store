import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  books: [],
  booksLoading: true,
  booksLoadingError: null,
  cardItems: [],
  orderTotal: 250
};
const store = createStore(reducer, initialState);

export default store;
