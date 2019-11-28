import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { Instagram, List } from "react-content-loader";

const Placeholder = () => (
  <Card style={{ padding: "1rem" }}>
    <Instagram />
    <List />
  </Card>
);

const Item = ({ book }) => {
  const { id, title, description, price, image } = book;

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

const BookListItem = ({ book }) =>
  book ? <Item book={book} /> : <Placeholder />;

export default BookListItem;
