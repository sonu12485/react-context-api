import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./Main";
import Add from "./Add";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/add" component={Add} />
          <Redirect from="*" to={"/"} />
        </Switch>
      </Router>
    );
  }
}

export default App;
