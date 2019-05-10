import React, { Component } from "react";
import "./Main.css";

import { withRouter } from "react-router-dom";

import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";

class Main extends Component {
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
      </div>
    );
  }
}

export default withRouter(Main);
