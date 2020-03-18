import React, { Component } from "react";

// 임의로 작성된 컴포넌트 파일(*.jsx,*.js)을 사용하기 위해서
// 먼저 import를 수행한다

// main 폴더에 있는 TodoMain.jsx 파일을 TodoMain이라는 이름으로 사용하겠다

// 이렇게 선언을 하면 render() 함수 내에서 일반 tag와 같은 방식으로 사용할 수 있다
import TodoMain from "./main/TodoMain";

/*
클래스type 컴포넌트
class 키워드로 시작되고
반드시 Component를 extends(상속)하여 준비
*/
class App extends Component {
  id = 5;
  state = {
    input: "",
    todoList: [
      { id: 0, text: "오늘 마감할일", checked: true },
      { id: 1, text: "공모전 서류제출", checked: true },
      { id: 2, text: "리액트 폼 작성", checked: false },
      { id: 3, text: "스프링 시큐리티", checked: false },
      { id: 4, text: "Naver RestTemplete", checked: false }
    ]
  };

  /*
  TodoForm input box에 value={input}과 같은 형태가 되고
  {input}은 props 상태로 컴포넌트에 전달되어 readOnly 상태가 된다
  그래서 input box에 onChange 이벤트를 설정하여
  키보드에서 입력된 글자를 {input}에 강제로 붙여주는 일을 수행해야 한다

  e.target.value : 키보드 입력을 캡쳐하는 키보드 이벤트
  */
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  // Enter키를 눌렀을때 자동으로 추가 버튼이 클릭되도록
  handleKeyPress = e => {
    if (e.key == "Enter") {
      this.handleCreate();
    }
  };

  handleCreate = () => {
    const { input, todoList } = this.state;
    this.setState({
      input: "",
      // 기존 객체(JSON)배열에 새로운 객체(JSON)를 추가하는 함수
      todoList: todoList.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  // react LifeCycle 중에 작동되는 method
  // 최초에 어플이 실행되면 한번 작동이 되고
  // 데이터나, 화면 디자인이 변경되면 호출되는 method
  render() {
    // 자식 컴포넌트에 데이터를 전달하기 위해서
    // state로 선언된 데이터들을 props로 변환하기
    const { input, todoList } = this.state;

    // 현재 클래스에서 만든 method를 통째로 자식 컴포넌트에 전달하기 위해서 props로 생성
    const { handleCreate, handleChange, handleKeyPress } = this;

    return (
      <div>
        <TodoMain
          input={input}
          todoList={todoList}
          onCreate={handleCreate}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    );
  }
}

export default App;
