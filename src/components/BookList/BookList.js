import React, { Fragment } from "react";

import BookListItem from "../BookListItem";

const bookList = ({ books, addBookToCart }) =>
  books.map(book => (
    <BookListItem
      key={book.id}
      book={book}
      addBookToCart={() => addBookToCart(book.id)}
    />
  ));

const bookListLoading = count =>
  Array(count)
    .fill(null)
    .map((item, key) => <BookListItem key={key} />);

const BookList = ({ loading, ...bookItem }) => {
  return (
    <Fragment>{loading ? bookListLoading(4) : bookList(bookItem)}</Fragment>
  );
};

export default BookList;
