var numberOne = 20;

function levelOne() {
  console.log(numberOne); // 20
}

// levelOne();

function levelOne() {
  var numberOne = 44444;

  console.log(numberOne); // 44444
}

// levelOne();

function levelOne() {
  var numberOne = 777;

  function levelTwo() {
    var numberTwo = 888;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne); // 20

/**
 * JS -> Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 *
 * 호출된 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne(); //? 3 (dynamic scope라면 100이 나올 것)

var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i in global scope : ${i}`);

// block level scope

i = 20000;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */
