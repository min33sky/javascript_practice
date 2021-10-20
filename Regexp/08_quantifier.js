//* Quantifiers

//? quantity {n}
//? \d{5} === \d\d\d\d\d

console.log("I'm 12345 years old".match(/\d{5}/));

console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/));

console.log("I'm not 12, but 345678 years oldl".match(/\d{3,}/));

let str = '+7(903)-123-45-67';

let numbers = str.match(/\d{1,}/g);

console.log(numbers);

//* shorthands
//? + === {1, }
//? ? === {0,1}
//? * === {0, }

console.log('+7(903)-123-45-67'.match(/\d+/g));
console.log('Should I write color or colour?'.match(/colou?r/g));
console.log('100 10 1'.match(/\d0*/g));
console.log('100 10 1'.match(/\d0+/g));

console.log('0 1 12.345 7890'.match(/\d+\.\d+/g));

console.log('<body> ... </body>'.match(/<\w+>/gi));

console.log('<h1>Hi!</h1>'.match(/<[a-z][a-z0-9]*>/gi));

console.log('<h1>Hi!</h1>'.match(/<\/?[a-z][a-z0-9]*>/gi));

//? ... 혹은 ....이상 를 찾아라
console.log('Hello!... How goes?.....'.match(/\.{3,}/g));

//? 색깔을 찾아라
let str2 = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';

console.log(str2.match(/\#[0-9a-f]{6}\b/gi));
