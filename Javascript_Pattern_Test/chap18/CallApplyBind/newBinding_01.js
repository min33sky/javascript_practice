/**
 * 생성자 함수 안에서 this 바인딩
 */

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

let cnt = new Counter();
cnt.incrementValue();
cnt.incrementValue();
cnt.incrementValue();

console.log('최종 결과값: ' + cnt.val);
