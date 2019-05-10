import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Context from "./context";

import Main from "./Main";
import Add from "./Add";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ text: "first todo" }, { text: "second todo" }]
    };
  }

  addTodo = todoText => {
    const newTodos = [...this.state.todos, { text: todoText }];
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          todos: this.state.todos,
          addTodo: this.addTodo
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/add" component={Add} />
            <Redirect from="*" to={"/"} />
          </Switch>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
