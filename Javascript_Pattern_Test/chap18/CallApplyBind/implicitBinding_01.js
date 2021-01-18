/**
 * 암시적 바인딩
 */

function valIncrementor() {
  this.val++;
}

const obj = {
  val: 0,
  incrementValue: valIncrementor,
};

obj.incrementValue();
obj.incrementValue();
obj.incrementValue();

console.log(`최종 결과값 : ${obj.val}`);

// ! 객체 참조체를 통한 함수 호출의 this는 실행 함수를 포함 한 객체에 바인딩 된다.
