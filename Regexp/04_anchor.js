//* 앵커: 문자열의 시작 ^ 과 끝 $

let str = 'Mary had a little lamb';
console.log(/^Mary/.test(str));

str = "it's fleece was white as snow";
console.log(/snow$/.test(str));

// 완전히 일치하는지 검사
let goodInput = '12:34';
let badInput = '12:345';

let regexp = /^\d\d:\d\d$/;
console.log(regexp.test(goodInput));
console.log(regexp.test(badInput));

//? 정규식 ^$의 결과는?

console.log(/^$/.test('')); // ''이 일치

//* m 플래그를 사용해서 여러 행 모드 활성화 (^, $의 작동 방식에만 영향을 준다)

str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log(str.match(/^\d/gm));
console.log(str.match(/^\d/g));

str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log(str.match(/\d$/gm));
console.log(str.match(/\d$/g));
console.log(str.match(/\d\n/g));
