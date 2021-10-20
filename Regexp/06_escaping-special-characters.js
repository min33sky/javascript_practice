//* Escaping, special characters
console.log('Chapter 5.1'.match(/\d\.\d/));
console.log('Chapter 511'.match(/\d\.\d/));

console.log('function g()'.match(/g\(\)/));

console.log('1\\2'.match(/\\/));

//? /는 특수 문자는 아니지만 자바스크립트에서 정규표현식을 열고 닫을 때 사용되므로 escape 해야한다
console.log('/'.match(/\//));

//? 생성자 호출을 이용한 동적 정규표현식을 사용할 경우엔 escape가 필요하지 않다.
console.log('/'.match(new RegExp('/')));

//* new RegExp

let regexp = new RegExp('\\d\\.\\d');
console.log('Chapter 5.1'.match(regexp));
