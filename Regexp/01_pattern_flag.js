//* str.match로 검색하기

let str = 'We will, we will rock you.';

const result = str.match(/we/i);

console.log(result[0]);

console.log(result.index);
console.log(result.input);

//* str.replace로 치환하기

console.log('We will, we will'.replace(/we/i, 'I'));
console.log('We will, we will'.replace(/we/gi, 'I'));

console.log('I love HTML'.replace(/HTML/, '$& and Javascript'));

//* regexp.test로 일치 여부 확인하기
let str2 = 'I love Javascript';
let regexp = /LOVE/i;

console.log(regexp.test(str2));
