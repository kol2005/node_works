import React from "react";
import BucketItem from "./BucketItem";

const BucketList = ({ bucList, buc_main_url }) => {
  const bucMap = bucList.map(buc => {
    return <BucketItem buc={buc} key={buc._id} buc_main_url={buc_main_url} />;
  });
  return (
    <table className="w3-table w3-table-all">
      <tr>
        <th>날짜</th>
        <th>시간</th>
        <th colSpan="2">제목</th>
      </tr>
      {bucMap}
    </table>
  );
};

export default BucketList;
