import React from "react";
import { useStore } from "../../react-store";
import NewTodo from "./NewTodo";

const Todo = () => {
  const { state, dispatch } = useStore();
  return (
    <div>
      <NewTodo />
      <ul>
        {state.map(todo => (
          <li
            key={todo}
            onClick={() => dispatch({ type: "DELETE", payload: todo })}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
