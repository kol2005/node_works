import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCQekGf5ZwitUImHRP7wpE6xzYmAndfung",
  authDomain: "react-firebase-7f146.firebaseapp.com",
  databaseURL: "https://react-firebase-7f146.firebaseio.com",
  projectId: "react-firebase-7f146",
  storageBucket: "react-firebase-7f146.appspot.com",
  messagingSenderId: "140705334183",
  appId: "1:140705334183:web:1322461c77ced3e934ac82",
};
/*
다른 js 파일에서 fire() 함수를 호출하여
 firebase 초기화와 database 연동까지 할 수 있도록 모듈 구성

 firebaseConfig.js 모듈을 여러곳의 Component에서 공유하여 사용할 예정인데
 공유하여 사용 할 경우 firebase.initializeApp() method가 여러번 실행되어
 문제를 일으킨다
 그래서 firebase.apps 항목이 이미 있으면 새로 생성하지 않고
 없으면 (!firebase.apps.length) 새로 생성하도록 코드를 변경
*/
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();
