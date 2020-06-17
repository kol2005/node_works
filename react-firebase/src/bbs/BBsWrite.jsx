import React, { Component } from "react";
import { database } from "../config/firebaseConfig";
import moment from "moment";

class BBsWrite extends Component {
  state = {
    seq: "",
    b_write: "",
    b_title: "",
    b_text: "",
  };

  bbsUpdate = () => {
    console.log("update");
  };

  bbsInsert = () => {
    var newKey = this.state.seq;

    if (!newKey) {
      newKey = database.ref().child("bbs").push().key;
    }

    database
      .ref("bbs/" + newKey)
      .set({
        seq: newKey,
        b_date: moment().format("YYYY-MM-DD"),
        b_time: moment().format("HH:mm:ss"),
        b_title: this.state.b_title,
        b_write: this.state.b_write,
        b_text: this.state.b_text,
      })
      .then(() => {
        // 데잍 저장이 완료되면 처음 화면으로 점프하기
        // react-router로 감싸진 경우 this.props.history 객체를 통해 원하는 path로 redirect 할 수 있다
        this.props.history.push("/");
      });
  };

  componentDidMount() {
    this.bbsItemFetch();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  bbsItemFetch = () => {
    // 만약 ...bbsid값이 undefined이면 0을 id에 저장하고
    // 그렇지 않으면 그 문자열을 id에 저장하라
    const seq = this.props.match.params.seq;
    if (!seq) return;
    database
      .ref("bbs/" + seq)
      .once("value")
      .then((result) => {
        console.log(result);
        let bbsVO = result.val();
        this.setState({
          seq: bbsVO.seq,
          b_title: bbsVO.b_title,
          b_write: bbsVO.bwrite,
          b_text: bbsVO.b_text,
        });
      });
  };

  // input box에 데이터를 입력할 수 있도록 event 설정
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container-fluid p-3">
        <div className="form-group">
          <input
            class="form-control"
            onChange={this.handleOnChange}
            value={this.state.b_write}
            name="b_write"
            placeholder="작성자"
          />
        </div>
        <div className="form-group">
          <input
            class="form-control"
            onChange={this.handleOnChange}
            value={this.state.b_title}
            name="b_title"
            placeholder="제목"
          />
        </div>
        <div className="form-group">
          <input
            class="form-control"
            onChange={this.handleOnChange}
            value={this.state.b_text}
            name="b_text"
            placeholder="내용"
          />
        </div>
        <div className="button-group text-right">
          <button
            type="button"
            onClick={this.bbsInsert}
            className="btn btn-primary"
          >
            저장
          </button>
        </div>
      </div>
    );
  }
}

export default BBsWrite;
