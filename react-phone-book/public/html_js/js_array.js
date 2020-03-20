// arr 배열의 각 요소값을 개별 변수에 담아서 사용하고 싶을때
var arr = ["홍길동", "이몽룡", "성춘향", "라푼젤"];
// ES5 이하의 old version
// var hong = arra[0];
// var lee = arra[1];
// var sung = arra[2];
// var rha = arra[3];

const [hong, lee, sung, rha] = arr;
console.log("hong", hong);
console.log("lee", lee);
console.log("sung", sung);
console.log("rha", rha);

const names = { name: "홍기동", phone: "1234", addr: "서울특별시" };
// var name=names.name
// name = names["name"]

const { name, addr, phone } = names;

console.log(name);
console.log(phone);
console.log(addr);

const my = { [name]: "홍길동", 주소: "서울" };
console.log(my.홍기동);
console.log(my.주소);
