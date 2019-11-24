import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import { BookstoreProvider } from "./components/bookstore-service-context";

import store from "./store";
import BookstoreService from "./services";

import "semantic-ui-css/semantic.min.css";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreProvider value={bookstoreService}>
        <App />
      </BookstoreProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
