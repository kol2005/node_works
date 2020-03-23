import React, { Component } from "react";
import BucketMain from "./main/BucketMain";

class App extends Component {
  id = 5;
  state = {
    input: "",
    date: "",
    bucList: [
      { id: 0, text: "버킷리스트 1", date: "2020-1-11", checked: true },
      { id: 1, text: "버킷리스트 2", date: "2020-1-11", checked: true },
      { id: 2, text: "버킷리스트 3", date: "2020-1-11", checked: false },
      { id: 3, text: "버킷리스트 4", date: "2020-1-11", checked: false },
      { id: 4, text: "버킷리스트 5", date: "2020-1-11", checked: false }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleCreate = () => {
    const date = new Date();
    //date getmonth에서 월이 0~11번 까지라 +1 해줘서 표시되는 숫자 정상적으로 보이게 하기위함
    const month = date.getMonth() + 1;
    const today = date.getFullYear() + "-" + month + "-" + date.getDate();
    const { input, bucList } = this.state;
    this.setState({
      input: "",
      bucList: bucList.concat({
        id: this.id++,
        text: input,
        date: today,
        checked: false
      })
    });
  };

  handleToggle = id => {
    const { bucList } = this.state;

    const index = bucList.findIndex(buc => buc.id === id);

    const selectBuc = bucList[index];

    const nextBucketList = [...bucList];

    nextBucketList[index] = {
      ...selectBuc,
      checked: !selectBuc.checked
    };

    this.setState({
      bucList: nextBucketList
    });
  };

  handleDelete = id => {
    const { bucList } = this.state;
    this.setState({
      bucList: bucList.filter(buc => buc.id !== id)
    });
  };

  render() {
    const { input, bucList } = this.state;

    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleDelete
    } = this;

    return (
      <div>
        <BucketMain
          input={input}
          bucList={bucList}
          onCreate={handleCreate}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    );
  }
}

export default App;
