/**
 *? generator functions return generator objects
 * - function* defines a generator function
 */

function* genFunction() {
  yield 'hello world';
}

let genObject = genFunction();

console.log(genObject.next()); // { value: 'hello world', done: false }
console.log(genObject.next()); // { value: undefined, done: true }
