import React, { Component } from "react";

import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import { BookstoreProvider } from "../bookstore-service-context";

import BookstoreService from "../../services";

export default class App extends Component {
  bookstoreService = new BookstoreService();
  render() {
    return (
      <BookstoreProvider value={this.bookstoreService}>
        <ErrorBoundary>
          <div>
            <ErrorIndicator />
            <h2>Hello!</h2>
          </div>
        </ErrorBoundary>
      </BookstoreProvider>
    );
  }
}
