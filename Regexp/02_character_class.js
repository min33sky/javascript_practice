//* 문자 클래스

let str = '+7(903-123-45-67';
let regexp = /\d/g;

console.log(str.match(regexp));

console.log(str.match(regexp).join(''));

str = 'Is there CSS4?';
regexp = /CSS\d/;

console.log(str.match(regexp));
console.log('I love HTML5!'.match(/\s\w\w\w\w\d/));

//* 반대 클래스
str = '+7(903) - 123 - 45 - 67';

console.log(str.replace(/\D/g, ''));

//* . 은 아무 문자에나 일치한다.
console.log('Z'.match(/./));

regexp = /CS.4/;

console.log('CSS4'.match(regexp));
console.log('CS-4'.match(regexp));
console.log('CS 4'.match(regexp));

//! 문자의 부재와 일치하지는 않는다.
console.log('CS4'.match(regexp));
//! 줄바꿈 문자와도 일치하지 않는다.
console.log('A\nB'.match(/A.B/));
//* 하지만 s 플래그를 사용하면 일치하게 된다.
console.log('A\nB'.match(/A.B/s));

//? s 플래그를 지원하지 않는 브라우저가 있어서 [\s\S]를 사용해서 구현
console.log('A\nB'.match(/A[\S\s]B/));
