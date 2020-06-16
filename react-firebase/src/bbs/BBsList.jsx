import React, { Component } from "react";
import { database } from "../config/firebaseConfig";

class BBsList extends Component {
  state = {
    bbsList: [],
  };

  // db 읽어와서 List에 뿌려줄 LifeCycle method
  componentDidMount() {
    const resultList = [];
    database
      .ref("bbs")
      .once("value")
      .then((result) => {
        result.forEach((item) => {
          resultList.push(item.val());
        });
      });
    this.setState({ bbsList: [...resultList] });
  }

  render() {
    const bbsMap = this.state.bbsList.map((bbs) => {
      return <p>{bbs.b_title}</p>;
    });
    return <div>{bbsMap}</div>;
  }
}

export default BBsList;
