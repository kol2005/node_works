/*
useState
React 16.8.x 이후에 사용가능한 객체이며
Hooks 기능을 도입한 React 엔진에 장착되어 있고
함수형 component state형 변수를 사용할수 있다
props 변수는 읽기전용인데
내부에서 어떤 변화된 값들을 처리하고자 할때
state 변수를 사용한다
그런데 초기의 함수형 콤포넌트에서는 state형 변수를 사용할수 없었다
*/
import React, { useState } from "react";

const PlusMain_03 = () => {
  // useState()
  // 함수형 콤포넌트에서 state형 변수를 선언하고
  // 초기화를 수행하는 method
  const [message, setMesaage] = useState("");

  return <div></div>;
};

export default PlusMain_03;
