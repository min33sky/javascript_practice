let str = '+7(903)-123-45-67';

let regexp = /\d/;

console.log(str.match(regexp));

regexp = /\d/g;

console.log(str.match(regexp));

console.log(str.match(/\d/g).join(''));
console.log(str.replace(/\D/g, ''));

console.log('z'.match(/./));

console.log(/^$/.test(''));
console.log(/^$/.test(' '));
