import React from "react";

import { BookstoreConsumer } from "../bookstore-service-context";

const withBookstoreService = () => Wrapper => {
  return props => (
    <BookstoreConsumer>
      {bookstoreService => (
        <Wrapper {...props} bookstoreService={bookstoreService} />
      )}
    </BookstoreConsumer>
  );
};

export default withBookstoreService;
