import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

/*
함수형 컴포넌트 
화살표 함수 형으로 코드가 시작되고
render() 함수 없고 바로 return()
*/
const TodoMain = ({ input, todoList, onCreate, onChange, onKeyPress }) => {
  return (
    <main>
      <div>할일</div>
      <div>
        <TodoForm
          value={input}
          onCreate={onCreate}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div>
        <TodoList todoList={todoList} />
      </div>
    </main>
  );
};

export default TodoMain;
