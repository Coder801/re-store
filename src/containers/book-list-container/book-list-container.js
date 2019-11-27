import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "ramda";
import Error from "../../components/error-indicator";

import BookList from "../../components/book-list";
import { withBookstoreService } from "../../components/hoc";
import { fetchBooks } from "../../actions";

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, booksLoading, booksLoadingError } = this.props;

    if (booksLoading) {
      return <BookList loading />;
    }

    if (booksLoadingError) {
      return <Error style={{ margin: "20px auto" }} size={"big"} />;
    }

    if (!booksLoading && !booksLoadingError) {
      return <BookList books={books} />;
    }
  }
}

const mapStateToProps = ({ books, booksLoading, booksLoadingError }) => ({
  books,
  booksLoading,
  booksLoadingError
});

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch)
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
