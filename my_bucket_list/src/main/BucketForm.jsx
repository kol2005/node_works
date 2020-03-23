import React from "react";
import "./BucketForm.css";

const BucketForm = ({ value, onCreate, onChange, onKeyPress }) => {
  return (
    <div className="form">
      <input
        id="item"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="buc-insert" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default BucketForm;
