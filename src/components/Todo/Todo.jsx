import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
  return (
    <div className="todo">
      <p>{props.todoText}</p>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#fff" }} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Todo;
