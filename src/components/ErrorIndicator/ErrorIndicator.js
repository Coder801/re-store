import React from "react";
import { Message } from "semantic-ui-react";

const ErrorIndicator = ({ style, size }) => {
  return (
    <Message style={style} negative size={size}>
      <Message.Header>We're sorry we can't apply that discount</Message.Header>
      <p>That offer has expired</p>
    </Message>
  );
};

export default ErrorIndicator;
