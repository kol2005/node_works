import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { id, text, checked, onToggle } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="delete-item">&times;</div>
        <div className={`todo-text ${checked ? "checked" : ""}`}>{text}</div>
        {checked && <div className="check-mark">&#x2713;</div>}
      </div>
    );
  }
}

export default TodoItem;
