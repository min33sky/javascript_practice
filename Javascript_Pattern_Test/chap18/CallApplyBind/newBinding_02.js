'use strict';

function Counter() {
  // 생성자 함수를 new 키워드로 실행하면
  // 'this'는 새 객체에 바인딩된다.
  this.val = 0;
}

Counter.prototype.incrementValue = function() {
  // 함수 안에서 'this'는 이 함수 호출 시
  // 객체 인스턴스를 분명히 가리켜야 하므로
  // 아직까진 암시적 바인딩에 따라 참조한다.
  this.val++;
};

let cnt = new Counter(); // ! 엄격모드에서는 cnt 이의외 참조체에서 함수 호출을 하면 에러 발생

let incrementRef = cnt.incrementValue;

// 에러!!
incrementRef();
