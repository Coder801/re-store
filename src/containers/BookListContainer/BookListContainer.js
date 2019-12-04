import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Error from "../../components/ErrorIndicator";

import BookList from "../../components/BookList";
import { withBookstoreService } from "../../components/hoc";
import { fetchBooks, addBookToCart } from "../../actions";

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {
      books,
      booksLoading,
      booksLoadingError,
      addBookToCart
    } = this.props;

    if (booksLoading) {
      return <BookList loading />;
    }

    if (booksLoadingError) {
      return <Error style={{ margin: "20px auto" }} size={"big"} />;
    }

    if (!booksLoading && !booksLoadingError) {
      return <BookList books={books} addBookToCart={addBookToCart} />;
    }
  }
}

const mapStateToProps = ({
  booklist: { books, booksLoading, booksLoadingError }
}) => ({
  books,
  booksLoading,
  booksLoadingError
});

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch),
  addBookToCart: addBookToCart(dispatch)
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
