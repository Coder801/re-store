import React from "react";
import { Header, Table, Button } from "semantic-ui-react";
import { connect } from "react-redux";

const CardRow = ({ item, actions }) => {
  const { id, title, count, total } = item;
  const { onIncrease, onDecrease, onDelete } = actions;

  return (
    <Table.Row textAlign="center">
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell textAlign="left">{title}</Table.Cell>
      <Table.Cell>{count}</Table.Cell>
      <Table.Cell>{total}</Table.Cell>
      <Table.Cell>
        <Button onClick={() => onIncrease(id)} color="green" icon="plus" />
        <Button onClick={() => onDecrease(id)} color="yellow" icon="minus" />
        <Button onClick={() => onDelete(id)} color="red" icon="trash" />
      </Table.Cell>
    </Table.Row>
  );
};

const ShoppingCard = ({ total, items, ...actions }) => {
  return (
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
        {items.map(item => {
          return <CardRow key={item.id} item={item} actions={actions} />;
        })}
        <Table.Row>
          <Table.Cell colSpan="4"></Table.Cell>
          <Table.Cell colSpan="5" textAlign="center">
            <Header as="h3" content={`Total: ${total}`} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const mapStateToProps = ({ cardItems, orderTotal }) => ({
  items: cardItems,
  total: orderTotal
});

const mapDispatchToProps = () => {
  return {
    onIncrease: id => {
      console.log(`Increase ${id}`);
    },
    onDecrease: id => {
      console.log(`Decrease ${id}`);
    },
    onDelete: id => {
      console.log(`Delete ${id}`);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);
