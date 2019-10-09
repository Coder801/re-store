import React from "React";

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
