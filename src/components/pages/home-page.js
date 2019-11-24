import React from "react";

import BookList from "../book-list";
import Spinner from "../spinner";
import {
  Container,
  Menu,
  Header,
  Segment,
  Table,
  Card,
  Icon,
  Button
} from "semantic-ui-react";

const CardRow = ({ id, title, count, price }) => {
  return (
    <Table.Row textAlign="center">
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell textAlign="left">{title}</Table.Cell>
      <Table.Cell>{count}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell>
        <Button color="green" icon="plus" />
        <Button color="yellow" icon="minus" />
        <Button color="red" icon="trash" />
      </Table.Cell>
    </Table.Row>
  );
};

const HomePage = () => {
  return (
    <Segment vertical>
      <Menu fixed="top" size="large">
        <Container>
          <Menu.Item position="left">
            <Header as="h2">Re Store</Header>
          </Menu.Item>
          <Menu.Item position="right">
            <Header as="h4" content="5 Items ($20)">
              <Icon name="shopping cart" /> 5 Items ($20)
            </Header>
          </Menu.Item>
        </Container>
      </Menu>
      <Container>
        <Card.Group itemsPerRow={4} style={{ padding: "5rem 0em 2rem" }}>
          <BookList />
        </Card.Group>
      </Container>

      <Container>
        <Table celled striped>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1}>#</Table.HeaderCell>
              <Table.HeaderCell width={8} textAlign="left">
                Item
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>Count</Table.HeaderCell>
              <Table.HeaderCell width={1}>Price</Table.HeaderCell>
              <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <CardRow id={1} title={"Initial Commit"} count={3} price={20} />
            <CardRow id={2} title={"Initial Commit"} count={3} price={20} />
            <CardRow id={3} title={"Initial Commit"} count={3} price={20} />
            <Table.Row>
              <Table.Cell colSpan="4"></Table.Cell>
              <Table.Cell colSpan="5" textAlign="center">
                <Header as="h3" content="Total: $200" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </Segment>
  );
};

export default HomePage;
