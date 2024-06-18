import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import EditInput from "../EditInput/EditInput";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), todoDesc: todo, isEditing: false }]);
  };
  console.log(todos);
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodoMode = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
    console.log(todos);
  };
  return (
    <div className="card">
      <h1>Get Things Done!</h1>
      <Input
        placeholderText="What is the task?"
        buttonText="Add Task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditInput
            placeholderText="Edit your task?"
            buttonText="Edit Task"
            addTodo={addTodo}
            key={index}
          />
        ) : (
          <Todo
            todoText={todo.todoDesc}
            key={index}
            deleteTask={deleteTodo}
            id={todo.id}
            editTask={editTodoMode}
          />
        )
      )}
    </div>
  );
};

export default Card;
