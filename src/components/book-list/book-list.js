import React, { Fragment } from "react";

import BookListItem from "../book-list-item";

const bookList = books =>
  books.map(book => <BookListItem key={book.id} book={book} />);

const bookListPreloader = count =>
  Array(count)
    .fill(null)
    .map((item, key) => <BookListItem key={key} />);

const BookList = ({ books, loading }) => {
  const content = loading ? bookListPreloader(4) : bookList(books);

  return <Fragment>{content}</Fragment>;
};

export default BookList;
