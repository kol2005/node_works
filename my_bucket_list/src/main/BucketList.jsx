import React from "react";
import BucketItem from "./BucketItem";

const BucketList = ({ bucList, buc_main_url }) => {
  const bucMap = bucList.map(buc => {
    return <BucketItem buc={buc} key={buc._id} buc_main_url={buc_main_url} />;
  });
  return (
    <table className="w3-table-all">
      <tr>
        <th>작성일</th>
        <th>버킷리스트</th>
        <th>기한</th>
        <th>완료</th>
        <th> </th>
      </tr>
      {bucMap}
    </table>
  );
};

export default BucketList;
