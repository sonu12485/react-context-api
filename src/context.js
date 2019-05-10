import React from "react";

export default React.createContext({
  todos: [{ text: "first todo" }, { text: "second todo" }],
  addTodo: todoText => {}
});
