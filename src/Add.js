import React, { Component } from "react";

import "./Add.css";

import { withRouter } from "react-router-dom";

import { Button, Form, Input } from "reactstrap";

import Context from "./context";

class Add extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        <div className="heading">Add a New TODO</div>
        <div className="add-form">
          <Form>
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <Input
                type="text"
                placeholder="Enter a new TODO"
                value={this.state.value}
                onChange={e => {
                  this.setState({
                    value: e.target.value
                  });
                }}
              />
            </div>
            <Button
              color="primary"
              type="submit"
              style={{ marginRight: "20px" }}
              onClick={e => {
                e.preventDefault();
                this.context.addTodo(this.state.value);
                this.setState({
                  value: ""
                });
              }}
            >
              Add TODO
            </Button>
            <Button
              color="success"
              style={{ marginRight: "20px" }}
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              BACK
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Add);
