import React, { Component } from "react";
import "./Main.css";

import { withRouter } from "react-router-dom";

import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";

import Context from "./context";

class Main extends Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">TODO list</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                onClick={() => {
                  this.props.history.push("/add");
                }}
              >
                Add TODO
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="todo-list">
          {this.context.todos.map((todo, i) => {
            return (
              <div key={i} className="todo">
                {todo.text}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
