/**
 * this 기본 바인딩 3
 */

const obj = {
  val: 0,
  incrementValue() {
    'use strict';
    // 엄격 모드에서는 'this'는 기본적으로 window가 아닌 undefined에 바인딩된다.
    this.val++;
  },
};

// obj에 정의한 함수를 가리키는 참조체를 만든다.
const incrementRef = obj.incrementValue;

incrementRef();
incrementRef();

console.log(obj.val);

// ! this가 undefined에 바인딩 되므로 에러가 발생한다.
