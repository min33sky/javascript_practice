/**
 * this 기본 바인딩 1
 */

function incrementValue() {
  this.val++;
}

// 함수도 프로퍼티를 가질 수 있다.
incrementValue.val = 0;

incrementValue();
incrementValue();
incrementValue();

console.log(`최종 결과값 : ${incrementValue.val}`);

// ! 위 예제의 this는 전역객체에 바인딩된다.
// ! this는 함수 정의부가 아니라 호출부에 의해 결정된다.
