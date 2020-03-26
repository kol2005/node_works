import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  id = 0;
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_flag_text: "☆",
        b_start_date: "2020-03-26",
        b_title: "리액트 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancle: false
      }
    ]
  };

  b_flag = ["☆", "★", "○", "●"];

  flagClick = () => {
    // this.setState([bucketList.b_flag : ++this.bucketList.b_flag]);
  };

  /* bucketList에 항목을 추가하여 전체 컴포넌트에 전파될수 있도록 메서드를 선언

  react 선언적 철학1
  기존의 객체(배열)은 원본을 손상시키지 말자
  => 아래와 같은 기능을 구현하지 마라
    객체 배열에 새로운 항목을 추가 :push()
    객체 배열에서 항목을 제거 :  remove()
    객체 배열의 요소중에 어떤 항목을 변경할때 : 객체[0] = 새로운 값
  => 그러면 어떻게?
  새로운 객체를 만들고
    추가 : 기존객체 + 추가된 항목 생성하여 새로운 객체에 복사
    변경 : 기존객체 변경내용만 변경하여 새로운 객체에 복사
  */
  bucket_add = b_title => {
    const { bucketList } = this.state;
    const date = new Date();
    // date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    // b_id 값은 버킷 리스트의 PK값을 갖는 칼럼으로
    // state에 지정된 id값을 1 증가시킴으로써 생성을 하고
    // 리스트의 b_id 칼럼에 값을 저장
    const bucket = {
      //   b_id: ++this.id,
      b_flag: 0,
      b_start_date: date.toString(),
      b_title: b_title,
      b_end_date: date.toString(),
      b_end_check: false,
      b_cancle: false
    };
    this.setState({
      // id가 ++this.id
      // 나머지 요소가 bucket에서 정의한 형태의 객체(vo)를 생성하여
      // 원본의 bucketList에 추가하여 새로운 bucketList를 생성하라
      bucketList: bucketList.concat({ b_id: ++this.id, ...bucket })
    });
  };

  bucket_update = (id, b_title) => {
    const { bucketList } = this.state;

    this.setState({
      // bucketList를 map으로 반복 실행하면서
      // 각 요소의 id값과 매개변수로 받은 id값이 일치하면
      // b_title만 새로운 값으로 변경하여 리턴하라
      bucketList: bucketList.map(bucket =>
        bucket.b_id === id ? { ...bucket, b_title: b_title } : bucket
      )
    });
  };

  // react lifeCycle 메서드
  /*
  만약 현재 Main 컴포넌트에 많은 state변수들이 있을때
  한개라도 state 변수가 변동되면 rendering이 발생을 할텐데
  그러지 말고 state 변수중에서 bucketList만 감시하다가 
  bucketList가 변경되었을때만 화면을 rendering을 하라
  */
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.bucketList !== this.state.bucketList;
  }

  render() {
    return (
      <div>
        <BucketInsert bucket_add={this.bucket_add} />
        <BucketList
          bucket_update={this.bucket_update}
          bucketList={this.state.bucketList}
        />
      </div>
    );
  }
}

export default BucketMain;
