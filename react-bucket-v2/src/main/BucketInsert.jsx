import React, { Component } from "react";

class BucketInsert extends Component {
  // input box를 사용하는 컴포넌트에서
  // 사용자가 입력한 문자열을 임시로 담고 있을 변수 선언
  state = {
    bucket_title: ""
  };

  /*
현재 컴포넌트에 선언된 state.bucket_title 변수에 사용자의
입력 문자열을 담는 역할을 수행
단, 여기에 문자열을 담는다 해도
다른 컴포넌트에 문자열이 전파되지는 않는다
  */
  handleonChange = event => {
    this.setState({
      // state 변수명을 직접 지정
      bucket_title: event.target.value,
      // input box에 name 속성으로 지정된 문자열을 사용하여 변수명 지정
      // 현재 컴포넌트에 input box에 여러개 있을때
      // 한개의 onChange 이벤트 핸들러만 선언하여
      // 공통으로 사용하기 위한 방법
      [event.target.name]: event.target.value
    });
  };

  /* input box에서 문자열을 입력하는 중 enter 키를 누르면
  BucketMain에서 전달받은 이벤트 핸들러에게 state.bucket_title 변수값을
  전달하여 전체 컴포넌트가 바라보고 있는 배열에 추가하도록 수행하자
  */
  handleOnKeyPress = ev => {
    const { bucket_title } = this.state;
    const { bucket_add } = this.props;
    if (ev.key === "Enter") {
      if (bucket_title === "") {
        alert("버킷을 입력한 후 Enter를 누르세요");
        return false;
      }
      // bucket_add(this.state.bucket_title); // 정형적
      bucket_add(bucket_title); // 비정형적, 비구조적, 분해후 독립변수로 사용
      this.setState({
        bucket_title: ""
      });
    }
  };

  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          {/* 
            input box 처리 방법
            1. 컴포넌트 자체에서 input box의 value로 지정할 state 변수 선언
            2. value 속성에 state 변수를 지정
            3. 사용자의 입력을 받아서 state 변수에 저장할수 있도록
            == input box는 read only 상태로 변한다
                onChange 이벤트 핸들러를 만든다
             */}
          <input
            value={this.state.bucket_title}
            onChange={this.handleonChange}
            onKeyPress={this.handleOnKeyPress}
            name="bucket_title"
            className="w3-input w3-border w3-hover-pink w3-round"
            placeholder="버킷에 추가할 내용을 입력하세요"
          />
        </div>
      </section>
    );
  }
}

export default BucketInsert;
