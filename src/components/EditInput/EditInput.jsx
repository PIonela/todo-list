import React, { useState } from "react";
import "./EditInput.css";
import Button from "../Button/Button";

const EditInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleAddTask = () => {
    props.addTodo(inputValue);
    setInputValue("");
  };
  return (
    <div className="task">
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleInputValue}
      />
      <Button buttonText={props.buttonText} clickFunction={handleAddTask} />
    </div>
  );
};

export default EditInput;
