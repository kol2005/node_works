import React, { Component } from "react";
import "./BucketItem.css";

class BucketItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { id, text, date, checked, onToggle, onDelete } = this.props;
    return (
      <div className="buc-item" onClick={() => onToggle(id)}>
        <div
          className="delete-item"
          onClick={e => {
            e.stopPropagation();
            onDelete(id);
          }}
        >
          &times;
        </div>
        <div className={`buc-text ${checked ? "checked" : ""}`}>{text}</div>
        <div className={`buc-date ${checked ? "checked" : ""}`}>{date}</div>
        {checked && <div className="check-mark">&#x2713;</div>}
      </div>
    );
  }
}

export default BucketItem;
