import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomePage, CardPage } from "../../pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/card" component={CardPage} />
      </Switch>
    </Router>
  );
};

export default App;
