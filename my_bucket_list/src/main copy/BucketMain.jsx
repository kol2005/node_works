import React from "react";
import BucketForm from "./BucketForm";
import BucketList from "./BucketList";
import "./BucketMain.css";

const BucketMain = ({
  input,
  bucList,
  onCreate,
  onChange,
  onKeyPress,
  onToggle,
  onDelete
}) => {
  return (
    <main className="bucTemplete">
      <div className="title">버킷리스트</div>
      <div className="form-controller">
        <BucketForm
          value={input}
          onCreate={onCreate}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="buclist-controller">
        <BucketList bucList={bucList} onToggle={onToggle} onDelete={onDelete} />
      </div>
    </main>
  );
};

export default BucketMain;
