import React, { Component } from "react";

class BucketItem extends Component {
  state = {
    isEditing: false,
    b_bucket: "",
    b_checked: true
  };

  inputClick = ev => {
    ev.stopPropagation();
  };

  toggleEdit = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  };

  handleToggle = ev => {
    if (window.confirm("완료하셨습니까?")) {
      const { buc, buc_main_url } = this.props;
      this.setState({ b_checked: !this.state.b_checked });
      const data = { _id: buc._id, b_checked: this.state.b_checked };
      fetch(buc_main_url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
    // 상위로 이벤트 버블링(전파) 금지
    ev.stopPropagation();
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
    const { buc, checked } = this.props;

    if (this.state.isEditing) {
    }
    return (
      <tr data-id={buc._id} className="tr-buc-list">
        <td className={`buc-date ${buc.b_checked ? "checked" : ""}`}>
          {buc.b_date}
        </td>
        <td
          onClick={this.toggleEdit}
          className={`buc-bucket ${buc.b_checked ? "checked" : ""}`}
        >
          {this.state.isEditing ? (
            <div>
              <input
                value={this.state.b_bucket}
                onClick={this.inputClick}
                onChange={this.editInput}
              />
              <button
                type="button"
                className="w3-button w3-white w3-border w3-border-red w3-round-large"
                onClick={this.updateHandle}
              >
                수정
              </button>
            </div>
          ) : (
            <span>{buc.b_bucket}</span>
          )}
        </td>
        <td className={`buc-limitdate ${buc.b_checked ? "checked" : ""}`}>
          {buc.b_limitdate}
        </td>
        <td onClick={this.handleToggle}>{buc.b_checked ? "YES" : "NO"}</td>

        <td>
          <button
            type="button"
            onClick={this.deleteHandle}
            className="w3-button w3-white w3-border w3-border-red w3-round-large"
          >
            삭제
          </button>
        </td>
      </tr>
    );
  }
}

export default BucketItem;
