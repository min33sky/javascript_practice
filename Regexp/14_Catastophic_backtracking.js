//* Catastophic backtracking

let regexp = /^(\w+\s?)*$/;

console.log(regexp.test('A good string'));
console.log(regexp.test('Bad characters: $#@'));

//? 준내 오래걸린다
// str = 'An input string that takes a long time or even makes this regexp to hang!';
// console.log(regexp.test(str));
