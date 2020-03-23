import React, { Component } from "react";

class BucketItem extends Component {
  state = {
    isEditing: false,
    b_title: ""
  };

  inputClick = ev => {
    ev.stopPropagation();
  };

  toggleEdit = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  };

  editInput = ev => {
    const { b_bucket } = this.state;
    this.setState({ ...this.state, b_bucket: ev.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { buc } = this.props;
    if (!prevState.isEditing && this.state.isEditing) {
      this.setState({
        b_bucket: buc.b_bucket
      });
    }
  }

  updateHandle = () => {
    const { buc, buc_main_url } = this.props;
    const data = { _id: buc._id, b_bucket: this.state.b_bucket };
    fetch(buc_main_url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  deleteHandle = ev => {
    if (window.confirm("데이터를 삭제할까요?")) {
      const { buc, buc_main_url } = this.props;
      const data = { _id: buc._id };
      fetch(buc_main_url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
    // 상위로 이벤트 버블링(전파) 금지
    ev.stopPropagation();
  };

  render() {
    const { buc } = this.props;
    if (this.state.isEditing) {
    }
    return (
      <tr data-id={buc._id} onClick={this.toggleEdit}>
        <td>{buc.b_date}</td>
        <td>
          {this.state.isEditing ? (
            <div>
              <input
                value={this.state.b_bucket}
                onClick={this.inputClick}
                onChange={this.editInput}
              />
              <button type="button" onClick={this.updateHandle}>
                완료
              </button>
            </div>
          ) : (
            <span>{buc.b_bucket}</span>
          )}
        </td>
        <td>
          <button type="button" onClick={this.deleteHandle}>
            삭제
          </button>
        </td>
      </tr>
    );
  }
}

export default BucketItem;
