import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Menu, Header, Icon } from "semantic-ui-react";

const HeaderLayout = props => {
  return (
    <Fragment>
      <Menu.Item position="left">
        <Header as="h2">Re Store</Header>
      </Menu.Item>
      <Menu.Item position="right">
        <Header as="h4">
          <Icon name="shopping cart" /> 5 Items ($20)
        </Header>
      </Menu.Item>
    </Fragment>
  );
};

HeaderLayout.propTypes = {};

export default HeaderLayout;
