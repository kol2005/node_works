import React from "react";
import "./todoMain.css";
import TodoForm from "./todoForm";
import TodoList from "./TodoList";

const todoMain = ({ value }) => {
  return (
    <main className="todoTemplete">
      <div className="title">할일</div>
      <div className="form-controller">
        <TodoForm value={value} />
      </div>
      <div className="todolist-controller">
        <TodoList />
      </div>
    </main>
  );
};

export default todoMain;
