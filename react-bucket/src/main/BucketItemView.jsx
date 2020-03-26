import React from "react";
import Moment from "react-moment";

const BucketItemView = ({ bucketItem, onEditing }) => {
  const changeEdit = () => {
    onEditing();
  };
  return (
    <React.Fragment>
      <td>{bucketItem.b_flag_text}</td>
      <td>
        <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
      </td>
      <td onClick={changeEdit}>{bucketItem.b_title}</td>
      <td>
        {/* 
          react에서 조건별로 tag를 표시하고자 할때
          {검사값 ? (true 일때) : (false 일때)}
         */}
        {bucketItem.b_end_date !== "" ? (
          <Moment format="YYYY-MM-DD">{bucketItem.b_end_date}</Moment>
        ) : (
          "◎"
        )}
      </td>
      <td>
        <input type="checked" value={bucketItem.b_cancle} />
      </td>
    </React.Fragment>
  );
};

export default BucketItemView;
