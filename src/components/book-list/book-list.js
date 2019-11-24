import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "ramda";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { Instagram, List } from "react-content-loader";
import Error from "../error-indicator";

import BookListItem from "../book-list-item";
import { withBookstoreService } from "../hoc";
import {
  booksLoaded,
  booksRequested,
  booksRequestedError
} from "../../actions";

const bookList = books =>
  books.map(item => <BookCard key={item.id} data={item} />);

const bookListPlaceholder = count =>
  new Array(count).fill(
    <Card style={{ padding: "1rem" }}>
      <Instagram />
      <List />
    </Card>
  );

const BookCard = books => {
  const { id, title, description, price, image } = books.data;

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description style={{ padding: "0 0 1rem 0" }}>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span
          style={{
            padding: "0.7rem 0",
            display: "inline-block",
            fontSize: "1.5rem",
            color: "black"
          }}
        >
          <Icon name="dollar" />
          {price}
        </span>
        <Button
          id={id}
          color="blue"
          floated="right"
          size="large"
          content="Add"
        />
      </Card.Content>
    </Card>
  );
};

class BookList extends Component {
  listPlaceholder() {
    return;
  }

  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksRequestedError
    } = this.props;

    booksRequested();
    bookstoreService
      .getBooks()
      .then(data => booksLoaded(data))
      .catch(err => booksRequestedError(err));
  }

  render() {
    const { books, booksLoading, booksLoadingError } = this.props;

    if (booksLoading) {
      return <Fragment>{bookListPlaceholder(4)}</Fragment>;
    }

    if (booksLoadingError) {
      return <Error style={{ margin: "20px auto" }} size={"big"} />;
    }

    if (!booksLoading && !booksLoadingError) {
      return <Fragment>{bookList(books)}</Fragment>;
    }
  }
}

const mapStateToProps = ({ books, booksLoading, booksLoadingError }) => ({
  books,
  booksLoading,
  booksLoadingError
});

const mapDispatchToProps = { booksLoaded, booksRequested, booksRequestedError };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
