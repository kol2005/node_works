import React from "react";

const TodoForm = ({ value, onCreate, onChange, onKeyPress }) => {
  return (
    <div>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}></input>
      <div onClick={onCreate}>추가</div>
    </div>
  );
};

export default TodoForm;
