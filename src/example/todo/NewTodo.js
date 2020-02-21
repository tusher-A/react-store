import React, { useState } from "react";
import { useStore } from "../../react-store";

const NewTodo = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useStore();

  return (
    <div>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "ADD", payload: value });
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default NewTodo;
