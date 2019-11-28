import React from "react";

import BookListContainer from "../containers/BookListContainer";
import ShoppingCard from "../components/ShoppingCard";
import HeaderLayout from "../components/HeaderLayout";
import { Container, Menu, Segment, Card } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Segment vertical>
      <Menu fixed="top" size="large">
        <Container>
          <HeaderLayout />
        </Container>
      </Menu>

      <Container>
        <Card.Group itemsPerRow={4} style={{ padding: "5rem 0em 2rem" }}>
          <BookListContainer />
        </Card.Group>
      </Container>

      <Container>
        <ShoppingCard />
      </Container>
    </Segment>
  );
};

export default HomePage;
