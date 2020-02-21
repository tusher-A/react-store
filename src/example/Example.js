import React from "react";
import GlobalStore from "../react-store";
import load from "./load/Load";
import Todo from "./todo";

const Example = () => {
  return (
    <GlobalStore load={load}>
      <h3>Todo app</h3>
      <Todo />
    </GlobalStore>
  );
};

export default Example;
