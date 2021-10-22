//* Greedy and lazy quantifiers

//* greedy search(default)
let regexp = /".+"/g;

let str = 'a "witch" and her "broom" is one';

console.log(str.match(regexp));

//* lazy mode
// quntifier 이후에 ?을 두면 lazy 모드가 된다. (ex: +?, *?, ??)

regexp = /".+?"/g;

console.log(str.match(regexp));

console.log('123 456'.match(/\d+ \d+?/));

//* Alternative approach
regexp = /"[^"]+"/g;

str = 'a "witch" and her "broom" is one';

console.log(str.match(regexp));

//
str = '...<a href="link" class="doc">...';
regexp = /<a href=".*" class="doc">/g;

console.log(str.match(regexp));

str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
regexp = /<a href=".*" class="doc">/g;

//? lazy로 변경
regexp = /<a href=".*?" class="doc">/g;
console.log(str.match(regexp));

//! 헉
str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
regexp = /<a href=".*?" class="doc">/g;
console.log(str.match(regexp));

//? 해결
regexp = /<a href="[^"]*" class="doc">/g;
let str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
console.log(str.match(regexp));
console.log(str2.match(regexp));

//? /\d+? \d+?/g의 결과는?
console.log('123 456'.match(/\d+? \d+?/g));

//? html 주석 찾기
str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

regexp = /<!--.*?-->/gs;

console.log(str.match(regexp));

//? html 태그 찾기
regexp = /<[^<>]+>/g;

str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log(str.match(regexp));
