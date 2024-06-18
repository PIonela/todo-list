import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";

const Card = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  console.log(todos);
  return (
    <div className="card">
      <h1>Get Things Done!</h1>
      <Input
        placeholderText="What is the task?"
        buttonText="Add Task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) => (
        <Todo todoText={todo} key={index} />
      ))}
    </div>
  );
};

export default Card;
