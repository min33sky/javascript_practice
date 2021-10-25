//* Lookahead and lokkbehind

//? Lookahead: X(?=Y)
let str = '1 turkey costs 30€';

console.log(str.match(/\d+(?=€)/));
console.log(str.match(/\d+(?=\s)(?=.*30)/));

//? Negative lookahead: X(?!Y)

str = '2 turkeys cost 60€';

console.log(str.match(/\d+(?!€)/));

//? Lookbehind:  (?<=Y)X
str = '1 turkey costs $30';
console.log(str.match(/(?<=\$)\d+/));

//? Negative Lookbehind: (?<!Y)X
str = '2 turkeys cost $60';

console.log(str.match(/(?<!\$)\d+/));

//? Capturing groups
str = '1 turkey costs 30€';
let regexp = /\d+(?=(€|kr))/;

console.log(str.match(regexp));

//* 음수 걸러내기

// regexp = /(?<![-\d])\d+/g;
regexp = /(?<!-)(?<!\d)\d+/g;
str = '0 12 -5 123 -18';

console.log(str.match(regexp));

//* Insert After Head

regexp = /(?<=<body.*?>)\s/;
str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

console.log(str.replace(regexp, `<h1>Hello</h1>`));
