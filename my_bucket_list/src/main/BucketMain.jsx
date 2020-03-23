import React, { Component } from "react";
import BucketList from "./BucketList";
import BucketInsert from "./BucketInsert";

const BUC_MAIN_URL = "http://localhost:5000/buc";
const BUC_INSERT_URL = "http://localhost:5000/buc/insert";

class BucketMain extends Component {
  timer = "";
  state = {
    isFetch: false,
    bucList: []
  };

  componentDidMount() {
    this.fetchBucList();
    this.timer = setInterval(() => this.fetchBucList(), 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  /*
  BBs 서버에서 리스트를 조회하여 오는 method
  */
  fetchBucList = () => {
    this.setState({ ...this.state, isFetch: true });

    // ES6 js에 새로운 Ajax method가 있는데
    // 새로운 method를 사용해서 데이터를 조회해 오기
    fetch(BUC_MAIN_URL)
      .then(response => {
        // (문자열형으로 리턴된) 가져온 데이터를 json type으로
        // 변환하여 return 다음의 then result 변수에 주입이 된다
        return response.json();
      })
      .then(result => {
        this.setState({
          bucList: result,
          isFetch: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    /*
      state에 선언된 변수를 사용하려면
      {this.state.bbsList} 와 같이 사용해야 하는데

      필드영역에 선언된 this.state를 분해하여 그중에 bbsList를 별도로 추출을 해두면
      tag 코드에서 사용할때 {bbsList} 형식으로 사용할수 있다
      */
    const { bbsList } = this.state;
    return (
      <div className="w3-container">
        <header className="w3-green w3-padding-32 w3-center">
          <h2>버켓리스트</h2>
        </header>
        <section className="w3-container">
          <p className="w3-container w3-gray">
            {this.state.isFetch ? "데이터 가져오는중...." : "완료"}
          </p>
          <BucketInsert buc_insert_url={BUC_MAIN_URL} />
          <BucketList bucList={bucList} buc_main_url={BUC_MAIN_URL} />
        </section>
      </div>
    );
  }
}

export default BucketMain;
