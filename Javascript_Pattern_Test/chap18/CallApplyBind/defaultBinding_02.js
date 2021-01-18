/**
 * this 기본 바인딩 2
 */

const obj = {
  val: 0,
  incrementValue() {
    this.val++;
  },
};

// obj에 정의한 함수를 가리키는 참조체를 만든다.
const incrementRef = obj.incrementValue;

incrementRef();
incrementRef();
incrementRef();

console.log(obj.val);
console.log(global.val); // 전역객체 : 브라우저에서는 window, 노드에서는 global

// ! 함수의 참조체를 통한 함수 호출도 this는 전역 바인딩이 된다.
// ! global.val은 생성할 때 초기값을 설정하지 않았기 때문에 undefined가 되고
// ! undefined에 + 1을 하면 NaN이 된다.
