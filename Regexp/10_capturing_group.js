//* Capturing groups

console.log('Gogogo now!'.match(/go+/gi));
console.log('Gogogo now!'.match(/(go)+/gi));

//* 도메인
let regexp = /([\w-]+\.)+\w+/g;

console.log('site.com my.site.com my-site.com'.match(regexp));

//* 이메일

regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
console.log('my@mail.com @ his@site.com.uk'.match(regexp));

//* Parentheses contents in the match
let str = '<h1>Hello, world!</h1>';

let tag = str.match(/<(.*?)>/);

console.log(tag[0]);
console.log(tag[1]);

//* Nested Groups
str = '<span class="my">';

regexp = /<(([a-z]+)\s*([^>]*))>/;

result = str.match(regexp);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);

//* Optional groups

let match = 'ac'.match(/a(z)?(c)?/);

console.log(match.length);
console.log(match[0]);
console.log(match[1]);
console.log(match[2]);

//* matchAll
//? 배열 리턴이 아니라 이터러블 객체로 리턴된다.
//? 매치되지 않을 때 null이 아니라 빈 이터러블 객체를 리턴
str = '<h1> <h2>';
tags = str.match(/<(.*?)>/g);
console.log(tags);

results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
console.log(results);
console.log(results[0]);

results = Array.from(results);

console.log(results[0]);
console.log(results[1]);

//* Names groups : ?<name>

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
str = '2019-04-30';

let groups = str.match(dateRegexp).groups;

console.log(groups);
console.log(groups.year);
console.log(groups.month);
console.log(groups.day);

dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

str = '2019-10-30 2020-01-01';

results - str.matchAll(dateRegexp);

// for (let result of results) {
//   let { year, month, day } = result.groups;

//   console.log(`${day}.${month}.${year}`);
//   // first alert: 30.10.2019
//   // second: 01.01.2020
// }

//* Capturing groups in replacement

str = 'John Bull';
regexp = /(\w+) (\w+)/;

console.log(str.replace(regexp, '$2 $1'));

str = '2019-10-30, 2020-01-01';
regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

console.log(str.replace(regexp, '$<day>.$<month>.$<year>'));

//* Non-apturing groups with ?:

str = 'Gogogo John!';

// ?: excludes 'go' from capturing
regexp = /(?:go)+ (\w+)/i;

result = str.match(regexp);

console.log(result[0]);
console.log(result[1]);
console.log(result.length);

//? check MAC-Address

regexp = /([0-9A-F]{2}:){5}([0-9A-F])/gi;

console.log(regexp.test('01:32:54:67:89:AB'));
console.log(regexp.test('0132546789AB'));
console.log(regexp.test('01:32:54:67:89'));
console.log(regexp.test('01:32:54:67:89:ZZ'));

//? Find color in the format #abc or #abcdef

regexp = /#([a-f0-9]{3}){1,2}\b/gi;

str = 'color: #3f3; background-color: #AA00ef; and: #abcd';

console.log(str.match(regexp));

//? Find all numbers
regexp = /-?\d+(\.\d+)?/g;

str = '-1.5 0 2 -123.4.';

console.log(str.match(regexp));

//* Parse an expression

function parse(expr) {
  let regexp = /(-?\d+(\.\d+)?)\s*([-+*\/])\s*(-?\d+(\.\d+)?)/;
  let result = expr.match(regexp);
  if (!result) return [];
  result.shift();

  return result;
}

console.log(parse('-1.23 * 3.45'));
