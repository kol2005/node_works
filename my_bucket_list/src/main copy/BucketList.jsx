import React, { Component } from "react";
import BucketItem from "./BucketItem";

const BUCKET_MAIN_URL = "http://localhost:5000/buc";
const BUCKET_INSERT_URL = "http://localhost:5000/buc/insert";

class BucketList extends Component {
  timer = "";
  state = {
    isFetch: false,
    bucList: []
  };

  // componentWillMount() {}
  componentDidMount() {
    this.fetchBucList();
    this.timer = setInterval(() => this.fetchBucList(), 5000);
  }
  // componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {
    this.timer = null;
  }

  fetchBucList = () => {
    this.setState({ ...this.state, isFetch: true });
    fetch(BUCKET_MAIN_URL)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          bucList: result,
          isFetch: false
        });
      });
    // .catch(error => console.log(error));
  };

  bucInsertSubmit = ev => {
    ev.preventDefault();

    const { buc_insert_url } = this.props;
    let data = new FormData();
    data.append("b_bucket", this.state.b_bucket);
    fetch(buc_insert_url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        b_bucket: this.state.b_bucket
      })
    })
      .then(response => response.json())
      .catch(e => console.log(e));
  };

  render() {
    const { bucList, onToggle, onDelete } = this.props;
    const bucMaps = bucList.map(({ id, text, date, checked }) => (
      <BucketItem
        id={id}
        text={text}
        date={date}
        checked={checked}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ));
    return (
      <form onSubmit={this.bucInsertSubmit} className="">
        <div>{bucMaps}</div>
        <div className="">
          <input
            value={this.state.b_bucket}
            onChange={this.handleChange}
            className=""
          />
        </div>
        <div className="">
          <button className="" type="submit">
            저장
          </button>
        </div>
      </form>
    );
  }
}

export default BucketList;
